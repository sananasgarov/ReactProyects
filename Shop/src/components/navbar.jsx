import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { HeaderContext } from "../App";
import { useContext } from "react";
function Navbar() {
  const {
    hidden,
    setHidden,
    setCartItems,
    addBtn,
    setAddBtn,
    setUrl,
  } = useContext(HeaderContext);
  function AddToCardModule() {
    setHidden(!hidden);
    document.body.style.overflow = hidden === "hidden" ? "hidden" : "auto";
  }
  return (
    <nav className="p-[20px] shadow-md flex justify-between items-center sticky top-0 left-0 right-0 z-[50]  bg-white">
      <div>
        <button className="cursor-pointer">
          <FontAwesomeIcon className="text-[24px]" icon={faTh} />{" "}
          <span className="text-gray-600 text-[24px]">Katalog</span>
        </button>
      </div>
      <div className="relative flex items-center gap-[30px]">
        <span className="absolute top-2 left-1 text-gray-400">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[24px]" />
        </span>
        <input
          onChange={(e) =>
            e.target.value === ""
              ? setUrl(
                  `https://dummyjson.com/products?limit=0&skip=0&select=title,price,thumbnail,stock`
                )
              : setUrl(
                  `https://dummyjson.com/products/search?q=${e.target.value}`
                )
          }
          type="text"
          placeholder="Search..."
          className="w-[500px] pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
        />
      </div>
      <div className="text-[24px] relative flex justify-between items-center gap-[20px]">
        <button className="cursor-pointer">
          <FontAwesomeIcon icon={regularHeart} className="text-gray-700" />
        </button>
        <div className="absolute left-10 h-full w-px bg-[black]"></div>
        <button className="cursor-pointer" onClick={AddToCardModule}>
          <FontAwesomeIcon icon={faCartShopping} className="text-gray-600" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
