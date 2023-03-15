import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flex from "../../../layout/Flex";

export type RowType = {
  [key: string]: any;
};
type CellType = {
  id: string;
  label: string;
  canSort?: boolean;
};
export interface TableProps {
  cells: CellType[];
  rows: RowType[];
  cols?: number[];
}
type SortValue = {
  value: string;
  default: boolean;
};

const ArrowTop = styled("div")`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
`;
const ArrowBottom = styled("div")`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
`;

const SortedArrows = () => (
  <Flex gap={2} flexFlow="column">
    <ArrowTop />
    <ArrowBottom />
  </Flex>
);

const HistoryTable = ({ cells, rows, cols = [] }: TableProps) => {
  const [sortValue, setSortValue] = useState<SortValue>({
    value: "",
    default: true,
  });
  const [sortedRows, setSortedRows] = useState(rows);

  useEffect(() => {
    if (!sortValue.value) {
      return;
    }
    const rowsCopy = [...rows];
    const newRows = rowsCopy.sort((a, b) => {
      if (sortValue.default) {
        if (a[sortValue.value] > b[sortValue.value]) return -1;
        if (a[sortValue.value] < b[sortValue.value]) return 1;
        return 0;
      } else {
        if (a[sortValue.value] < b[sortValue.value]) return -1;
        if (a[sortValue.value] > b[sortValue.value]) return 1;
        return 0;
      }
    });

    setSortedRows(newRows);
  }, [sortValue]);

  const handleSortRows = (cell: CellType) => {
    if (sortValue.value !== cell.id) {
      setSortValue({ value: cell.id, default: true });
    } else {
      setSortValue((prev) => ({ value: prev.value, default: !prev.default }));
    }
  };

  return (
    <TableWrapper>
      <div>
        <TableHead>
          {cells.map((cell) => (
            <HeadColumn
              onClick={cell.canSort ? () => handleSortRows(cell) : undefined}
              key={cell.id}
              canSort={cell.canSort}
              className={cell.id === "details" ? "details" : ""}
            >
              <Flex align="center" gap={5}>
                {cell.label}
                {cell.canSort && <SortedArrows />}
              </Flex>
            </HeadColumn>
          ))}
        </TableHead>
      </div>
      <div>
        {sortedRows.map((row, i) => (
          <BodyWrapper key={i}>
            {cells.map((key) => (
              <BodyColumn
                key={key.id}
                className={key.id === "details" ? "details" : ""}
              >
                {row[key.id]}
              </BodyColumn>
            ))}
          </BodyWrapper>
        ))}
      </div>
    </TableWrapper>
  );
};

const TableWrapper = styled("div")`
  width: 100%;
  color: #000;
  white-space: nowrap;
`;
const TableHead = styled("div")`
  ${({ theme }) => `
    display: flex;
    padding: 10px;
    ${theme.media.md} {
      &.details {
        display: none;
      }
    }
  `}
`;
const HeadColumn = styled("div")<{ canSort: boolean | undefined }>`
  ${({ theme, canSort }) => `
    display: flex;
    flex-grow: 1;
    width: 20%;
    cursor: ${canSort ? "pointer" : "default"};
    font-size: 14px;
    font-weight: 600;
    ${theme.media.md} {
      width: 25%;
      &.details {
        display: none;
      }
    }
    ${theme.media.sm} {
      &:nth-child(2){
        display: none;
      }
      &:nth-child(4){
        display: none;
      }
    }
  `}
`;
const BodyWrapper = styled("div")`
  ${({ theme }) => `
    display: flex;
    background-color: white;
    padding: 10px;
    margin: 5px 0;
    ${theme.media.md} {
      &.details {
        display: none;
      }
    }
    ${theme.media.sm} {
      flex-wrap: wrap;
    }
  `}
`;
const BodyColumn = styled("div")`
  ${({ theme }) => `
    display: flex;
    flex-grow: 1;
    width: 20%;
    white-space: normal;
    ${theme.media.md} {
      width: 25%;
      &.details {
        display: none;
      }
    }
    ${theme.media.sm} {
      width: 50%;
      margin: 7px 0;
      
      &:nth-child(2n){
        order: 2;
      }
    }
  `}
`;

export default HistoryTable;
