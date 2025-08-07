import React from "react";
import Maskgroupbg from "../../../assets/img/Mask Group.png";
import Maskgroupcar from "../../../assets/img/Mask Groupcar.png";
import HomeAboutBg from "../../../assets/img/homeaboutbg.jpg";
import { Link } from "react-router-dom";
function HomeAbout() {
  return (
    <div className="relative bg-[#EFEFEF] px-4 py-10 md:p-10">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Maskgroupbg})` }}
      ></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-center gap-15">
        <div className="relative w-full md:w-[500px]">
          <svg
            className="absolute bottom-[-23px] z-0"
            width="524"
            height="475"
            viewBox="0 0 524 475"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="523"
              height="474"
              rx="7.5"
              stroke="#F36F20"
            />
          </svg>
          <img
            src={Maskgroupcar}
            alt="Avtomobil şəkli"
            className="relative z-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
          <h2 className="text-[28px] md:text-[36px] text-black font-bold">
            Avtomobil kirayəsi Bakıda
          </h2>
          <svg
            width="55"
            height="4"
            viewBox="0 0 55 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="55" height="4" rx="2" fill="#F36F20" />
          </svg>

          <div className="text-[#707070] text-[16px] md:text-[18px] flex flex-col gap-4">
            <p>
              İstər xidmət səviyyəmiz, istərsə də yüksək keyfiyyətimizlə bir çox
              icarə maşın şirkətlərindən seçilir.
            </p>
            <p>
              Şirkət bu növ icarə maşınlarla məşğuldur: minik maşınlar,
              mikroavtobus və avtobusların (günlük, aylıq və uzunmüddətli)
              icarəsi.
            </p>
            <p>
              Geniş avtoparkımız sizə Bakı və Azərbaycanda istənilən vaxt
              istənilən növ icarə maşın götürməyə imkan verir.
            </p>
            <p>
              Şirkətin balansında son model sedan, suv, crossover, minivan, 4–55
              nəfər tutumlu komfortlu, geniş və təmiz icarə maşınlar mövcuddur.
            </p>
          </div>

          <Link to="/aboutus">
            <button className="relative cursor-pointer bg-transparent w-[150px] border border-[#F36F20] text-[#F36F20] font-bold rounded-md py-2 px-4 hover:bg-[#F36F20] hover:text-white transition duration-300">
              Ətraflı
              <svg
                className="absolute bottom-5 right-32 hidden md:block"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M26 1H9C4.58172 1 1 4.58172 1 9V26" stroke="#F36F20" />
              </svg>
              <svg
                className="absolute -bottom-2 -right-2 hidden md:block"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 25L17 25C21.4183 25 25 21.4183 25 17L25 0"
                  stroke="#F36F20"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="relative mt-16">
        <div className="flex justify-center items-center gap-[50px]">
          <div className="relative flex justify-center w-[220px] items-center">
            <img
              src={HomeAboutBg}
              alt="Təcrübə fonu"
              className="absolute w-[210px] h-[100px] rounded-md object-cover"
            />
            <div className="relative z-10 text-white text-center">
              <p className="text-[32px] md:text-[36px] font-bold">20+ il</p>
              <p>təcrübə</p>
            </div>
          </div>
          <div className="relative flex justify-center w-[220px]  items-center">
            <img
              src={HomeAboutBg}
              alt="Təcrübə fonu"
              className="absolute w-[210px] h-[100px] rounded-md object-cover"
            />
            <div className="relative z-10 text-white text-center">
              <p className="text-[32px] md:text-[36px] font-bold">80+</p>
              <p>icarə maşın</p>
            </div>
          </div>
          <div className="relative flex justify-center w-[220px]  items-center">
            <img
              src={HomeAboutBg}
              alt="Təcrübə fonu"
              className="absolute w-[210px] h-[100px] rounded-md object-cover"
            />
            <div className="relative z-10 text-white text-center">
              <p className="text-[32px] md:text-[36px] font-bold">98%</p>
              <p>müştəri məmnuniyyəti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
