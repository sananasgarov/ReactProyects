import React from "react";
import { Link } from "react-router-dom";

function Countries() {
  return (
    <div className="space-y-10 text-center flex flex-col justify-center items-center p-[30px]">
      <div className="flex items-center justify-center gap-4">
        <Link to="/">
          <button className="hover:text-[#E87D0E] cursor-pointer trasntion-all duration-300">
            Home
          </button>
        </Link>
        <span>&gt;</span>
        <p className="text-[#E87D0E]">Contact Us</p>
      </div>
      <div className="space-y-5 ">
        <p className="font-bold text-[32px]">
          Lorem Ipsum is simply dummy text of the printing and.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
    </div>
  );
}

export default Countries;
