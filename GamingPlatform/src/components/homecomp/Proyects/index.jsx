import React from "react";
import foto1 from "../../../assets/img/foto1.jpg";
import foto2 from "../../../assets/img/foto2.jpg";
import foto3 from "../../../assets/img/foto3.jpg";
import foto4 from "../../../assets/img/foto4.jpg";
import foto5 from "../../../assets/img/foto5.jpg";
import foto6 from "../../../assets/img/foto6.jpg";
function Projects() {
  return (
    <div className="relative mt-[50px] text-center max-w-[1320px] mx-auto px-[30px] py-[80px]">
      <div>
        <h2 className="text-[32px] font-bold">Our Recent Projects</h2>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-template-cols-2 sm:grid-cols-1 gap-[20px]">
        <div>
          <img src={foto1} alt="" className="rounded-2xl object-cover"/>
        </div>
        <div>
          <img src={foto2} alt="" className="rounded-2xl w-full object-cover" />
        </div>
        <div>
          <img src={foto3} alt="" className="rounded-2xl w-full object-cover" />
        </div>
        <div className="">
          <img src={foto4} alt="" className="rounded-2xl w-full h-1/2 object-cover" />
        </div>
        <div className="">
          <img src={foto5} alt="" className="rounded-2xl w-full object-cover" />
        </div>
        <div>
          <img src={foto6} alt="" className="rounded-2xl w-full object-cover" />
        </div>
      </div>
      <div className="mt-[-100px]">
        <button className="font-bold rounded-lg px-[20px] py-[10px] bg-[#DC7000] hover:bg-inherit cursor-pointer hover:outline hover:outline-[#DC7000] text-white">SEE ALL</button>
      </div>
    </div>
  );
}

export default Projects;
