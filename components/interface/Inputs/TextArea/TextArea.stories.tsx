import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../../layout/Grid";
import TextArea, { TextAreaProps } from "./TextArea";

export default {
  title: "Components/Interface/Inputs/TextArea/All stories",
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "input",
  label: "Label text",
  placeholder: "Placeholder text",
  resize: "none",
};

export const filled = Template.bind({});
filled.args = {
  name: "input",
  label: "Label text",
  value: "Filled",
  placeholder: "Placeholder text",
};
