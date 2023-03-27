import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../layout/Grid";
import { SnackProvider } from "./SnackProvider";
import { Snack } from "./Snack";
import {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
} from "./exampleComponent";

export default {
  title: "Components/Interface/Snackbar",
  component: Snack,
} as Meta;

const Template1: Story = (args) => (
  <SnackProvider durationms={4000} maxSnack={4} position={"top-left"}>
    <Grid gap={20} columns={2}>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </Grid>
  </SnackProvider>
);

export const example = Template1.bind({});
