import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Interface/Dropdown/All stories",
  component: Dropdown,
} as Meta;

const Template: Story = (args) => (
  <div style={{ height: "200px" }}>
    <Dropdown placeHolder="Select..." {...args} />
  </div>
);

export const primary = Template.bind({});
primary.args = {
  options: [
    { value: "green", label: "Green" },
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "pink", label: "Pink" },
  ],
};
