import React from "react";
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

const cars = [
  { title: "EKONOM", image: car1, price: "60 AZN / Gün" },
  { title: "BIZNES", image: car2, price: "80 AZN / Gün" },
  { title: "Crossover&SUVs", image: car3, price: "100 AZN / Gün" },
  { title: "Premium", image: car4, price: "120 AZN / Gün" },
  { title: "Avtobuslar", image: car5, price: "140 AZN / Gün" },
];

function SliderSec() {
  return (
    <div className="relative px-4 sm:px-6 md:px-10 lg:px-[50px] py-[50px] overflow-hidden">
      <div
        className="bg-cover bg-center absolute inset-0 z-0"
        style={{ backgroundImage: `url(${sliderBg})` }}
      ></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Carousel className="w-full max-w-[1320px] mx-auto">
          <CarouselContent>
            {cars.map((car, index) => (
              <CarouselItem key={index}>
                <div className="p-6 sm:p-10 lg:p-[60px]">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="font-bold leading-tight text-[40px] sm:text-[60px] md:text-[80px] text-left">
                      <p className="text-primary">{car.title}</p>
                      <p className="text-black">KLASS</p>
                    </div>
                    <div className="text-[16px] sm:text-[18px] md:text-[24px] text-left">
                      <p className="text-[#282828] font-bold">Premium Klass</p>
                      <p>avtomobillərinin kirayəsi</p>
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center mt-10 space-y-4">
                    <img
                      src={car.image}
                      alt={`${car.title} car`}
                      className="object-cover w-full max-w-[600px] h-auto"
                    />
                    <div className="absolute top-4 left-4 bg-opacity-80 px-3 py-1 rounded text-[20px] sm:text-[24px] lg:text-[32px] font-bold text-[#282828]">
                      {car.price}
                    </div>
                    <button className="bg-orange-500 text-white cursor-pointer px-4 py-2 rounded w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] hover:bg-white hover:text-primary duration-300 transition-all">
                      İndi icarə et →
                    </button>
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
