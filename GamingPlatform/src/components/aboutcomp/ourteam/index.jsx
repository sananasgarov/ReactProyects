import React from "react";
import avatar1 from "../../../assets/img/avatar1.png";
import avatar2 from "../../../assets/img/avatar2.png";
import avatar3 from "../../../assets/img/avatar3.png";
import avatar4 from "../../../assets/img/avatar4.png";
function OurTeam() {
  return (
    <div className="max-w-[1320px] mx-auto mt-[50px]">
      <div>
        <div>
          <p className="text-[26px] font-semibold">Our Team</p>
        </div>
        <br />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[30px]">
          <div className="bg-[#1C140F] flex flex-col items-center justify-center rounded-2xl p-[30px]">
            <img src={avatar1} alt="" className="object-cover"/>
            <p className="text-[20px] font-semibold">John Peter</p>
            <p className="text-[#E8E8E8] font-light">COO</p>
          </div>
          <div className="bg-[#1C140F] flex flex-col items-center justify-center rounded-2xl p-[30px]">
            <img src={avatar2} alt="" className="object-cover"/>
            <p className="text-[20px] font-semibold">John Peter</p>
            <p className="text-[#E8E8E8] font-light">COO</p>
          </div>
           <div className="bg-[#1C140F] flex flex-col items-center justify-center rounded-2xl p-[30px]">
            <img src={avatar3} alt="" className="object-cover"/>
            <p className="text-[20px] font-semibold">John Peter</p>
            <p className="text-[#E8E8E8] font-light">COO</p>
          </div>
           <div className="bg-[#1C140F] flex flex-col items-center justify-center rounded-2xl p-[30px]">
            <img src={avatar4} alt="" className="object-cover"/>
            <p className="text-[20px] font-semibold">John Peter</p>
            <p className="text-[#E8E8E8] font-light">COO</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default OurTeam;
