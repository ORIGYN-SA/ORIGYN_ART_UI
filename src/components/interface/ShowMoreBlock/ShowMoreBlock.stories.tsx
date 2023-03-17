import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ShowMoreBlock from "./ShowMoreBlock";

export default {
  title: "Components/Interface/ShowMoreBlock",
  component: ShowMoreBlock,
} as Meta;

const Template: Story = (args) => (
  <ShowMoreBlock {...args}>
    Text, text textText, text textText, text textText, text textText, text textText, text textText, text textText,
    Text, text textText, text textText, text textText, text textText, text textText, text textText, text text
    Text, text textText, text textText, text textText, text textText, text textText, text textText, text text
  </ShowMoreBlock>
);

export const Default = Template.bind({});
Default.args = {};
