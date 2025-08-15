import React from "react";
import Maskgroupbg from "../../../assets/img/Mask Group.png";
import Maskgroupcar from "../../../assets/img/Mask Groupcar.png";
import HomeAboutBg from "../../../assets/img/homeaboutbg.jpg";
import { Link } from "react-router-dom";
function HomeAbout() {
  return (
    <div className="relative bg-[#EFEFEF] px-4 py-10 md:p-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Maskgroupbg})` }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-center gap-12 md:gap-16">
        <div
          className="relative w-full max-w-md md:w-[500px]"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <svg
            className="absolute bottom-[-44px] md:bottom-[-60px] sm:bottom-[-80px] z-0"
            width="470"
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
            className="relative z-10 w-full rounded-md"
          />
        </div>

        <div
          className="flex flex-col gap-6 max-w-xl text-center md:text-left px-2 md:px-0"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] text-black font-bold">
            Avtomobil kirayəsi Bakıda
          </h2>

          <svg
            width="55"
            height="4"
            viewBox="0 0 55 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto md:mx-0"
          >
            <rect width="55" height="4" rx="2" fill="#F36F20" />
          </svg>

          <div className="text-[#707070] text-[14px] sm:text-[16px] md:text-[18px] flex flex-col gap-4">
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

          <Link to="/aboutus" className="self-center md:self-start">
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
      <div className="relative mt-16" data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-[50px]">
          {[
            ["20+ il", "təcrübə"],
            ["80+", "icarə maşın"],
            ["98%", "müştəri məmnuniyyəti"],
          ].map(([title, subtitle], i) => (
            <div
              key={i}
              className="relative flex hover:translate-y-[-20px] transition-all duration-300 hover: justify-center w-[220px] h-[100px] items-center"
            >
              <img
                src={HomeAboutBg}
                alt={`${title} fonu`}
                className="absolute w-[210px] h-[100px] rounded-md object-cover"
              />
              <div className="relative z-10 text-white text-center">
                <p className="text-[28px] sm:text-[32px] md:text-[36px] font-bold">
                  {title}
                </p>
                <p>{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
