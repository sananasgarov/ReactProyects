import React from "react";
import { Link } from "react-router";

function Breadcrumb() {
  return (
    <div
      className="text-[#707070] flex items-center justify-start px-4 gap-[30px]"
      id="breadcrumb"
    >
      <Link to="/">
        <button className="hover:text-primary trasntion-all duration-300 cursor-pointer">
          Əsas səhifə
        </button>
      </Link>
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.800049 10L4.80005 6.00001L0.800048 2.00001L1.60005 0.400007L7.20005 6.00001L1.60005 11.6L0.800049 10Z"
          fill="#707070"
        />
      </svg>

      <Link to="/allproducts">
        <button className="hover:text-primary trasntion-all duration-300 cursor-pointer">
          İcarə maşınlar
        </button>
      </Link>
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.800049 10L4.80005 6.00001L0.800048 2.00001L1.60005 0.400007L7.20005 6.00001L1.60005 11.6L0.800049 10Z"
          fill="#707070"
        />
      </svg>
      <p className="text-[#F36F20]">Toyota Tacoma</p>
    </div>
  );
}

export default Breadcrumb;
