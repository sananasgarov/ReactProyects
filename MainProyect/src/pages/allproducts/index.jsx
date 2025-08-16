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
  const [showClass, setShowClass] = useState(false);
  const [className, setClass] = useState("Choose");
  const [showBrand, setShowBrand] = useState(false);
  const [brand, setBrand] = useState("Choose");
  const [showModel, setShowModel] = useState(false);
  const [model, setModel] = useState("Choose");
  const [year, setYear] = useState("Choose");
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCars = cars.slice(startIndex, startIndex + itemsPerPage);
  const [showYear, setShowYear] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const Year = [];
  cars.forEach((car) => {
    if (car.year && !Year.includes(car.year)) {
      Year.push(car.year);
    }
  });
  const Model = [];
  cars.forEach((car) => {
    if (car.model && !Model.includes(car.model)) {
      Model.push(car.model);
    }
  });
  const Brand = [];
  cars.forEach((car) => {
    if (car.make && !Brand.includes(car.make)) {
      Brand.push(car.make);
    }
  });
  const Class = [
    "Choose",
    "Ekonom",
    "Premium",
    "Business",
    "Crossover & SUVs",
    "Buses and Minivans",
  ];
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
      <div className="bg-white rounded-lg shadow-md py-[20px] gap-[40px] lg:absolute md:relative z-[2] left-0 right-0 mt-[-60px] mx-auto max-w-4xl flex flex-wrap items-center justify-center">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="text-gray-600">Class</p>
          <div className="relative w-[200px]">
            <button
              onClick={() => setShowClass(!showClass)}
              className="flex items-center justify-center text-[20px] gap-[5px] hover:text-primary transition-all duration-300"
            >
              {className}
              <svg
                width="10"
                height="7"
                viewBox="0 0 15 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00003 7C6.76638 7.00046 6.53994 6.91908 6.36003 6.77L0.360032 1.77C0.155815 1.60026 0.0273905 1.35635 0.0030108 1.09192C-0.0213689 0.827498 0.060293 0.564217 0.230032 0.360001C0.39977 0.155784 0.643682 0.02736 0.908108 0.0029803C1.17253 -0.0213994 1.43581 0.060262 1.64003 0.23L7.00003 4.71L12.36 0.390001C12.4623 0.306935 12.58 0.244904 12.7064 0.207472C12.8327 0.17004 12.9652 0.157946 13.0962 0.171886C13.2272 0.185825 13.3542 0.225521 13.4699 0.288695C13.5855 0.351869 13.6875 0.437274 13.77 0.540001C13.8616 0.642822 13.931 0.763449 13.9738 0.894322C14.0166 1.0252 14.0319 1.1635 14.0187 1.30056C14.0056 1.43762 13.9643 1.5705 13.8974 1.69085C13.8305 1.81121 13.7395 1.91646 13.63 2L7.63003 6.83C7.44495 6.95551 7.22313 7.01537 7.00003 7Z"
                  fill="#282828"
                />
              </svg>
            </button>
            <ul
              className={`flex flex-col ${
                showClass ? "block" : "hidden"
              } gap-[10px] px-[20px] overflow-y-auto h-[200px] scroll-auto absolute z-[100] bg-white shadow-md rounded-lg p-4 mt-2`}
            >
              {Class.map((item) => (
                <li
                  key={item}
                  className="text-gray-800 hover:text-primary transition-colors duration-300"
                >
                  <button
                    onClick={() => {
                      setClass(item);
                      setShowClass(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <svg
          width="1"
          height="70"
          viewBox="0 0 1 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="-2.18557e-08"
            x2="0.500003"
            y2="70"
            stroke="#E3E3E3"
          />
        </svg>

        <div className="flex flex-col  items-start gap-[10px]">
          <p className="text-gray-600">Brand</p>
          <div className="relative">
            <button
              onClick={() => setShowBrand(!showBrand)}
              className="flex items-center justify-center text-[20px] gap-[5px] hover:text-primary transition-all duration-300"
            >
              {brand}
              <svg
                width="10"
                height="7"
                viewBox="0 0 15 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00003 7C6.76638 7.00046 6.53994 6.91908 6.36003 6.77L0.360032 1.77C0.155815 1.60026 0.0273905 1.35635 0.0030108 1.09192C-0.0213689 0.827498 0.060293 0.564217 0.230032 0.360001C0.39977 0.155784 0.643682 0.02736 0.908108 0.0029803C1.17253 -0.0213994 1.43581 0.060262 1.64003 0.23L7.00003 4.71L12.36 0.390001C12.4623 0.306935 12.58 0.244904 12.7064 0.207472C12.8327 0.17004 12.9652 0.157946 13.0962 0.171886C13.2272 0.185825 13.3542 0.225521 13.4699 0.288695C13.5855 0.351869 13.6875 0.437274 13.77 0.540001C13.8616 0.642822 13.931 0.763449 13.9738 0.894322C14.0166 1.0252 14.0319 1.1635 14.0187 1.30056C14.0056 1.43762 13.9643 1.5705 13.8974 1.69085C13.8305 1.81121 13.7395 1.91646 13.63 2L7.63003 6.83C7.44495 6.95551 7.22313 7.01537 7.00003 7Z"
                  fill="#282828"
                />
              </svg>
            </button>
            <ul
              className={`flex flex-col ${
                showBrand ? "block" : "hidden"
              } gap-[10px] px-[20px] overflow-y-auto h-[200px] scroll-auto absolute z-[100] bg-white shadow-md rounded-lg p-4 mt-2`}
            >
              <li className="text-gray-800 hover:text-primary transition-colors duration-300">
                <button
                  onClick={() => {
                    setBrand("Choose");
                    setShowBrand(false);
                  }}
                >
                  Choose
                </button>
              </li>
              {Brand.sort().map((item, index) => (
                <li
                  key={index}
                  className="text-gray-800 hover:text-primary transition-colors duration-300"
                >
                  <button
                    onClick={() => {
                      setBrand(item);
                      setShowBrand(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <svg
          width="1"
          height="70"
          viewBox="0 0 1 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="-2.18557e-08"
            x2="0.500003"
            y2="70"
            stroke="#E3E3E3"
          />
        </svg>

        <div className="flex flex-col  items-start gap-[10px]">
          <p className="text-gray-600">Model</p>
          <div className="relative">
            <button
              onClick={() => setShowModel(!showModel)}
              className="flex items-center justify-center text-[20px] gap-[5px] hover:text-primary transition-all duration-300"
            >
              {model}
              <svg
                width="10"
                height="7"
                viewBox="0 0 15 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00003 7C6.76638 7.00046 6.53994 6.91908 6.36003 6.77L0.360032 1.77C0.155815 1.60026 0.0273905 1.35635 0.0030108 1.09192C-0.0213689 0.827498 0.060293 0.564217 0.230032 0.360001C0.39977 0.155784 0.643682 0.02736 0.908108 0.0029803C1.17253 -0.0213994 1.43581 0.060262 1.64003 0.23L7.00003 4.71L12.36 0.390001C12.4623 0.306935 12.58 0.244904 12.7064 0.207472C12.8327 0.17004 12.9652 0.157946 13.0962 0.171886C13.2272 0.185825 13.3542 0.225521 13.4699 0.288695C13.5855 0.351869 13.6875 0.437274 13.77 0.540001C13.8616 0.642822 13.931 0.763449 13.9738 0.894322C14.0166 1.0252 14.0319 1.1635 14.0187 1.30056C14.0056 1.43762 13.9643 1.5705 13.8974 1.69085C13.8305 1.81121 13.7395 1.91646 13.63 2L7.63003 6.83C7.44495 6.95551 7.22313 7.01537 7.00003 7Z"
                  fill="#282828"
                />
              </svg>
            </button>
            <ul
              className={`flex flex-col ${
                showModel ? "block" : "hidden"
              } gap-[10px] px-[20px] overflow-y-auto h-[200px] scroll-auto absolute z-[100] bg-white shadow-md rounded-lg p-4 mt-2`}
            >
              <li className="text-gray-800 hover:text-primary transition-colors duration-300">
                <button
                  onClick={() => {
                    setModel("Choose");
                    setShowModel(false);
                  }}
                >
                  Choose
                </button>
              </li>
              {Model.sort().map((item, index) => (
                <li
                  key={index}
                  className="text-gray-800 hover:text-primary transition-colors duration-300"
                >
                  <button
                    onClick={(e) => {
                      setModel(item);
                      setShowModel(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <svg
          width="1"
          height="70"
          viewBox="0 0 1 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="-2.18557e-08"
            x2="0.500003"
            y2="70"
            stroke="#E3E3E3"
          />
        </svg>

        <div className="flex flex-col  items-start gap-[10px]">
          <p className="text-gray-600">Year</p>
          <div className="relative">
            <button
              onClick={() => setShowYear(!showYear)}
              className="flex items-center justify-center text-[20px] gap-[5px] hover:text-primary transition-all duration-300"
            >
              {year}
              <svg
                width="10"
                height="7"
                viewBox="0 0 15 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00003 7C6.76638 7.00046 6.53994 6.91908 6.36003 6.77L0.360032 1.77C0.155815 1.60026 0.0273905 1.35635 0.0030108 1.09192C-0.0213689 0.827498 0.060293 0.564217 0.230032 0.360001C0.39977 0.155784 0.643682 0.02736 0.908108 0.0029803C1.17253 -0.0213994 1.43581 0.060262 1.64003 0.23L7.00003 4.71L12.36 0.390001C12.4623 0.306935 12.58 0.244904 12.7064 0.207472C12.8327 0.17004 12.9652 0.157946 13.0962 0.171886C13.2272 0.185825 13.3542 0.225521 13.4699 0.288695C13.5855 0.351869 13.6875 0.437274 13.77 0.540001C13.8616 0.642822 13.931 0.763449 13.9738 0.894322C14.0166 1.0252 14.0319 1.1635 14.0187 1.30056C14.0056 1.43762 13.9643 1.5705 13.8974 1.69085C13.8305 1.81121 13.7395 1.91646 13.63 2L7.63003 6.83C7.44495 6.95551 7.22313 7.01537 7.00003 7Z"
                  fill="#282828"
                />
              </svg>
            </button>
            <ul
              className={`flex flex-col ${
                showYear ? "block" : "hidden"
              } gap-[10px] px-[20px] overflow-y-auto h-[200px] scroll-auto absolute z-[100] bg-white shadow-md rounded-lg p-4 mt-2`}
            >
              <button
                onClick={() => setYear("Choose")}
                className="text-gray-800 hover:text-primary transition-colors duration-300"
              >
                Choose
              </button>
              {Year.sort().map((item, index) => (
                <li
                  key={index}
                  className="text-gray-800 hover:text-primary transition-colors duration-300"
                >
                  <button
                    onClick={(e) => {
                      setYear(item);
                      setShowYear(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
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
