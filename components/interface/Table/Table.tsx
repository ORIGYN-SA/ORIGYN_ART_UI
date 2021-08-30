import React from "react";
import styled from "styled-components";

export type RowType = {
  [key: string]: string;
};

export interface TableProps {
  cells: RowType[];
  rows: RowType[];
}

const StyledTable = styled.table`
  width: 100%;
  color: #000;
  border-spacing: 0;
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
`;
const StyledTd = styled.td`
  font-size: 14px;
  padding: 12px 24px;
`;

const Table = ({ cells, rows }: TableProps) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {cells.map((cell) => (
            <StyledTh key={cell.id}>{cell.label}</StyledTh>
          ))}
        </tr>
      </thead>
      <StyledTbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {cells.map((key, i) => (
              <StyledTd key={key.id}>{row[key.id]}</StyledTd>
            ))}
          </tr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

export default Table;
