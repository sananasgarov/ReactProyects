import React, { useEffect, useState } from "react";
import singlepage1920 from "../../assets/img/single page image 1920.jpg";
import car6 from "../../assets/img/aboutcar2.jpg";
import { Link } from "react-router";
import { getAllCars } from "../../services";
import Car from "../../components/HomeSec/car";
import PaginationExample from "../../components/Paginition";

function AllProducts() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCars();
        setCars(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCars = cars.slice(startIndex, startIndex + itemsPerPage);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });
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
      <div className="relative p-[100px]">
        <div className="flex flex-col justify-center gap-[20px] items-center ">
          <p className="text-[white] text-[36px] font-bold">
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
        <div className="bg-cover bg-center absolute bg-[#282828D9] inset-0 z-[-1]"></div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 absolute z-[2] left-115 top-80 max-w-5xl mx-auto flex items-center gap-12">
        <div className="flex flex-col text-gray-600 text-sm items-start font-medium">
          <label htmlFor="brand" className="mb-1">
            Brand
          </label>
          <select
            id="brand"
            className="rounded-md py-2 px-3  cursor-pointer"
            defaultValue="toyota"
          >
            <option value="toyota">Toyota</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex flex-col text-gray-600 text-sm font-medium">
          <label htmlFor="sinif" className="mb-1">
            Sinif
          </label>
          <select
            id="sinif"
            className="rounded-md py-2 px-3 text-gray-400 cursor-pointer"
            defaultValue=""
          >
            <option value="economy">Economy</option>
            <option value="luxury">Luxury</option>
            <option value="suv">SUV</option>
          </select>
        </div>
        <div className="flex flex-col text-gray-600 text-sm font-medium">
          <label htmlFor="model" className="mb-1">
            Model
          </label>
          <select
            id="model"
            className=" rounded-md py-2 px-3 text-gray-400 cursor-pointer"
            defaultValue=""
          >
            <option value="corolla">Corolla</option>
            <option value="camry">Camry</option>
            <option value="rav4">RAV4</option>
          </select>
        </div>
        <div className="flex flex-col text-gray-600 text-sm font-medium">
          <label htmlFor="year" className="mb-1">
            İl
          </label>
          <select
            id="year"
            className="rounded-md py-2 px-3 text-gray-400 cursor-pointer"
            defaultValue=""
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-md transition">
          Axtar
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-[50px] p-[100px]">
        {currentCars.map((item, index) => (
          <Car
            title={item.model}
            year={item.year}
            fuel_type={item.fuel_type}
            transmission={item.transmission}
            img={item.photos[1]}
            type={item.engine.type}
            id={item.id}
            key={index}
          />
        ))}
      </div>
      <PaginationExample
        cars={cars}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default AllProducts;
