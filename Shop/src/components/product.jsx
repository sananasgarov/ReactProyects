import { useEffect, useState } from "react";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
function Product({
  name,
  price,
  stock,
  img,
  id,
  cartItems,
  setCartItems,
  totalPrice,
  setTotalPrice,
  setEmpty,
}) {
  const [isCartEmpty, setIsCartEmpty] = useState(cartItems.length === 0);
  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  function AddToCard() {
    const item = {
      id,
      img,
      name,
      price,
      count: 1,
    };

    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }

    setTotalPrice((prev) => prev + price);
    if (totalPrice === 0) {
      setEmpty("hidden");
    }
  }
  return (
    <div className="rounded-[20px] shadow-md border border-gray-200 relative">
      <button className="absolute top-2 right-2 text-[30px]">
        <FontAwesomeIcon icon={regularHeart} className="text-gray-700 hover:text-red-500" id="AddFav" />
      </button>
      <img
        src={img}
        alt={name}
        className="w-full object-cover rounded-t-[20px]"
      />
      <div className="flex flex-col p-[10px]">
        <p className="text-black mb-[20px]">{name}</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-red-500 font-bold">{price} AZN</p>
          <span className="font-bold">Stock: {stock}</span>
        </div>
        <button
          className="cursor-pointer"
          onClick={AddToCard}
          disabled={stock === 0}
        >
          <p className="flex items-center justify-center bg-[#ff003c] rounded-[10px] text-white py-[12px] w-full gap-2">
            <FontAwesomeIcon icon={faCartPlus} />
            Add To Cart
          </p>
        </button>
        <p className="flex gap-[5px] items-center mt-2">
          <FontAwesomeIcon icon={faTruckFast} /> 0 AZN
        </p>
      </div>
    </div>
  );
}

export default Product;
