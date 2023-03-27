import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ProgressBar, { ProgressProps } from "./ProgressBar";
import Flex from "../../layout/Flex";

export default {
  title: "Components/Interface/ProgressBar/All stories",
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressProps> = (args) => (
  <Flex>
    <ProgressBar {...args} />
  </Flex>
);

export const normal = Template.bind({});
normal.args = {
  open: false,
  progressLength: 13,
  currentProgressIndex: 0,
  title: "Progress Bar - Storybook",
  successMessage: "Success Message - Storybook",
};

export const with_progress_msg = Template.bind({});
with_progress_msg.args = {
  open: false,
  progressLength: 13,
  currentProgressIndex: 0,
  title: "Progress Bar - Storybook",
  successMessage: "Success Message - Storybook",
  progressMessage: "Sending tokens...",
};
