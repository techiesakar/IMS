import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const MAX_BUTTON_DISPLAYED = 3; // Maximum number of page buttons to display
  const pageNumbers = Array.from(
    { length: totalPages },
    (ignoreThis, index) => index + 1
  );

  // Calculate the range of page numbers to display
  const getDisplayedPageNumbers = () => {
    if (totalPages <= MAX_BUTTON_DISPLAYED) {
      return pageNumbers;
    }

    const middleIndex = Math.floor(MAX_BUTTON_DISPLAYED / 2);
    const startPageIndex =
      currentPage <= middleIndex
        ? 0
        : Math.min(
            currentPage - middleIndex - 1,
            totalPages - MAX_BUTTON_DISPLAYED
          );
    const endPageIndex = Math.min(
      startPageIndex + MAX_BUTTON_DISPLAYED,
      totalPages
    );

    return pageNumbers.slice(startPageIndex, endPageIndex);
  };

  const displayedPageNumbers = getDisplayedPageNumbers();

  return (
    <div className="flex justify-center mt-6">
      {currentPage > 1 && (
        <button
          className="mx-1 px-3 py-1 rounded-md bg-gray-200"
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous"
        >
          &lt;
        </button>
      )}

      {displayedPageNumbers[0] > 1 && (
        <>
          <button
            className="mx-1 px-3 py-1 rounded-md bg-gray-200"
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {displayedPageNumbers[0] > 2 && <span className="mx-1">...</span>}
        </>
      )}

      {displayedPageNumbers.map((pageNumber, index) => (
        <button
          key={pageNumber}
          className={`mx-1 px-3 py-1 rounded-md ${
            currentPage === pageNumber
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {displayedPageNumbers[displayedPageNumbers.length - 1] < totalPages && (
        <>
          {displayedPageNumbers[displayedPageNumbers.length - 1] <
            totalPages - 1 && <span className="mx-1">...</span>}
          <button
            className="mx-1 px-3 py-1 rounded-md bg-gray-200"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {currentPage < totalPages && (
        <button
          className="mx-1 px-3 py-1 rounded-md bg-gray-200"
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
