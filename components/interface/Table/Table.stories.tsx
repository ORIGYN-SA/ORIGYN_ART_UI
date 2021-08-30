import React from "react";
import { Meta, Story } from "@storybook/react";

import DefaultTable, { TableProps } from "./Table";

export default {
  title: "Components/Interface/Table",
  component: DefaultTable,
} as Meta;

const rows = [
  {
    date: "07 Jul, 2021",
    activity: "ICP Deposit",
    details: "xxxxxxx",
    amount: "100",
    status: "2 hrs 23sec",
  },
  {
    date: "07 Jul, 2021",
    activity: "ICP Deposit",
    details: "xxxxxxx",
    amount: "100",
    status: "2 hrs 23sec",
  },
];

const cells = [
  { id: "date", label: "Date" },
  { id: "activity", label: "Activity" },
  { id: "details", label: "Details" },
  { id: "amount", label: "Amount" },
  { id: "status", label: "Status" },
];

const TableStory: Story<TableProps> = ({ cells, rows, ...args }) => (
  <DefaultTable cells={cells} rows={rows} {...args} />
);

export const Table = TableStory.bind({});

Table.args = {
  cells: cells,
  rows: rows,
};
