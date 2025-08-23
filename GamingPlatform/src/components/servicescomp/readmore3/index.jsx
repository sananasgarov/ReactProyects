import React from "react";
import { Link } from "react-router-dom";
import crysis from "../../../assets/img/crysis.jpg";

function ReadMore3() {
  return (
    <div className="max-w-[1320px] mx-auto p-[30px]">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center justify-between gap-15 px-5 lg:px-0">
        <div className="space-y-10">
          <h2 className="text-[32px] font-bold">
            Lorem Ipsum is simply dummy text dummy text{" "}
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <Link>
            <button className="bg-[#DC7000] text-white cursor-pointer py-[15px] px-[40px] hover:bg-inherit hover:outline hover:outline-[#DC7000] transition-all duration-300 rounded-md">
              Read More
            </button>
          </Link>
        </div>
        <div className="">
          <img src={crysis} alt="" className="lg:h-[500px] object-cover sm:h-full sm:w-full" />
        </div>
      </div>
    </div>
  );
}

export default ReadMore3;
