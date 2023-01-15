import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ProgressBar, { ProgressProps } from "./ProgressBar"
import Flex from "../../layout/Flex";

export default {
  title: "Components/Interface/ProgressBar/All stories",
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressProps>= (args) =>(
  <Flex>
      <ProgressBar {...args} />
  </Flex>
  
);

export const normal= Template.bind({});
normal.args={
    open: false,
    itemsTotal: 13,
    itemIndex: 0,
    title: "Progress Bar - Storybook",
    successMessage: "Success Message - Storybook",
}