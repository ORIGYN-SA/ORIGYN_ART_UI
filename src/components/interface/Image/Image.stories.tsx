import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Image from "./Image";
import Grid from "../../layout/Grid";

export default {
  title: "Components/Interface/Image/All stories",
  component: Image,
} as Meta;

const Template: Story = (args) => <Grid columns={3} mdColumns={3}>
  <Image {...args} />
</Grid>;

export const Default = Template.bind({});
Default.args = {
  src: 'http://placehold.jp/240x290.png',
};
