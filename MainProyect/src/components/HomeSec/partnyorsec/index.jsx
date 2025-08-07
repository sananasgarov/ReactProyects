import kapital from "../../../assets/img/kapital.png";
import silkway from "../../../assets/img/silkway.png";
import socar from "../../../assets/img/socar.png";
import cci from "../../../assets/img/cci.png";
import halliburtion from "../../../assets/img/halliburtion.png";
import getravel from "../../../assets/img/getravel.png";
import car8 from "../../../assets/img/car8.png";

function Partnyor() {
  return (
    <div className="flex flex-col gap-[70px]">
      <div className="flex flex-col items-center justify-center p-[50px] gap-[20px]">
        <p className="text-[36px] text-black font-bold">Partnyorlar</p>
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
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-[30px] px-4">
        <img src={kapital} alt="Kapital" className="object-cover w-full" />
        <img src={cci} alt="CCI" className="object-cover w-full" />
        <img src={socar} alt="SOCAR" className="object-cover w-full" />
        <img
          src={halliburtion}
          alt="Halliburton"
          className="object-cover w-full"
        />
        <img src={silkway} alt="Silkway" className="object-cover w-full" />
        <img src={getravel} alt="Getravel" className="object-cover w-full" />
      </div>
      <div className="bg-[#282828] w-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 bg-[#282828] mx-auto px-6 md:px-[80px] justify-center items-center py-[30px] gap-[30px]">
          <div className="flex flex-col text-white w-full max-w-[600px] gap-[20px]">
            <p className="text-[28px] md:text-[36px] font-bold">
              Bir neçə dəqiqəyə arenda maşın Bakıda
            </p>
            <p className="text-[18px] md:text-[20px]">
              Bakıda avtomobil kirayəsinin ən yaxşı şərtlərlə sürətli sifarişi
              üçün bizimlə əlaqə saxlayın
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px]">
              <input
                type="text"
                className="border-b border-[#F0F0F0] bg-transparent focus:outline-none text-[#F0F0F0] placeholder:text-[#F0F0F0] py-2"
                placeholder="Adınız və Soyadınız"
              />
              <input
                type="tel"
                name="phone"
                className="border-b border-[#F0F0F0] bg-transparent focus:outline-none text-[#F0F0F0] placeholder:text-[#F0F0F0] py-2"
                placeholder="Əlaqə nömrəniz"
                pattern="^\+994\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$"
              />
            </div>
            <button className="text-white bg-primary hover:bg-white hover:text-primary transition-all duration-400 cursor-pointer rounded-md py-[10px] px-[40px] w-fit">
              Rezervasiya
            </button>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={car8}
              alt="Car"
              className="w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnyor;
