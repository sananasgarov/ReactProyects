import React from "react";
import lol from "../../../assets/img/lol.jpg";
function AboutComp4() {
  return (
    <div className="bg-[#1C140F]">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-between items-center gap-10 py-[50px]">
          <div>
            <img src={lol} alt="League of Legends" />
          </div>
          <div>
            <p>Lorem ipsum</p>
            <br />
            <p className="text-[28px] font-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp4;
