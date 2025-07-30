import React from "react";
import PizzaMizza from "../assets/PizzaMizza.png";
import Shop from "../assets/Shop.png";
function Lab() {
  return (
    <div className="max-w-[1320px] w-full md:w-[80%] mx-auto py-[100px] px-4 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-[50px]">
        <div className="flex flex-col gap-[20px] max-w-xl">
          <div>
            <p className="text-[#9857D3] text-sm">Featured Project</p>
            <p className="text-[#CCD6F6] text-[30px]">Pizza Project</p>
          </div>
          <div className="bg-gradient-to-r from-[#1f0c2c] to-[#3f1f6b] p-[30px] rounded-lg relative z-10">
            <p className="text-white">
              This is a modern, responsive pizza ordering web application built
              with a focus on user experience and dynamic functionality. Users
              can browse a variety of pizzas, add items to their cart, and
              manage their orders with ease.
            </p>
          </div>
          <button className="mt-4 w-max bg-[#9857D3] hover:bg-purple-800 transition text-white py-2 px-5 rounded-md">
            View Project
          </button>
        </div>
        <div className="relative w-full max-w-[500px]">
          <div className="absolute w-[400px] h-[400px] bg-purple-700 z-0 right-0 rounded-full blur-2xl opacity-30"></div>
          <img
            src={PizzaMizza}
            alt=""
            className="relative z-10 w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[50px]">
        <div className="relative w-full max-w-[500px]">
          <div className="absolute w-[400px] h-[400px] bg-purple-700 z-0 right-0 rounded-full blur-2xl opacity-30"></div>
          <img
            src={Shop}
            alt=""
            className="relative z-10 w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-[20px] max-w-xl">
          <div>
            <p className="text-[#9857D3] text-sm">Featured Project</p>
            <p className="text-[#CCD6F6] text-[30px]">Shop Project</p>
          </div>
          <div className="bg-gradient-to-r from-[#1f0c2c] to-[#3f1f6b] p-[30px] rounded-lg relative z-10">
            <p className="text-white">
              Shop Store is a modern e-commerce web application that allows
              users to browse, search, and purchase products through a clean and
              intuitive interface. It is built with scalability and performance
              in mind, featuring reusable components and optimized state
              management.
            </p>
          </div>
          <button className="mt-4 w-max bg-[#9857D3] hover:bg-purple-800 transition text-white py-2 px-5 rounded-md">
            <a href="https://shop-chi-beige.vercel.app/" target="blank_">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lab;
