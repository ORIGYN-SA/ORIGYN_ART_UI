import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import BreadCrumbs, { BreadCrumbsProps } from "./BreadCrumbs";

export default {
  title: "Components/Interface/BreadCrumbs/All stories",
  component: BreadCrumbs,
} as Meta;

const Template: Story<BreadCrumbsProps> = (args) => <BreadCrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { title: "My portfolio", link: "#" },
    { title: "Digital twins", link: "#" },
    { title: "Certificate Name", link: "#" },
  ],
};
