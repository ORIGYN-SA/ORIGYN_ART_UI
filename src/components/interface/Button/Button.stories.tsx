import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import ArrowRight from "../../icons/ArrowRight";
import Flex from "../../layout/Flex";

export default {
  title: "Components/Interface/Button/All stories",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <>
  <Flex gap={16}>
    <Button {...args}>Enabled</Button>
    <Button {...args} className="hover">Hovered</Button>
    <Button {...args} className="active">Pressed</Button>
    <Button {...args} disabled>Disabled</Button>
  </Flex>
  <br/>
  <Flex gap={16}>
    <Button {...args}>Enabled <ArrowRight width={4} height={8} /></Button>
    <Button {...args} className="hover">Hovered <ArrowRight width={4} height={8} /></Button>
    <Button {...args} className="active">Pressed <ArrowRight width={4} height={8} /></Button>
    <Button {...args} disabled>Disabled <ArrowRight width={4} height={8} /></Button>
  </Flex>
  <br/>
  <Flex gap={16}>
    <Button {...args} iconButton><ArrowRight width={4} height={8} /></Button>
    <Button {...args} iconButton className="hover"><ArrowRight width={4} height={8} /></Button>
    <Button {...args} iconButton className="active"><ArrowRight width={4} height={8} /></Button>
    <Button {...args} iconButton disabled><ArrowRight width={4} height={8} /></Button>
  </Flex>
</>;

export const primary = Template.bind({});
primary.args = {};

export const primaryDisabled = Template.bind({});
primaryDisabled.args = { disabled: true };

export const small = Template.bind({});
small.args = {
  size: "small",
};

export const medium = Template.bind({});
medium.args = {
  size: "medium",
};

export const large = Template.bind({});
large.args = {
  size: "large",
};

export const smallTextButton = Template.bind({});
smallTextButton.args = {
  size: "small",
  textButton: true
};

export const mediumTextButton = Template.bind({});
mediumTextButton.args = {
  size: "medium",
  textButton: true
};

export const largeTextButton = Template.bind({});
largeTextButton.args = {
  size: "large",
  textButton: true
};

export const largeSecondaryButton = Template.bind({});
largeSecondaryButton.args = {
  btnType: "secondary",
};

export const largeOutlinedButton = Template.bind({});
largeOutlinedButton.args = {
  btnType: "outlined",
};

export const largeFilledButton = Template.bind({});
largeFilledButton.args = {
  btnType: "filled",
};

export const largeAccentButton = Template.bind({});
largeAccentButton.args = {
  btnType: "accent",
};