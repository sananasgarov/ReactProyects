import React, { useState } from "react";
export default function PaginationExample({
  cars,
  itemsPerPage = 8,
  onPageChange,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cars.length / itemsPerPage);
  const changePage = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  return (
    <div className="flex justify-center gap-2 mt-6 p-[50px]">
      <button
        onClick={() => changePage(Math.max(currentPage - 1, 1))}
        className="px-3 py-1 bg-white border-[1px] border-[#E3E3E3] rounded hover:bg-primary trasntion-all duration-300"
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => changePage(i + 1)}
          className={`px-3 border-[1px] border-[#E3E3E3] text-[#979797] py-1 rounded ${
            currentPage === i + 1
              ? "bg-primary text-white"
              : "bg-white hover:bg-primary hover:text-white cursor-pointer"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
        className="px-3 py-1 bg-white text-[22px]  rounded border-[1px] border-[#E3E3E3] hover:bg-primary trasntion-all duration-300"
      >
        ›
      </button>
    </div>
  );
}
