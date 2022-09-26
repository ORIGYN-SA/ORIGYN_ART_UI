import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Dropdown from "./Dropdown";
import ArrowRight from "../../icons/ArrowRight";
import Flex from "../../layout/Flex";

export default {
  title: "Components/Interface/Dropdown/All stories",
  component: Dropdown,
} as Meta;

const Template: Story = (args) => <>
   <Dropdown placeHolder="Select..." />
</>;

export const primary = Template.bind({});
primary.args = {};



