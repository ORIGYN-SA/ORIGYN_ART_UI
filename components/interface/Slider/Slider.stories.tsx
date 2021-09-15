import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Stepper, { StepperProps } from "./Stepper";

export default {
  title: "Components/Interface/Stepper",
  component: Stepper,
} as Meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { title: "Step 1" },
    { title: "Step 2" },
    { title: "Step 3" },
    { title: "Step 4" },
    { title: "Step 5" },
  ],
  content: [
    <div>Step 1</div>,
    <div>Step 2</div>,
    <div>Step 3</div>,
    <div>Step 4</div>,
    <div>Step 5</div>,
  ],
};
