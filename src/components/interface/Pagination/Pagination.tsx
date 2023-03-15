import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Flex from "../../layout/Flex";
import Container from "../../layout/Container";

const flexContainer: any = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px",
  gap: "24px",
  position: "absolute",
  width: "348px",
  height: "40px",
  left: "20px",
  top: "20px",
};

const PaginationContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 4px;
  padding: 0px;
  justify-content: center;
  width: 260px;
  height: 40px;
  .pageCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 11px;
    gap: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    background: transparent;
    border: 1px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0 6px;
    cursor: pointer;
    &:not([disabled]):hover {
      border: 1px;
    }
  }
`;

const textStyle: any = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "10px",
  lineHeight: "16px",
  letterSpacing: "-0,1px",
  width: "64px",
  height: "16px",
};

const MoreIconDiv: any = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
  gap: "10px",
  width: "40px",
  height: "40px",
  borderRadius: "999px",
};

const MoreIconText: any = {
  width: "9px",
  height: "20px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "20px",
  textAlign: "center",
};

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 0 0.5rem;
`;

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (prevPage: number) => void;
}

const Pagination = ({ pageCount, onPageChange }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const getPageRange = (currentPage: number, pageCount: number) => {
    if (pageCount < 4) {
      return [];
    }
    let pageRange = [1, 2, 3];
    if (currentPage > 1 && currentPage !== pageCount) {
      pageRange.length = 0;
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
      pageRange.push(currentPage + 1);
    } else if (currentPage === pageCount) {
      pageRange.length = 0;
      pageRange.push(currentPage - 2);
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
    }
    return pageRange;
  };

  const renderPageButtons = () => {
    let result = [];
    for (let i = 1; i < pageCount + 1; i++) {
      result.push(
        <Button
          size="small"
          textButton
          iconButton
          key={i}
          className={currentPage === i ? `pageCard active` : `pageCard`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Button>
      );
    }
    return result;
  };

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  return (
    <Container padding="8px">
      <Flex align="center" gap={16}>
        <p style={textStyle}>
          Page {currentPage} of {pageCount}
        </p>
        <PaginationContainer>
          {currentPage !== 1 && (
            <Button
              size="small"
              textButton
              iconButton
              onClick={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
              disabled={currentPage <= 1}
            >{`<`}</Button>
          )}
          {pageCount < 4 && renderPageButtons()}
          {currentPage >= pageCount - 2 && pageCount > 3 && (
            <>
              <Button
                size="small"
                textButton
                iconButton
                onClick={() => setCurrentPage(1)}
              >
                1
              </Button>
              <div>
                <p>...</p>
              </div>
            </>
          )}
          {getPageRange(currentPage, pageCount).map((page: number) => (
            <Button
              size="small"
              textButton
              iconButton
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          {currentPage < pageCount - 2 && pageCount > 3 && (
            <>
              <div style={MoreIconDiv}>
                <p style={MoreIconText}>...</p>
              </div>
              <Button
                size="small"
                textButton
                iconButton
                onClick={() => setCurrentPage(pageCount)}
              >
                {pageCount}
              </Button>
            </>
          )}

          <Button
            size="small"
            textButton
            iconButton
            onClick={() => {
              if (currentPage < pageCount) setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage === pageCount}
          >{`>`}</Button>
        </PaginationContainer>
      </Flex>
    </Container>
  );
};

export default Pagination;
