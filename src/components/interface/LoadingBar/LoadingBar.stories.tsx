import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Flex from "../../layout/Flex";
import  LoadingBar from  "./LoadingBar"

export default {
  title: "Components/Interface/LoadingBar/All stories",
  component: LoadingBar,
} as Meta;

const Template = (args: any) => (
  <>
  <LoadingBar display={true}></LoadingBar>
  </>
);

export const Default = Template.bind({});
