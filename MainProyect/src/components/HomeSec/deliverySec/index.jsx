import React from "react";
import delivery from "../../../assets/img/delivery.jpg";
import Maskgroupbg from "../../../assets/img/Mask Group.png";
function Delivery() {
  return (
    <div className="bg-[#DFDFDF] grid lg:grid-cols-2 md:grid-cols-1 items-start justify-center ">
      <div className="relative">
        <img
          src={delivery}
          alt=""
          className="w-[650px] h-[460px] object-cover"
        />
      </div>
      <div className="py-[30px] relative flex flex-col gap-[30px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Maskgroupbg})` }}
        ></div>
        <div
          className="absolute bg-cover inset-0 bg-center z-0"
          style={{ backgroundImage: `url(${Maskgroupbg})` }}
        ></div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[36px] text-black font-bold">Çatdırılma</p>
          <svg
            width="55"
            height="4"
            viewBox="0 0 55 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="55" height="4" rx="2" fill="#F36F20" />
          </svg>
        </div>
        <div className="text-[20px] text-[#282828] flex w-[600px] flex-col gap-[20px]">
          <p>
            AFN Transport olaraq her Class”a uygun arenda avtomobil
            modellərimizi istənilən ünvana çatdırılma mövcuddur.{" "}
          </p>
          <p>
            AFN Transport tam 10 ildir ki müştərilərinə arenda masinlar ilə
            təmin edir.
          </p>
          <p>
            Keyfiyyetli avotomobil, avtobus ve mikroavtobuslarin icaresi ucun
            AFN Transport.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
