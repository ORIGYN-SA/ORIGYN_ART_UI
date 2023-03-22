import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import SecondaryNav, { SecondaryNavProps } from "./SecondaryNav";

export default {
  title: "Components/Interface/SecondaryNav",
  component: SecondaryNav,
} as Meta;

const Template: Story<SecondaryNavProps> = (args) => <SecondaryNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Vault",
  titleLink: "https://origyn.ch",
  principal: "jvdm5-xkwgc-4t2x7-ojmjd-ail2p-6agif-7m6a6-z6eok-oxueq-inzfb-zae",
  tabs: [
    { title: "NFT Detail" },
    { title: "Experience Page" },
    { title: "Data" },
    { title: "Library" },
  ],
  content: [
    <div>Content 1</div>,
    <div>Content 2</div>,
    <div>Content 3</div>,
    <div>Content 4</div>,
  ],
};
