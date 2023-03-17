import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Interface/Card/All stories",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}>Text</Card>;

export const noProps = Template.bind({});
noProps.args = {};

export const customPadding = Template.bind({});
customPadding.args = {
  padding: "24px",
};

export const filled = Template.bind({});
filled.args = {
  padding: "24px",
  type: "filled",
};

export const elevated = Template.bind({});
elevated.args = {
  padding: "24px",
  type: "elevated",
};

export const outlined = Template.bind({});
outlined.args = {
  padding: "24px",
  type: "outlined",
};

export const black = Template.bind({});
black.args = {
  padding: "24px",
  type: "outlined",
  bgColor: "NAVIGATION_BACKGROUND",
};
