import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Select, { CustomSelectProps } from "./Select";

export default {
  title: "Components/Interface/Inputs/Select/All stories",
  component: Select,
} as Meta;

const options = [
  { value: "80000", label: "80000" },
  { value: "75000", label: "75000" },
  { value: "70000", label: "70000" },
  { value: "65000", label: "65000" },
  { value: "60000", label: "60000" },
];

const Template: Story<CustomSelectProps> = (args) => {
  const [value, setValue] = useState();
  return <Select {...args} selectedOption={value} handleChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  options: options,
};

export const medium = Template.bind({});
medium.args = {
  options: options,
  inputSize: 'medium',
};

export const small = Template.bind({});
small.args = {
  options: options,
  inputSize: 'small',
};
