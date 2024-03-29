import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Flex, { FlexProps } from "./Flex";

export default {
  title: "Components/Layout/Flex/All stories",
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => (
  <Flex {...args}>
    <div style={{ backgroundColor: "#aaa" }}>Content</div>
    <div style={{ backgroundColor: "#aaa" }}>Content</div>
    <div style={{ backgroundColor: "#aaa" }}>Content</div>
  </Flex>
);

export const FlexRow = Template.bind({});
FlexRow.args = {
  flexFlow: "row",
  align: "flex-start",
  justify: "center",
  fullWidth: true,
  gap: 10,
};

export const FlexColumn = Template.bind({});
FlexColumn.args = {
  flexFlow: "column",
  align: "flex-start",
  justify: "center",
  fullWidth: true,
  gap: 10,
};
