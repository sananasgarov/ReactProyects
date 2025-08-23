import React from "react";
import spiderman from "../../../assets/img/spiderman.jpg";
import spidermanbg from "../../../assets/img/spidermanbg.png";
function Spiderman() {
  return (
    <div className="bg-gradient-to-t from-[#1A0E01] to-[#010101]">
      <div className="relative mt-[50px] max-w-[1320px] mx-auto px-[50px]">
        <div>
          <div className=" mb-[20px] flex max-w-[750px] text-center mx-auto">
            <p className="text-[36px] font-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <br />
          <br />
          <div className="relative w-[500px]">
            <h2 className="text-[32px] font-bold">Lorem Ipsum</h2>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <br />
          <br />
          <div className="relative">
            <img
              src={spidermanbg}
              alt=""
              className="absolute right-[10%] top-[-60px] w-[200px] h-auto object-cover"
            />
            <img
              src={spiderman}
              alt=""
              className="relative z-10 w-full h-[500px] object-cover"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Spiderman;
