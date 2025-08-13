import React from "react";
import delivery from "../../../assets/img/delivery.jpg";
import Maskgroupbg from "../../../assets/img/Mask Group.png";

function Delivery() {
  return (
    <div className="bg-[#DFDFDF]">
      <div className="max-w-[1320px] grid md:grid-cols-1 lg:grid-cols-2 items-start justify-center mx-auto">
        <div className="relative">
          <img
            src={delivery}
            alt=""
            className="w-full h-auto max-h-[460px] object-cover"
          />
        </div>
        <div className="py-8 px-4 md:px-8 relative flex flex-col gap-8 max-w-[600px] mx-auto lg:mx-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
            style={{ backgroundImage: `url(${Maskgroupbg})` }}
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 -z-20"
            style={{ backgroundImage: `url(${Maskgroupbg})` }}
          ></div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl md:text-4xl text-black font-bold">
              Çatdırılma
            </p>
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
          <div className="text-[16px] md:text-[20px] text-[#282828] flex flex-col gap-5">
            <p>
              AFN Transport olaraq her Class”a uygun arenda avtomobil
              modellərimizi istənilən ünvana çatdırılma mövcuddur.
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
    </div>
  );
}

export default Delivery;
