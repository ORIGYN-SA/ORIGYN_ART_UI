import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getArrayMin, getArrayMax } from "../../../utils";
import { generateControlPoints } from "./utils";

type TooltipProps = {
  selectedIndex?: number;
  content?: string;
  display: "block" | "none";
  left: number;
  top: number;
};

const STooltip = styled.div<TooltipProps>`
  background: #151515;
  border-radius: 0.5rem;
  color: #43b8ca;
  display: none;
  font-family: "Montserrat";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  padding: 1rem;
  position: absolute;
  ${({ left, top, display }) => `
    display: ${display};
    left: ${left + 35}px;
    top: ${top + 30}px;
  `}
`;
type Point = {
  x: number;
  y: number;
};

type Dot = {
  position: Point;
  flat: Point;
};

type Data = {
  label: string;
  value: number;
};

export const LineChart = ({
  data: propsData,
  height = 350,
  width = 700,
  tooltipLabel,
  curv = 0,
  showDots = true,
  parabolize = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const [tooltip, setTooltip] = useState<TooltipProps>({
    content: "",
    display: "none",
    top: 0,
    left: 0,
  });
  const [data, setData] = useState<Data[]>([]);
  const [dots, setDots] = useState<Dot[]>([]);

  const getCanvasContext = useCallback(() => {
    if (canvasRef?.current) return canvasRef.current.getContext("2d");
  }, [canvasRef]);

  const MIN_DISTANCE_BETWEEN_LABELS = width * 0.15;
  const vData = 4;
  const speed = 3;
  const offset = 50.5;
  const chartHeight = height - 2 * offset;
  const chartWidth = width;
  const curvature = curv; // 0 = no curve

  let gradient,
    Min,
    Max,
    verticalUnit,
    lastLabelPosition = { x: 0, y: 0 };


  const setupChart = useCallback(() => {
    const A = {
      x: 0,
      y: 0,
    };
    const B = {
      x: 0,
      y: offset + chartHeight,
    };
    const C = {
      x: chartWidth,
      y: offset + chartHeight,
    };

    getCanvasContext().font = "14px Montserrat";

    getCanvasContext().beginPath();
    getCanvasContext().lineWidth = 1;
    getCanvasContext().strokeStyle = "#E3E3E3";
    // getCanvasContext().moveTo(A.x, A.y); // Linie Oy
    getCanvasContext().lineTo(B.x, B.y); // Linie Ox
    getCanvasContext().lineTo(C.x, C.y);
    getCanvasContext().stroke();

    // vertical ( A - B )

    // This needs adjustments in order to display the lines on the correct levels
    const dataAsArray = data.map((d) => d.value);
    Max = getArrayMax(dataAsArray);
    Min = getArrayMin(dataAsArray);
    console.log("Max", Max);
    console.log("Min", Min);
    const aStep = (chartHeight - offset / 2) / vData;
    const aStepValue = (Max - Min) / vData;
    verticalUnit = aStep / aStepValue;

    let a = [];
    getCanvasContext().textAlign = "right";
    getCanvasContext().textBaseline = "middle";
    for (let i = 0; i <= vData; i++) {
      if (i == 0) {
        a[i] = {
          x: A.x,
          y: A.y + offset / 2,
          val: Max,
        };
      } else {
        a[i] = {};
        a[i].x = a[i - 1].x;
        a[i].y = a[i - 1].y + aStep;
        a[i].val = a[i - 1].val - aStepValue;
      }
      //drawCoords(a[i], 3, 0); // Deseneaza indicatoare si text pentru Oy (vertical)
    }

    //horizontal ( B - C )
    let b = [];
    getCanvasContext().textAlign = "center";
    getCanvasContext().textBaseline = "hanging";
    const bStep = chartWidth / (data.length - 1); // valuesRy.length + 1 pentru padding in lateral

    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        b[i] = {
          x: B.x,
          y: B.y,
          val: data[0].label,
        };
        b[i].textOffset = -15;
        lastLabelPosition = B;
      } else {
        b[i] = {};
        b[i].x = b[i - 1].x + bStep;
        b[i].y = b[i - 1].y;
        b[i].val = data[i].label;
        if (i == data.length - 1) {
          b[i].textOffset = 15;
        } else {
          b[i].textOffset = 0;
        }
      }
      if (i !== 0) {
        if (b[i].x - lastLabelPosition.x > MIN_DISTANCE_BETWEEN_LABELS) {
          lastLabelPosition.x = b[i].x;
          drawCoords(b[i], b[i].textOffset, 3);
        }
      } else {
        drawCoords(b[i], b[i].textOffset, 3);
      }
    }
    if (b.length) setDots(generateDotsPosition(b, verticalUnit, Min, Max));

    getCanvasContext().lineWidth = 3;
    getCanvasContext().strokeStyle = "#43B8CA";
    getCanvasContext().fillStyle = "#5F5F5F";
  }, [data]);

  const animateChart = useCallback(
    (frames, volatileDots) => {
      if (!getCanvasContext()) return;
      const animationFrameId = window.requestAnimationFrame(() =>
        animateChart(frames, volatileDots)
      );
      frames += speed;
      getCanvasContext().clearRect(0, 0, width, height - 60);

      for (var i = 0; i < volatileDots.length; i++) {
        if (volatileDots[i].flat.y > volatileDots[i].position.y) {
          volatileDots[i].flat.y -= speed;
        }
      }
      drawCurve(volatileDots.map((dot) => dot.flat));
      for (var i = 0; i < volatileDots.length; i++) {
        // datele de la top
        // getCanvasContext().fillText(posDots[i].val, posFlat[i].x, posFlat[i].y - 25);
        getCanvasContext().beginPath();
        // We need the dot offset for the first and the last one, as they overflow out of the Chart
        let dotOffset = 0;
        if (i === 0) dotOffset = 3.5;
        else if (i === volatileDots.length - 1) dotOffset = -3;
        getCanvasContext().arc(
          volatileDots[i].flat.x + dotOffset,
          volatileDots[i].flat.y,
          3,
          0,
          2 * Math.PI
        );
        // Setting dots color
        if (showDots) {
          getCanvasContext().fillStyle = "#43B8CA";

          getCanvasContext().fill();
        }
      }
      if (frames >= Max * verticalUnit) {
        window.cancelAnimationFrame(animationFrameId);
      }
    },
    []
  );

  // Draws the bottom coordinates
  const drawCoords = (o, offX, offY) => {
    // Clear the previous label, using this when changing the frame
    getCanvasContext().clearRect(o.x, o.y + 2 * offY, width, 20);
    getCanvasContext().beginPath();
    getCanvasContext().moveTo(o.x - offX, o.y - offY);
    //getCanvasContext().lineTo(o.x + offX, o.y + offY);
    getCanvasContext().stroke();
    getCanvasContext().fillStyle = "#5F5F5F";
    getCanvasContext().font = "semibold 14px Montserrat";
    getCanvasContext().fillText(o.val, o.x - 2 * offX, o.y + 2 * offY);
  };

  // Draws the line between all dots
  const drawCurve = (p) => {
    var pc = generateControlPoints(curvature, p);

    getCanvasContext().beginPath();
    // getCanvasContext().moveTo(p[0].x, chartWidth + offset - 25);
    getCanvasContext().lineTo(p[0].x, p[0].y);
    getCanvasContext().quadraticCurveTo(pc[1][1].x, pc[1][1].y, p[1].x, p[1].y);

    if (p.length > 2) {
      // Central curves are cubic Bezier
      for (var i = 1; i < p.length - 2; i++) {
        getCanvasContext().bezierCurveTo(
          pc[i][0].x,
          pc[i][0].y,
          pc[i + 1][1].x,
          pc[i + 1][1].y,
          p[i + 1].x,
          p[i + 1].y
        );
      }
      // The first & the last curve are quadratic Bezier
      var n = p.length - 1;
      getCanvasContext().quadraticCurveTo(
        pc[n - 1][0].x,
        pc[n - 1][0].y,
        p[n].x,
        p[n].y
      );
    }

    getCanvasContext().stroke();

    // Here we go back to the bottom to draw the area we fill with gradient
    const GRADIENT_OFFSET_Y = 10;
    getCanvasContext().lineTo(
      p[p.length - 1].x,
      offset + chartHeight - GRADIENT_OFFSET_Y
    );
    getCanvasContext().lineTo(p[0].x, offset + chartHeight - GRADIENT_OFFSET_Y);
    getCanvasContext().save();

    gradient = getCanvasContext().createLinearGradient(
      chartWidth / 2,
      200,
      chartWidth / 2,
      chartHeight
    );
    gradient.addColorStop(0, "rgba(67, 184, 202, 0.1)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)");
    getCanvasContext().fillStyle = gradient;
    getCanvasContext().fill();
    getCanvasContext().restore();
  };

  const generateDotsPosition = useCallback(
    (b, verticalUnit, Min, Max) => {
      let _dots = [];
      for (const datum of data) {
        const i = _dots.length;
        const m = parabolize ? Math.pow(i / ((b.length) - 1), 1.25) : 1;
        //? 1 - (Math.sin((Math.PI / (b.length / 2)) * i - Math.PI / 2) + 1) / 20
        //: 1 + (Math.sin((Math.PI / (b.length / 2)) * i - Math.PI / 2) + 1) / 20;
        console.log(Math.pow(i / ((b.length) - 1), 2), i);
        _dots.push({
          position: {
            x: b[i].x * m,
            y: (b[i].y  - (datum.value - Min) * verticalUnit - offset / 2),
          },
          flat: {
            x: b[i].x * m,
            y: (b[i].y - offset / 2),
          },
        });
      }
      return _dots;
    },
    [data]
  );

  const getMousePosition = useCallback(
    (e: MouseEvent) => {
      const ClientRect = canvasRef.current.getBoundingClientRect();
      return {
        x: Math.round(e.clientX - ClientRect.left),
        y: Math.round(e.clientY - ClientRect.top),
      };
    },
    [canvasRef]
  );

  const onChartMouseMove = useCallback(
    (e: any) => {
      const m = getMousePosition(e);
      setTooltip({
        display: "none",
        content: "",
        top: 0,
        left: 0,
      });
      for (let i = 0; i < dots.length; i++) {
        getCanvasContext().beginPath();
        getCanvasContext().arc(
          dots[i].position.x,
          dots[i].position.y,
          20,
          0,
          2 * Math.PI
        );
        if (getCanvasContext().isPointInPath(m.x, m.y)) {
          setTooltip({
            selectedIndex: i,
            display: "block",
            top: m.y,
            left: m.x,
            content:
              "<strong>" + data[i].label + "</strong>: " + data[i].value + "$",
          });
        }
      }
    },
    [getCanvasContext(), dots, data, tooltip]
  );

  useEffect(() => {
    const _data = [];
    for (const label in propsData) {
      _data.push({
        label,
        value: propsData[label],
      });
    }
    setData(_data);
  }, [propsData]);

  useEffect(() => {
    setupChart();
  }, [data]);

  useEffect(() => {
    canvasRef.current.style.width = '100%';
    canvasRef.current.style.height = '100%';
    // ...then set the internal size to match
    canvasRef.current.width = canvasRef.current.offsetWidth;
    canvasRef.current.height = canvasRef.current.offsetHeight;
  }, [])

  useEffect(() => {
    if (data.length > 0 && dots.length > 0) {
      animateChart(0, dots);
    }
  }, [dots]);

  return (
    <div
      onMouseMove={(e) => onChartMouseMove(e)}
      style={{
        position: "relative",
        cursor: tooltip.display === "block" ? "pointer" : "auto",
      }}
    >
      <canvas ref={canvasRef} height={height} />
      {tooltip.content && (
        <STooltip
          top={tooltip.top}
          left={tooltip.left}
          display={tooltip.display}
        >
          <span>{data[tooltip.selectedIndex]?.label}</span>
          <div style={{ color: "white" }}>
            {tooltipLabel?.text ?? "Avg.Price"}:{" "}
            {data[tooltip.selectedIndex]?.value} {tooltipLabel?.unit ?? "$"}
          </div>
        </STooltip>
      )}
    </div>
  );
};
