import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Tooltip from "./Tooltip";
import ArrowRight from "../../icons/ArrowRight";
import Flex from "../../layout/Flex";
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox,
} from "./styled";

export default {
  title: "Components/Interface/Tooltip/All stories",
  component: Tooltip,
} as Meta;

const Template: Story = (args: any) => (
  <>
    <br />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tooltip text="I am a tooltip" {...args}>
        <TooltipTarget>This is a Tooltip</TooltipTarget>
      </Tooltip>
    </div>
    <br />
  </>
);

export const left = Template.bind({});
left.args = {
  position: "left",
};

export const right = Template.bind({});
right.args = {
  position: "right",
};

export const top = Template.bind({});
top.args = {
  position: "top",
};

export const bottom = Template.bind({});
bottom.args = {
  position: "bottom",
};
