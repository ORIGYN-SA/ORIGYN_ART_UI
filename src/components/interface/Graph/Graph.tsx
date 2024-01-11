import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { LineChart } from "./LineChart";

const SGraph = styled.div<{ width: number }>`
  ${({ width }) => `
    width: ${width ? `${width}px` : '100%'};
  `}
`;
const SFrames = styled.div`
  display: flex;
  flex-direction: row;
`;

const SFrame = styled.div<{ isSelected?: boolean }>`
  align-self: center;
  margin: 10px;
  padding: 0.5rem 1rem;
  text-align: center;
  color: ${({theme}) => theme.colors.TEXT};

  ${({ isSelected, theme }) => `${
    isSelected
      ? `
    background: ${theme.colors.BORDER};
    border-radius: 999px;
    cursor: pointer;
  `
      : ""
  }
  &:hover {
    background: ${theme.colors.BORDER};
    border-radius: 999px;
    cursor: pointer;
  }
`}
`;

const SGraphHeader = styled.div`
  display: flex;
  height: 76px;
  justify-content: space-between;
  padding: 24px;
`;

const SOverline = styled.div`
  color: #5f5f5f;
  font-family: "Montserrat";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.1px;
  line-height: 20px;
`;

const SToken = styled.div`
  font-family: "Montserrat";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.25px;
  line-height: 32px;
`;

const SPriceChange = styled.div<{ trend: "up" | "down" }>`
  ${({ trend }) => `color: ${trend === "up" ? "#43B8CA" : "#a90000"}`};
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 24px;
`;

const framesDefault = [
  { label: "1W", days: 7 },
  { label: "2W", days: 14 },
  { label: "1M", days: 30 },
  { label: "2M", days: 60 },
  { label: "1Y", days: 360 },
  { label: "ALL", days: 900 },
];

const findFrameByDays = (days: number, frames = framesDefault) =>
  frames.findIndex((frame) => frame.days >= days);

export const GraphHeader = ({
  onFrameChange,
  priceChange,
  selectedFrame,
  token,
  overline,
  hidePriceChange,
  frames
}: GraphHeaderProps) => {
  return (
    <SGraphHeader>
      <div>
        {overline && <SOverline>{overline}</SOverline>}
        <SToken>{token}</SToken>
        {!hidePriceChange && (
          <SPriceChange trend={priceChange > 0 ? "up" : "down"} className={priceChange > 0 ? "priceUp" : "priceDown"}>
            {parseFloat(priceChange.toString()).toFixed(3)}%
          </SPriceChange>
        )}
      </div>
      <SFrames>
        {frames.map((frame, index) => (
          <SFrame
            isSelected={selectedFrame === index}
            onClick={() => onFrameChange(index)}
            key={frame.days}
          >
            {frame.label}
          </SFrame>
        ))}
      </SFrames>
    </SGraphHeader>
  );
};
export const Graph = ({
  data,
  token,
  width,
  frame,
  overline,
  hidePriceChange,
  tooltipLabel,
  onFrameChange,
  frameAsDays,
  curvature,
  frames = framesDefault,
  showDots = true,
  parabolize = false,
}: GraphProps) => {
  const [selectedFrame, setSelectedFrame] = useState(
    frame ?? findFrameByDays(frameAsDays, frames) ?? 0
  );
  const [filteredData, setFilteredData] = useState({});
  const [priceChange, setPriceChange] = useState(0);

  useEffect(() => {
    // Here we are adding dummy data, we can have only
    // 2 data points passed as prop
    const dummyData = {};
    const firstKey =
      parseInt(Object.keys(data)?.[0]) ?? new Date().getTime() / 1000;
    for (let i = 0; i <= 300; i++) {
      const key = firstKey - i * 86400;
      dummyData[key] = 0;
    }
    data = { ...dummyData, ...data };
    let dataKeys = Object.keys(data);

    const { days } = frames[selectedFrame];
    const ratio =
      data[dataKeys[dataKeys.length - days]] /
      data[dataKeys[dataKeys.length - 1]];
    let change = ratio > 1 ? -Math.abs(1 - ratio) : 1 - ratio;
    setPriceChange(change * 100);

    const slicedKeys = dataKeys.slice(-days);
    const newFilteredData = {};

    slicedKeys.forEach((key) => {
      const date = new Date(parseInt(key) * 1000);
      const keyAsDate = `${date.toLocaleString("default", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}`;
      newFilteredData[date.getTime()] = data[key];
    });
    setFilteredData({ ...newFilteredData });
  }, [selectedFrame]);

  const _onFrameChange = (frame: number) => {
    onFrameChange && onFrameChange(frames[frame].days, frame);
    setSelectedFrame(frame);
  };

  return (
    <SGraph width={width}>
      <GraphHeader
        token={token}
        priceChange={priceChange}
        selectedFrame={selectedFrame}
        onFrameChange={_onFrameChange}
        overline={overline}
        hidePriceChange={hidePriceChange}
        frames={frames}
      />
      <LineChart data={filteredData} showDots={showDots} width={width} tooltipLabel={tooltipLabel} parabolize={parabolize} curv={curvature} />
    </SGraph>
  );
};

export default Graph;

type GraphProps = {
  onFrameChange: (days: number, frameIndex?: number) => void;
  data: Record<string | number, number>;
  token: string;
  width?: number;
  frame?: number;
  frameAsDays?: number;
  hidePriceChange?: boolean;
  overline?: string;
  tooltipLabel?: {
    text?: string;
    unit?: string;
  };
  curvature?: number;
  showDots?: boolean;
  parabolize?: boolean;
  frames?: Array<{label: string, days: number}>
};
type GraphHeaderProps = {
  onFrameChange: (days: number, frameIndex?: number) => void;
  priceChange: number;
  selectedFrame: number;
  token: string;
  hidePriceChange?: boolean;
  overline?: string;
  frames?: Array<{label: string, days: number}>
};
