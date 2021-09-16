import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../layout/Grid";
import InfoCard from "./InfoCard";
import TwitterIcon from "../../icons/PDF";
export default {
  title: "Components/Interface/InfoCard",
  component: InfoCard,
} as Meta;

const DefaultTemplate: Story = (args) => (
  <InfoCard
    text="Eliminates the risk of losing certificates of authenticity for works of art"
    {...args}
  />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  icon: <TwitterIcon />,
};

const GroupTemplate: Story = (args) => (
  <Grid gap={20} columns={3}>
    <InfoCard
      text="Eliminates the risk of losing certificates of authenticity for works of art"
      {...args}
    />
    <InfoCard
      text="Expands client base, resulting in a larger network of collectors and art enthusiasts"
      {...args}
    />
    <InfoCard text="Creates a global market for art exchanges" {...args} />
  </Grid>
);

export const Group = GroupTemplate.bind({});
Group.args = {
  icon: <TwitterIcon />,
};
