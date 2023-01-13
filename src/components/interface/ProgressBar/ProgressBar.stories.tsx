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
    open: true,
    closeModal: () => {},
    itemsNumber: 5,
    title: "Progress Bar - Storybook",
}