import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";

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

const ArrowTop = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
`;
const ArrowBottom = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
`;

const StyledTable = styled.table`
  width: 100%;
  color: #000;
  border-spacing: 0;
  white-space: nowrap;
`;
const StyledTbody = styled.tbody`
  background-color: #fff;
`;
const StyledTh = styled.th`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  text-transform: capitalize;
  padding: 12px 24px;
  cursor: ${({ canSort }: { canSort: boolean | undefined }) =>
    canSort ? "pointer" : "default"};
`;
const StyledTd = styled.td`
  font-size: 14px;
  padding: 12px 24px;
`;
const StyledCol = styled.col`
  width: ${(props) => props.width}%;
`;

const SortedArrows = () => (
  <Flex gap={2} flexFlow="column">
    <ArrowTop />
    <ArrowBottom />
  </Flex>
);

const Table = ({ cells, rows, cols = [] }: TableProps) => {
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
    <StyledTable>
      <colgroup>
        {cols.map((col) => {
          return <StyledCol width={col} />;
        })}
      </colgroup>
      <thead>
        <tr>
          {cells.map((cell) => (
            <StyledTh
              onClick={cell.canSort ? () => handleSortRows(cell) : undefined}
              key={cell.id}
              canSort={cell.canSort}
            >
              <Flex align="center" gap={5}>
                {cell.label}
                {cell.canSort && <SortedArrows />}
              </Flex>
            </StyledTh>
          ))}
        </tr>
      </thead>
      <StyledTbody>
        {sortedRows.map((row, i) => (
          <tr key={i}>
            {cells.map((key) => (
              <StyledTd key={key.id}>{row[key.id]}</StyledTd>
            ))}
          </tr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

export default Table;
