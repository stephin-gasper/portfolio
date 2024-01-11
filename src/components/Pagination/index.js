import { useMemo } from "react";
import PropTypes from "prop-types";
import { cx } from "@linaria/core";

import {
  paginationArrowLeftStyles,
  paginationArrowRightStyles,
  paginationArrowStyles,
  paginationContainerStyles,
  paginationItemBtnStyles,
  paginationItemDotsStyles,
  paginationItemStyles,
} from "./Pagination.style";

export const DOTS = "&#8230;";

const range = (start, end) => {
  const length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

/**
 * Simple pagination component which can be used in anywhere
 * with capability to show ellipsis in between range.
 * Check following article for reference {@link https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react | How to Build a Custom Pagination Component in React}
 *
 * @param {object} props - Props object
 * @param {number} props.currentPage - Represents the current active page using 1-based index
 * @param {Function} props.onPageChange - Callback function invoked with the updated page value when the page is changed
 * @param {number} props.pageSize - Represents the maximum data that is visible in a single page
 * @param {number} props.siblingCount - Represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.
 * @param {number} props.totalCount - Represents the total count of data available from the source
 *
 * @returns {import("react").ReactNode} - PageContent JSX element.
 */
const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount,
  totalCount,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change in our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  const getAcccessiblityTextForPageNumber = (pageNumber) => {
    if (pageNumber === 1) {
      return <span className="visually-hidden"> (first page)</span>;
    }
    if (pageNumber === lastPage) {
      return <span className="visually-hidden"> (last page)</span>;
    }
    return null;
  };

  return (
    <nav aria-label="pagination">
      <ul className={paginationContainerStyles}>
        {/* Left navigation arrow */}
        <li className={paginationItemStyles}>
          <button
            type="button"
            onClick={onPrevious}
            className={cx(
              "btn-reset",
              paginationItemBtnStyles,
              currentPage === 1 && "disabled",
            )}
          >
            <span
              className={cx(paginationArrowStyles, paginationArrowLeftStyles)}
            />
            <span className="visually-hidden">Previous Page</span>
          </button>
        </li>
        {paginationRange.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={`paginate-dots-${index}`}
                className={cx(paginationItemStyles, paginationItemDotsStyles)}
              >
                &#8230;
              </li>
            );
          }
          // Render our Page Pills
          return (
            <li key={`paginate-${pageNumber}`} className={paginationItemStyles}>
              <button
                type="button"
                className={cx(
                  "btn-reset",
                  paginationItemBtnStyles,
                  pageNumber === currentPage && "selected",
                )}
                {...(pageNumber === currentPage
                  ? { "aria-current": "page" }
                  : {})}
                onClick={() => {
                  onPageChange(pageNumber);
                }}
              >
                <span className="visually-hidden">Page</span>
                {pageNumber}
                {getAcccessiblityTextForPageNumber(pageNumber)}
              </button>
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li className={paginationItemStyles}>
          <button
            type="button"
            onClick={onNext}
            className={cx(
              "btn-reset",
              paginationItemBtnStyles,
              currentPage === lastPage && "disabled",
            )}
          >
            <span
              className={cx(paginationArrowStyles, paginationArrowRightStyles)}
            />
            <span className="visually-hidden">Next Page</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
  totalCount: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  siblingCount: 1,
};

export default Pagination;
