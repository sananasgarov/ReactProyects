import React, { useState, useMemo } from "react";

export default function PaginationExample({
  cars,
  itemsPerPage = 8,
  maxVisiblePages = 5,
  onPageChange,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cars.length / itemsPerPage);
  const pageRange = useMemo(() => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);
    if (end === totalPages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [currentPage, totalPages, maxVisiblePages]);
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };
  const buttonStyles = {
    base: "px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium transition-all duration-300",
    active: "bg-primary text-white",
    inactive: "bg-white text-gray-600 hover:bg-blue-50",
    disabled: "bg-gray-100 text-gray-400 cursor-not-allowed",
    icon: "w-10 h-10 flex items-center justify-center",
  };
  return (
    <div className="flex items-center justify-center gap-2 mt-6 p-4 sm:p-6">
      <button
        onClick={() => changePage(1)}
        disabled={currentPage === 1}
        className={`${buttonStyles.base} ${buttonStyles.icon} ${
          currentPage === 1 ? buttonStyles.disabled : buttonStyles.inactive
        }`}
        aria-label="First page"
      >
        ≪
      </button>
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${buttonStyles.base} ${buttonStyles.icon} ${
          currentPage === 1 ? buttonStyles.disabled : buttonStyles.inactive
        }`}
        aria-label="Previous page"
      >
        ‹
      </button>
      {pageRange[0] > 1 && <span className="px-2 text-gray-600">...</span>}
      {pageRange.map((page) => (
        <button
          key={page}
          onClick={() => changePage(page)}
          className={`${buttonStyles.base} ${
            currentPage === page ? buttonStyles.active : buttonStyles.inactive
          }`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}
      {pageRange[pageRange.length - 1] < totalPages && (
        <span className="px-2 text-gray-600">...</span>
      )}
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${buttonStyles.base} ${buttonStyles.icon} ${
          currentPage === totalPages
            ? buttonStyles.disabled
            : buttonStyles.inactive
        }`}
        aria-label="Next page"
      >
        ›
      </button>
      <button
        onClick={() => changePage(totalPages)}
        disabled={currentPage === totalPages}
        className={`${buttonStyles.base} ${buttonStyles.icon} ${
          currentPage === totalPages
            ? buttonStyles.disabled
            : buttonStyles.inactive
        }`}
        aria-label="Last page"
      >
        ≫
      </button>
    </div>
  );
}
