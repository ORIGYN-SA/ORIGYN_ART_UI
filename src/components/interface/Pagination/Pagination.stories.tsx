import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Pagination from "./Pagination";

export default {
  title: "Components/Interface/Pagination/All stories",
  component: Pagination,
} as Meta;

const Template: Story = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  return (
    <Pagination
      currentPage={currentPage}
      pageCount={args.pageCount}
      onPageChange={(page) => {
        setCurrentPage(page);
        if (args.onPageChange) {
          args.onPageChange(page);
        }
      }}
    />
  );
};

export const basic = Template.bind({});

basic.args = {
  currentPage: 1,
  pageCount: 10,
  onPageChange: (page: number) => {
    console.log("Page changed to:", page);
  },
};
