import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import TabContent, { TabContentProps } from "./TabContent";
import TabContentVertical, {
  TabContentVerticalProps,
  useTabContentVertical,
} from "./TabContentVertical";
import styled from "styled-components";

export default {
  title: "Components/Interface/TabContent",
  component: TabContent,
} as Meta;

const Template: Story<TabContentProps> = (args) => <TabContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { title: "Digital Twin" },
    { title: "Selling" },
    { title: "Buying" },
    { title: "Transaction" },
  ],
  content: [
    <div>Content 1</div>,
    <div>Content 2</div>,
    <div>Content 3</div>,
    <div>Content 4</div>,
  ],
  fullWidth: true,
  borderBottom: true,
  justify: "flex-start",
};

const LeftTopMargin = styled("div")`
  margin: 20px 50px 0 50px;
`;

const VerticalTemplate: Story<TabContentVerticalProps> = (args) => (
  <LeftTopMargin>
    <TabContentVertical {...args} />
  </LeftTopMargin>
);

export const VerticalTabs = VerticalTemplate.bind({});
VerticalTabs.args = {
  tabs: [
    { title: "Digital Twin" },
    { title: "Selling" },
    { title: "Buying" },
    { title: "Transaction" },
    { title: "Trading" },
    { title: "About" },
  ],
  content: [
    <div>Content 1</div>,
    <div>Content 2</div>,
    <div>Content 3</div>,
    <div>Content 4</div>,
    <div>Content 5</div>,
    <div>Content 6</div>,
  ],
};

const UseVerticalTemplate: Story<{
  steps: Array<{ title: string; content: any }>;
}> = ({ steps }) => {
  const [nav, content, step, setStep] = useTabContentVertical(steps);

  return (
    <LeftTopMargin>
      {nav}
      {content}
    </LeftTopMargin>
  );
};

export const UseVerticalTabs = UseVerticalTemplate.bind({});
UseVerticalTabs.args = {
  steps: [
    { title: "Digital Twin", content: <div>Content 1</div> },
    { title: "Selling", content: <div>Content 2</div> },
    { title: "Buying", content: <div>Content 3</div> },
    { title: "Transaction", content: <div>Content 4</div> },
    { title: "Trading", content: <div>Content 5</div> },
    { title: "About", content: <div>Content 6</div> },
  ],
};
