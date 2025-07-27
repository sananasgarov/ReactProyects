import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function Sort({ setUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const sortBy = (type, order = "asc") => {
    setUrl(`https://dummyjson.com/products?sortBy=${type}&order=${order}&limit=194&skip=0`);
    setIsOpen(false);
  };

  const showAll = () => {
    setUrl(
      `https://dummyjson.com/products?limit=194&skip=0&select=title,price,images,stock`
    );
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between items-center p-[30px]">
      <p
        className="cursor-pointer text-black text-[30px] w-[220px]"
        onClick={showAll}
      >
        All Products
      </p>

      <div className="relative">
        <button
          className="flex items-center gap-2 min-h-[40px] px-5 min-w-[145px] bg-[#f7f5f5] rounded-[10px] cursor-pointer border border-transparent"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faSort} />
          Sort
        </button>

        {isOpen && (
          <ul className="absolute top-12 left-0 gap-[5px] flex flex-col bg-[#f7f5f5] rounded-md shadow-md z-10">
            <li
              onClick={() => sortBy("title")}
              className="px-5 py-2 cursor-pointer hover:bg-black hover:text-white transition duration-300 rounded-md"
            >
              Title
            </li>
            <li
              onClick={() => sortBy("price", "asc")}
              className="px-5 py-2 cursor-pointer hover:bg-black hover:text-white transition duration-300 rounded-md"
            >
              Price Asc
            </li>
            <li
              onClick={() => sortBy("price", "desc")}
              className="px-5 py-2 cursor-pointer hover:bg-black hover:text-white transition duration-300 rounded-md"
            >
              Price Desc
            </li>
            <li
              onClick={() => sortBy("stock", "desc")}
              className="px-5 py-2 cursor-pointer hover:bg-black hover:text-white transition duration-300 rounded-md"
            >
              Stock Desc
            </li>
            <li
              onClick={() => sortBy("stock", "asc")}
              className="px-5 py-2 cursor-pointer hover:bg-black hover:text-white transition duration-300 rounded-md"
            >
              Stock Asc
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sort;
