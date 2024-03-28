import React from "react";
import { Meta, Story } from "@storybook/react";

import DefaultTable, { TableProps } from "./CustomTable";

export default {
  title: "Components/Interface/Table/CustomTable",
  component: DefaultTable,
} as Meta;

const rows = [
  {
    date: "09 Aug, 2020",
    activity: "ICP Deposit",
    details: "xxxxxxx",
    amount: 100,
    status: "2 hrs 23sec",
  },
  {
    date: <div>test 11 Dec, 2020</div>,
    activity: "ICP Deposit",
    details: "xxxxxxx",
    amount: 200,
    status: "2 hrs 23sec",
  },
  {
    date: "07 Jul, 2021",
    activity: "ICP Deposit",
    details: "xxxxxxx",
    amount: 33,
    status: "2 hrs 23sec",
  },
];

const cells = [
  { id: "date", label: "Date", canSort: true },
  { id: "activity", label: "Activity" },
  { id: "details", label: "Details" },
  { id: "amount", label: "Amount" },
  { id: "status", label: "Status", canSort: true },
];

const TableStory: Story<TableProps> = ({ cells, rows, ...args }) => (
  <DefaultTable cells={cells} rows={rows} {...args} />
);

export const Table = TableStory.bind({});

Table.args = {
  cells: cells,
  rows: rows,
  // cols: [18, 18, 28, 18, 18],
};
