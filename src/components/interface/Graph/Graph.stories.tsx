import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState({1635724800: "10000000000.00"});
  const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    const resp = await fetch('https://api.origyn.com/ogy/supply/timeseries');
    const parsed = await resp.json();
  
    const graphData = parsed.reduce((r, v) => {
      const date = Math.floor(new Date(v.date).getTime() / 1000);
      r[date] = (v.totalSupply).toFixed(2);
      return r;
    }, {});
  
    console.log(graphData);
    setData(graphData);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])

  const framesDefault = [
    { label: "1W", days: 7 },
    { label: "2W", days: 14 },
    { label: "1M", days: 30 },
    { label: "2M", days: 60 },
    { label: "1Y", days: 360 },
    { label: "ALL", days: 900 },
  ];
  return (
    <div style={{ padding: 20, backgroundColor: "white" }}>
      {
        !isLoading && (
          <Graph {...args} data={data} showDots={false} frames={framesDefault} curvature={0.2} />
        )
      }
    </div>
  );
};

export const OGYGraph = Template.bind({});
OGYGraph.args = {
  width: 900,
  height: 300,
  token: "OGY",
  data: mockData,
  frame: 2,
};
export const ICPGraph = Template.bind({});
ICPGraph.args = {
  width: 900,
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
