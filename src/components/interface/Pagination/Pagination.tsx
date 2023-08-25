import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Flex from '../../layout/Flex';
import { theme } from '../../../utils';

const PagerWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  gap: 8px;
  justify-content: center;
`;

const PaginationContainer = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 0px;
  justify-content: center;
  height: 40px;
  align-items: center;
  button {
    min-width: 40px;
    min-height: 40px;
  }
`;

const Ellipses = styled('div')`
  padding-top: 6px;
  font-size: 18px;
  margin-left: 4px;
  margin-right: 4px;
`;

const textStyle: any = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  color: `${theme.colors.SECONDARY_TEXT}`,
  fontSize: '11px',
  lineHeight: '16px',
  letterSpacing: '-0,1px',
  width: '64px',
  height: '16px',
  whiteSpace: 'nowrap',
};

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (pageNumber: number) => void;
}

const getPagerButton = (pageNumber, isActive, onPageChange) => {
  return (
    <Button
      size='small'
      textButton
      iconButton
      key={`page-${pageNumber}`}
      className={isActive ? `active` : ``}
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
};

const Pagination = ({
  currentPage,
  pageCount,
  onPageChange,
}: PaginationProps) => {
  const renderPageButtons = () => {
    let result = [];
    const showFirstEllipses = pageCount > 5 && currentPage >= 4;
    const showLastEllipses = pageCount > 5 && currentPage <= pageCount - 3;

    // first page
    result.push(getPagerButton(1, currentPage === 1, onPageChange));

    if (showFirstEllipses) {
      result.push(<Ellipses key='ellipses-1'>...</Ellipses>);
    }

    // pages between first and last
    if (pageCount > 1) {
      let startPage = currentPage > 3 ? currentPage - 1 : 2;
      if (startPage < 2) {
        startPage = 2;
      } else if (startPage > pageCount - 3 && pageCount - 3 > 1) {
        startPage = pageCount - 3;
      }

      for (
        let i = startPage;
        i <= Math.min(startPage + 2, pageCount - 1);
        i++
      ) {
        result.push(getPagerButton(i, currentPage === i, onPageChange));
      }

      if (showLastEllipses) {
        result.push(<Ellipses key='ellipses-2'>...</Ellipses>);
      }

      // last page
      result.push(
        getPagerButton(pageCount, currentPage === pageCount, onPageChange)
      );
    }

    return result;
  };

  if (pageCount === 0) {
    return null;
  }

  return (
    <PagerWrapper>
      <Flex align='center'>
        <p style={textStyle}>
          Page {currentPage} of {pageCount}
        </p>
      </Flex>

      <Flex align='center'>
        <PaginationContainer>
          {/* < Previous Page */}
          {currentPage > 1 && (
            <Button
              key='prev-page'
              size='small'
              textButton
              iconButton
              onClick={() => {
                if (currentPage > 1) {
                  onPageChange(currentPage - 1);
                }
              }}
            >
              &lt;
            </Button>
          )}

          {/* Between Pages */}
          {renderPageButtons()}

          {/* Next Page > */}
          {currentPage < pageCount && (
            <Button
              key='next-page'
              size='small'
              textButton
              iconButton
              onClick={() => {
                if (currentPage < pageCount) {
                  onPageChange(currentPage + 1);
                }
              }}
            >
              &gt;
            </Button>
          )}
        </PaginationContainer>
      </Flex>
    </PagerWrapper>
  );
};

export default Pagination;
