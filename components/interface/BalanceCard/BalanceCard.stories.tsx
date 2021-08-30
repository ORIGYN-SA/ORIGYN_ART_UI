import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Balance, { BalanceCardProps } from "./BalanceCard";

export default {
  title: "Components/Interface/BalanceCard",
  component: Balance,
} as Meta;

const Template: Story<BalanceCardProps> = (args) => <Balance {...args} />;

export const Default = Template.bind({});
Default.args = {};
