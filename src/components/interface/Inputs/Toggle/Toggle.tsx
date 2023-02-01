import React from "react";
import styled from "styled-components";
import './Toggle.scss'

export interface ToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  handleToggle: any;
}

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #ee9907;
  }
  &:focus + .slider {
    box-shadow: 0 0 1px #ee9907;
  }
  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    left: -2px;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 20px;
  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Toggle = ({ checked, handleToggle, disabled, ...args }: ToggleProps) => {
  return (
    // didn't implement: <label className="toggle-switch-label "> because Switch has a predefined className='switch

    <Switch className="switch"> 
      <input
        className='toggle-switch-input'
        disabled={disabled}
        type="checkbox"
        checked={checked}
        onClick={(event: any) => handleToggle(event.target.checked)}
        {...args}
      />

       {/* didn't implement: <span className="toggle-switch-span "> because Slider has a predefined className='slider round'> */}

      <Slider className="slider round"></Slider>
    </Switch>
  );
};

export default Toggle;
