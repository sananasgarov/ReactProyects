import { useEffect, useState } from "react";
import car6 from "../../../assets/img/car6.jpg";
import { Link } from "react-router-dom";
import Car from "../car";
import { getAllCars } from "../../../services";
function Cars() {
  const [active, setActive] = useState("Hamısı");
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const response = await getAllCars();
      setCars(response);
    };
    fetchCars();
  }, []);
  const categories = [
    "Hamısı",
    "Ekonom",
    "Biznes",
    "Premium",
    "Crossover&SUVs",
    "Avtobuslar və Mikroavtobuslar",
  ];
  return (
    <div className="py-[30px] px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <div
          className="flex flex-col justify-center items-center gap-[10px] mb-[50px]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <h2 className="text-black text-[36px]">
            İcarəyə verilən avtomobillər (klass üzrə)
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
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <ul className="text-[#979797] grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center items-center">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActive(category)}
                  className={`px-[20px] font-bold py-[7px] transition-all duration-300 border-[1px] rounded-md ${
                    active === category
                      ? "border-[#F36F20] text-[#F36F20]"
                      : "border-white text-[#979797] hover:border-[#F36F20] hover:text-[#F36F20]"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-[50px] p-[50px]"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          {cars.slice(0, 4).map((item, index) => (
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
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
        >
          <Link to="/allproducts">
            <button className="relative cursor-pointer bg-transparent w-[200px] border border-[#F36F20] text-[#F36F20] font-bold rounded-md py-2 px-4 hover:bg-[#F36F20] hover:text-white transition duration-300">
              Hamisini Gosder
              <svg
                className="absolute bottom-5 right-45 hidden md:block"
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
    </div>
  );
}

export default Cars;
