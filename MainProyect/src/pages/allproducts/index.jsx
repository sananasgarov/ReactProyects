import React, { createContext, useContext, useEffect, useState } from "react";
import singlepage1920 from "../../assets/img/single page image 1920.jpg";
import car6 from "../../assets/img/aboutcar2.jpg";
import { getAllCars } from "../../services";
import Car from "../../components/HomeSec/car";
import PaginationExample from "../../components/Paginition";
import { CarsContext } from "../../layout/main";

function AllProducts() {
  const { cars, setCars } = useContext(CarsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCars = cars.slice(startIndex, startIndex + itemsPerPage);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="w-full h-full rounded-full border-4 border-gray-300 border-t-orange-500 animate-spin"></div>
          <div className="absolute w-6 h-6 bg-orange-500 rounded-full shadow-md"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
        <div className="flex flex-col justify-center gap-5 items-center text-center">
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            İcarəyə verilən avtomobillər
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
        <div
          className="bg-cover bg-center absolute inset-0 z-[-1]"
          style={{ backgroundImage: `url(${singlepage1920})` }}
        ></div>
        <div className="bg-[#282828D9] absolute inset-0 z-[-1]"></div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 absolute z-[2] left-0 right-0 mx-auto max-w-4xl flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-[-60px] sm:mt-[-80px] md:mt-[-100px]">
        <div className="flex-1 flex flex-col text-gray-600 text-sm items-start font-medium">
          <label htmlFor="brand" className="mb-1">
            Brand
          </label>
          <select
            id="brand"
            className="w-full rounded-md py-2 px-3 cursor-pointer"
            defaultValue="toyota"
          >
            <option value="toyota">Toyota</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col text-gray-600 text-sm font-medium">
          <label htmlFor="sinif" className="mb-1">
            Sinif
          </label>
          <select
            id="sinif"
            className="w-full rounded-md py-2 px-3 text-gray-400 cursor-pointer"
            defaultValue="economy"
          >
            <option value="economy">Economy</option>
            <option value="luxury">Luxury</option>
            <option value="suv">SUV</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col text-gray-600 text-sm font-medium">
          <label htmlFor="model" className="mb-1">
            Model
          </label>
          <select
            id="model"
            className="w-full rounded-md py-2 px-3 text-gray-400 cursor-pointer"
            defaultValue="corolla"
          >
            <option value="corolla">Corolla</option>
            <option value="camry">Camry</option>
            <option value="rav4">RAV4</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col text-gray-600 text-sm font-medium">
          <label htmlFor="year" className="mb-1">
            İl
          </label>
          <select
            id="year"
            className="w-full rounded-md py-2 px-3 text-gray-400 cursor-pointer"
            defaultValue="2023"
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[1320px] mx-auto md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20">
        {currentCars.map((item, index) => (
          <Car
            title={item.model}
            year={item.year}
            fuel_type={item.fuel_type}
            cd
            transmission={item.transmission}
            img={item.photos[1]}
            type={item.engine.type}
            id={item.id}
            key={index}
          />
        ))}
      </div>
      <div className="flex justify-center pb-8 sm:pb-12">
        <PaginationExample
          cars={cars}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default AllProducts;
