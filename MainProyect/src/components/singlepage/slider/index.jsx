import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import DropdownMenuCheckboxes from "../daybtn";
import { Link } from "react-router";
import car6 from "../../../assets/img/car6.jpg";
function SliderSinglePage({ carData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-center gap-6 lg:gap-10 p-4 lg:p-6">
      <div className="w-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 mb-4"
        >
          <SwiperSlide>
            <img
              src={car6}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={car6}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={car6}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={car6}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 8 },
            640: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 12 },
          }}
        >
          <SwiperSlide>
            <img
              src={car6}
              className="w-full h-20 md:h-24 object-cover  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={car6}
              className="w-full h-20 md:h-24 object-cover  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={car6}
              className="w-full h-20 md:h-24 object-cover  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={car6}
              className="w-full h-20 md:h-24 object-cover  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={car6}
              className="w-full h-20 md:h-24 object-cover  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={carData?.photos[1]}
              className="w-full h-20 md:h-24 object-cover cursor-pointer"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p-4 lg:p-6 rounded-2xl flex flex-col justify-center items-start gap-4">
        <div className="inline-block px-3 py-1 text-xs md:text-sm font-semibold text-white bg-orange-500 rounded-full">
          Ekonom Klass
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold">
          {carData?.model}
        </h1>

        <p className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-bold">
          300 AZN
          <span className="text-sm md:text-base font-light">/gün</span>
        </p>

        <div className="space-y-2 text-gray-700 text-sm flex flex-col items-start md:text-base w-full">
          <div className="flex justify-between items-center gap-[20px]" id="day-rent">
            <span className="text-black font-bold">2–9 gün icarə:</span>
            <span className="text-[#707070]">300 AZN/gün</span>
          </div>
          <div className="flex justify-between items-center gap-[20px]" id="day-rent">
            <span className="text-black font-bold">10–25 gün icarə:</span>
            <span className="text-[#707070]">280 AZN/gün</span>
          </div>
          <div className="flex justify-between items-center gap-[20px]" id="day-rent">
            <span className="text-black font-bold">26–30 gün icarə:</span>
            <span className="text-[#707070]">220 AZN/gün</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full mt-4" id="featuresinglepage">
          <DropdownMenuCheckboxes />
          <Link to="/payment" className="flex-1">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-10 lg:px-12 py-3 font-bold rounded-lg text-sm md:text-base" id="rent-button">
              İndi icarə et
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SliderSinglePage;
