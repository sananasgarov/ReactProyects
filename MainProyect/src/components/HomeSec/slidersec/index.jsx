import React, { useContext } from "react";
import sliderBg from "../../../assets/img/slider bg.png";
import car1 from "../../../assets/img/car1.png";
import car2 from "../../../assets/img/car2.png";
import car3 from "../../../assets/img/car3.png";
import car4 from "../../../assets/img/car4.png";
import car5 from "../../../assets/img/car5.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarsContext } from "../../../layout/main";
import { Link } from "react-router";

function SliderSec() {
  const { cars } = useContext(CarsContext);
  return (
    <div className="relative px-4 sm:px-6 md:px-10 lg:px-[50px] py-[50px] overflow-hidden">
      <div
        className="bg-cover bg-center absolute inset-0 z-0"
        style={{ backgroundImage: `url(${sliderBg})` }}
      ></div>

      <div className="relative z-10 flex items-center justify-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-screen">
        <Carousel className="w-full max-w-[1320px] mx-auto">
          <CarouselContent>
            {cars.slice(0, 5).map((car, index) => (
              <CarouselItem key={index}>
                <div className="p-4 sm:p-6 lg:p-[60px]">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="font-bold leading-tight text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px] text-left">
                      <p className="text-primary">{car.model}</p>
                      <p className="text-black">KLASS</p>
                    </div>
                    <div className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-left">
                      <p className="text-[#282828] font-bold">Premium Klass</p>
                      <p>avtomobillərinin kirayəsi</p>
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center mt-8 space-y-4">
                    <img
                      src={car1}
                      alt={`${car.common} car`}
                      className="object-cover w-full max-w-[300px] sm:max-w-[450px] md:max-w-[600px] h-auto rounded-lg"
                    />
                    <div className="absolute top-4 sm:top-0 left-4  bg-opacity-80 px-3 py-1 rounded text-[16px] sm:text-[20px] lg:text-[32px] font-bold text-[#282828]">
                      60 AZN/gün
                    </div>
                    <Link to={`/product/${car.id}`}>
                      <button className="bg-orange-500 text-white cursor-pointer px-3 sm:px-4 py-2 rounded w-[140px] sm:w-[180px] md:w-[200px] h-[40px] sm:h-[45px] md:h-[50px] hover:bg-white hover:text-primary duration-300 transition-all">
                        İndi icarə et →
                      </button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-primary hover:text-white transition-all duration-300" />
          <CarouselNext className="hover:bg-primary hover:text-white transition-all duration-300" />
        </Carousel>
      </div>
    </div>
  );
}

export default SliderSec;
