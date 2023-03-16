import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import LoadingBar from "./LoadingBar";

export default {
  title: "Components/Interface/LoadingBar/All stories",
  component: LoadingBar,
} as Meta;

const Template = () => (
  <>
    <LoadingBar />
  </>
);

export const Default = Template.bind({});
