import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/img/notfound.png";
function NotFound() {
  return (
    <div className="mx-auto p-[50px] max-w-[1320px]">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-between items-center">
        <div className="relative">
          <p className="text-[180px] text-[#282828] font-bold">404</p>
          <div className="absolute w-[410px] h-[30px] bg-primary z-[-1] bottom-43 left-[-20px]"></div>
          <p className="text-[#282828] mb-[50px] text-[20px]">
            Axtardığınız səhifə tapılmadı
          </p>
          <Link to="/">
            <button className="text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer border-[1px] rounded-md border-primary px-[20px] py-[10px] font-bold bg-white">
              Əsas səhifəyə qayıt
            </button>
          </Link>
        </div>
        <div className="relative">
          <img src={NotFoundImg} alt="" />
          <div className="absolute w-[290px] h-[400px] bg-primary right-[-40px] top-10 z-[-1]"> </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
