import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import './RangeSlider.scss'

export type RangeSliderProps = {
  initialValue?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
  step: number;
  onchange?: Function;
};

// const sliderThumbStyles = () => `
//    width: 12px;
//    height: 12px;
//    background: #151515;
//    border-radius: 50%;
//    border: none;
// `;

// const Styles = styled("div")`
//   .slider-parent {
//     position: relative;
//     width: 100%;
//   }
//   .value-thumb {
//     display: none;
//     font-family: "Montserrat";
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     padding: 0px 4px 0px 4px;
//     min-width: 32px;
//     width: fit-content;
//     height: 22px;
//     background: #151515;
//     border-radius: 999px;
//     font-weight: 600;
//     font-size: 12px;
//     line-height: 20px;
//     text-align: center;
//     color: #fefefe;
//     padding-top: 2px;
//     position: absolute;
//     left: 0px;
//   }
//   .range-input {
//     -webkit-appearance: none;
//     margin-top: 37px;
//     height: 2px;
//     outline: none;
//     background: rgba(154, 154, 154, 0.3);
//     background-image: linear-gradient(#151515, #151515);
//     border-radius: 1px;
//     background-repeat: no-repeat;
//     &::-webkit-slider-thumb {
//       -webkit-appearance: none;
//       ${(props) => sliderThumbStyles()}
//     }
//     &::-webkit-slider-runnable-track {
//       -webkit-appearance: none;
//       box-shadow: none;
//       border: none;
//       background: transparent;
//     }
//     &::-webkit-slider-thumb:hover {
//       box-shadow: 0 0 0 6px rgba(21, 21, 21, 0.08);
//     }
//     &::-webkit-slider-thumb:active {
//       box-shadow: 0 0 0 6px rgba(21, 21, 21, 0.16);
//       transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
//         left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
//         bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//     }
//   }
//   .range-input:disabled {
//     -webkit-appearance: none;
//     margin-top: 37px;
//     height: 2px;
//     outline: none;
//     background-image: linear-gradient(#9a9a9a, #9a9a9a);
//     border-radius: 1px;
//     background-repeat: no-repeat;
//     &::-webkit-slider-runnable-track {
//       -webkit-appearance: none;
//       box-shadow: none;
//       border: none;
//       background: transparent;
//     }
//     &::-webkit-slider-thumb {
//       box-shadow: none;
//       -webkit-appearance: none;
//       background: #9a9a9a;
//     }
//     &::-webkit-slider-runnable-track {
//       -webkit-appearance: none;
//       box-shadow: none;
//       border: none;
//     }

//     .value-thumb {
//       display: none;
//       flex-direction: row;
//       justify-content: center;
//       align-items: center;
//       min-width: 32px;
//       width: fit-content;
//       height: 22px;
//       background: #151515;
//       border-radius: 999px;
//       font-weight: 600;
//       font-size: 12px;
//       line-height: 20px;
//       text-align: center;
//       color: #fefefe;
//       position: absolute;
//       left: 0px;
//     }
//   }
// `;

const RangeSlider = ({
  initialValue,
  disabled,
  min,
  max,
  step,
  onchange,
}: RangeSliderProps) => {
  min = min || 0;
  max = max || 100;
  const [value, setValue] = useState(initialValue ? initialValue : min);
  const indicatorElement = useRef(null);
  const rangeElement = useRef(null);
  const onChangeAction = (e: any) => {
    setValue(e.target.value);
    if (onchange) {
      onchange(e.target.value);
    }
  };
  function MouseOver() {
    if (disabled == true) {
      indicatorElement.current.style.display = "none";
    } else {
      indicatorElement.current.style.display = "block";
    }
  }
  function MouseOut() {
    indicatorElement.current.style.display = "none";
  }
  function setBubbleAndBackground(
    rangeinput,
    rangeMin,
    rangeMax,
    bubble,
    value
  ) {
    if (value === 0) {
      value = min;
    } else {
      value = value;
    }
    rangeMin = rangeMin || 0;
    rangeMax = rangeMax || 100;
    var newVal = Number(((value - rangeMin) * 100) / (rangeMax - rangeMin));
    bubble.innerHTML = value;
    bubble.style.left = `calc(${newVal}% + (${-10 - newVal * 0.12}px))`;
    rangeinput.style.backgroundSize = `calc(${newVal}% + (${newVal * 0.01}px))`;
  }
  useEffect(() => {
    const min = rangeElement.current
      ? rangeElement.current.getAttribute("min")
      : 0;
    const max = rangeElement.current
      ? rangeElement.current.getAttribute("max")
      : 100;
    setBubbleAndBackground(
      rangeElement.current,
      min,
      max,
      indicatorElement.current,
      value
    );
  }, [value]);
  return (
    <div className="range-slide-style-div">
      <div className="slider-parent">
        <output className="value-thumb" ref={indicatorElement}>
          <p>{value}</p>
        </output>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          ref={rangeElement}
          className="range-input"
          onChange={onChangeAction}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
export default RangeSlider;
