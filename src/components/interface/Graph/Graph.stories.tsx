import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Graph } from "./Graph";
import mockData from "./mockData.json";
import icpData from "./icpData.json";

export default {
  title: "Components/Interface/Graph/All stories",
  component: Graph,
} as Meta;

const Template: Story<any> = (args) => {
  return (
    <div style={{ padding: 20, backgroundColor: "white" }}>
      <Graph {...args} width="700px" />
    </div>
  );
};

export const OGYGraph = Template.bind({});
OGYGraph.args = {
  width: 700,
  height: 300,
  token: "OGY",
  data: mockData,
  frame: 2,
};
export const ICPGraph = Template.bind({});
ICPGraph.args = {
  width: 700,
  height: 300,
  token: "ICP",
  data: icpData,
  frame: 3,
};
export const Default = Template.bind({});
Default.args = {
  width: 700,
  height: 300,
  token: "Some Token",
  data: {
    "1663743600": 10,
    "1663815600": 7,
    "1663887600": 28,
    "1663959600": 50,
    "1664031600": 30,
    "1664103600": 24,
    "1664175600": 25,
    "1664247600": 60,
  },
};
