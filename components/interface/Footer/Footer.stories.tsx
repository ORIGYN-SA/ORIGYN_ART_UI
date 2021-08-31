import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Footer, { FooterProps } from "./Footer";

export default {
  title: "Components/Interface/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => (
  <Footer {...args}>Text</Footer>
);

export const Default = Template.bind({});
Default.args = {  };
