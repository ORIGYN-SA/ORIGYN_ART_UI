import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../../layout/Grid";
import TextInput, { TextInputProps } from "./TextInput";
import Banner from "../../Banner";

export default {
  title: "Components/Interface/Inputs/TextInput/All stories",
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => (
  <Banner>
    <Grid gap={20} columns={5}>
      <TextInput {...args} />
    </Grid>
  </Banner>
);

export const Default = Template.bind({});
Default.args = { name: "input", label: "Label text", placeholder: "Placeholder text", disabled: true };

export const medium = Template.bind({});
medium.args = { name: "input", inputSize: "medium", label: "Label text", placeholder: "Placeholder text" };

export const small = Template.bind({});
small.args = { name: "input", inputSize: "small", label: "Label text", placeholder: "Placeholder text" };

export const filled = Template.bind({});
filled.args = { name: "input", label: "Label text",optional: "  (Optional)", value: "Filled", placeholder: "Placeholder text" };

export const error = Template.bind({});
error.args = { name: "input", error: "This is not a valid email address", value: "error", label: "Label text", placeholder: "placeholder text" };
