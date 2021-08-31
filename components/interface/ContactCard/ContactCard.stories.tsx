import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ContactCard, { ContactCardProps } from "./ContactCard";

export default {
  title: "Components/Interface/ContactCard",
  component: ContactCard,
} as Meta;

const Template: Story<ContactCardProps> = (args) => (
  <ContactCard {...args}></ContactCard>
);

export const Default = Template.bind({});
Default.args = {};
