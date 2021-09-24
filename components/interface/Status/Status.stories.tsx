import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Status, { StatusProps } from "./Status";

export default {
  title: "Components/Interface/Status",
  component: Status,
} as Meta;

const Template: Story<StatusProps> = (args) => <Status {...args} />;

export const Pending = Template.bind({});
Pending.args = {
  label: "Test",
  status: "pending",
  maxWidth: 200,
};
export const Done = Template.bind({});

Done.args = {
  label: "Test",
  status: "done",
  maxWidth: 200,
};
