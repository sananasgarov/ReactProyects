import React, { useState } from "react";
function DropdownMenuCheckboxes() {
  const [days, setDays] = useState(10);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="rounded-md font-bold flex items-center justify-center gap-[10px] py-[10px] px-[30px] text-primary border border-primary"
      >
        {days} gün
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.9999 6.33333C5.80519 6.33371 5.6165 6.2659 5.46657 6.14166L0.466571 1.975C0.29639 1.83355 0.18937 1.63029 0.169054 1.40993C0.148737 1.18958 0.216789 0.970179 0.358238 0.799998C0.499686 0.629817 0.702946 0.522797 0.923301 0.502481C1.14366 0.482165 1.36306 0.550216 1.53324 0.691665L5.9999 4.425L10.4666 0.824999C10.5518 0.755777 10.6499 0.704084 10.7552 0.672891C10.8605 0.641698 10.9709 0.631619 11.0801 0.643235C11.1892 0.654851 11.2951 0.687932 11.3914 0.740577C11.4878 0.793222 11.5728 0.864393 11.6416 0.949998C11.7179 1.03568 11.7757 1.1362 11.8113 1.24527C11.847 1.35433 11.8598 1.46958 11.8488 1.5838C11.8379 1.69802 11.8034 1.80874 11.7477 1.90904C11.692 2.00934 11.6161 2.09704 11.5249 2.16666L6.52491 6.19166C6.37067 6.29626 6.18582 6.34614 5.9999 6.33333Z"
            fill="#F36F20"
          />
        </svg>
      </button>
      {showDropdown && (
        <ul className="rounded-md border text-black absolute py-[10px] w-[100px] border-primary  border-[#282828] px-[10px] flex flex-col gap-[10px]">
          <li className="hover:opacity-70">
            <button
              onClick={() => {
                setDays(5);
                setShowDropdown(false);
              }}
            >
              5 gün
            </button>
          </li>
          <li className="hover:opacity-70">
            {" "}
            <button
              onClick={() => {
                setDays(10);
                setShowDropdown(false);
              }}
            >
              10 gün
            </button>
          </li>
          <li className="hover:opacity-70">
            <button
              onClick={() => {
                setDays(15);
                setShowDropdown(false);
              }}
            >
              15 gün
            </button>
          </li>
          <li className="hover:opacity-70">
            <button
              onClick={() => {
                setDays(20);
                setShowDropdown(false);
              }}
            >
              20 gün
            </button>
          </li>
          <li className="hover:opacity-70">
            <button
              onClick={() => {
                setDays(25);
                setShowDropdown(false);
              }}
            >
              25 gün
            </button>
          </li>
          <li className="hover:opacity-70">
            <button
              onClick={() => {
                setDays(30);
                setShowDropdown(false);
              }}
            >
              30 gün
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenuCheckboxes;
