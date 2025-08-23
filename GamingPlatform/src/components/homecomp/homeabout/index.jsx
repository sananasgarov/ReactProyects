import React from "react";
import controller from "../../../assets/img/controller.png";
import cryengine from "../../../assets/img/cryengine.png";
import unity from "../../../assets/img/unity.png";
import unrealengine from "../../../assets/img/unrealengine.png";
function HomeAbout() {
  return (
    <div className="relative grid lg:grid-cols-2 items-center max-w-[1320px] mx-auto justify-between sm:grid-cols-1">
      <div className="w-[550px]">
        <div>
          <p className="text-[#E87D0E] text-[20px] font-bold">3D game Dev </p>
        </div>
        <br />
        <br />
        <div>
          <p className="text-[50px] font-bold">
            Work that we produce for our clients
          </p>
        </div>
        <br />
        <br />
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </div>
        <br />
        <br />
        <div>
          <button className="rounded-4xl px-[20px] py-[10px] bg-[#E87D0E] hover:bg-inherit hover:outline-[#E87D0E] hover:outline cursor-pointer transition-all duration-300">
            Get more details
          </button>
        </div>
      </div>
      <div className="relative ">
        <div>
          <img
            src={controller}
            alt=""
            className="relative w-full unity h-auto  top-[-130px] object-cover"
          />
        </div>
        <div>
          <img
            src={cryengine}
            alt=""
            className="absolute top-[10%] cryengine left-5 w-[100px] h-auto object-cover"
          />
        </div>
        <div>
          <img
            src={unity}
            alt=""
            className="absolute h-auto w-[100px] unity object-cover top-[40%] left-[-110px]"
          />
        </div>
        <div>
          <img
            src={unrealengine}
            alt=""
            className="absolute h-auto w-[60px] unity object-cover top-[10%] right-[40%]"
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default HomeAbout;
