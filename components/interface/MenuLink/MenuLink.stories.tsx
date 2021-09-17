import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import MenuLink, { MenuLinkProps } from "./MenuLink";

export default {
  title: "Components/Interface/MenuLink",
  component: MenuLink,
} as Meta;

const Template: Story<MenuLinkProps> = (args) => (
  <div>
    <MenuLink to="link" {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { children: "Link text" };

const ActiveTemplate: Story<MenuLinkProps> = (args) => (
  <div>
    <MenuLink to="link" className="active" {...args} />
  </div>
);

export const ActiveLink = ActiveTemplate.bind({});
ActiveLink.args = { children: "Link text" };
