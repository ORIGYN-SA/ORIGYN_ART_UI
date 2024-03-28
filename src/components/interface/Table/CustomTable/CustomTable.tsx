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
  border-bottom: 5px solid ${({ theme }) => theme.colors.TEXT};
`;
const ArrowBottom = styled("div")`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${({ theme }) => theme.colors.TEXT};
`;

const StyledTable = styled.table`
  width: 100%;
  color: ${({ theme }) => theme.colors.TEXT};
  white-space: nowrap;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 25px;
  overflow: hidden;
  td {
    padding: 15px;
    border-bottom: 1px solid #E1E1E1;
    > div {
      display: flex;
      align-items: center;
    }
  }
  tr {
    height: 104px;
  }
  thead {
    tr {
      background: ${({ theme }) => theme.colors.TEXT}!important;
      color: ${({ theme }) => theme.colors.TEXT_ON_BG};
      border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER};
      height: 64px;
    }
    th {
      border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER};
    }
    th:first-child {
      padding-left: 60px;
    }
    th:last-child {
      padding-left: 60px;
    }
  }
  tr td:first-child {
    padding-left: 60px;
    border-left: 1px solid #E1E1E1;
  }
  tr td:last-child {
    padding-right: 60px;
    border-right: 1px solid #E1E1E1;
  }

  tr td:first-child {
    
  }
  tr td:last-child {
    
  }
`;
const StyledTbody = styled.tbody``;
const StyledTh = styled.th<{ canSort: boolean | undefined }>`
  ${({ theme }) => `
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    text-transform: capitalize;
    padding: 12px 24px;
    svg {
      fill: ${theme.colors.TEXT}
    }
    cursor: ${({ canSort }: { canSort: boolean | undefined }) =>
      canSort ? "pointer" : "default"};
    ${theme.media.md} {
      &.details {
        display: none;
      }
    }
  `}
`;
const StyledTd = styled.td`
  ${({ theme }) => `
    font-size: 14px;
    padding: 12px 24px;
    white-space: normal;
    ${theme.media.md} {
      &.details {
        display: none;
      }
    }
  `}
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

const CustomTable = ({ cells, rows, cols = [] }: TableProps) => {
  const [sortValue, setSortValue] = useState<SortValue>({
    value: "",
    default: true,
  });
  const [sortedRows, setSortedRows] = useState(rows);

  const handleSortRows = (cell: CellType) => {
    if (sortValue.value !== cell.id) {
      setSortValue({ value: cell.id, default: true });
    } else {
      setSortValue((prev) => ({ value: prev.value, default: !prev.default }));
    }
  };

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

  useEffect(() => {
    if (sortValue.value) {
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
    } else {
      setSortedRows(rows);
    }
  }, [rows]);

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
              className={cell.id === "details" ? "details" : ""}
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
              <StyledTd
                key={key.id}
                className={key.id === "details" ? "details" : ""}
              >
                <div>{row[key.id]}</div>
              </StyledTd>
            ))}
          </tr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

export default CustomTable;
