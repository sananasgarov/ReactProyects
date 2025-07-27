import { useContext } from "react";
import { HeaderContext } from "../App";

function QuickCard({ item ,data }) {
  const { cartItems, setCartItems, totalPrice, setTotalPrice, setEmpty } = useContext(HeaderContext);
  function Add() {
    const product = data.find((d) => d.id === item.id);
    if (product && product.stock > item.count) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
      setTotalPrice((prev) => prev + item.price);
      if (totalPrice === 0) {
        setEmpty("hidden");
      }
    } else {
      alert("Insufficient stock for this item.");
    }
  }
  function Dec() {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, count: cartItem.count - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
    setTotalPrice((prev) => prev - item.price);
    if (totalPrice === item.price) {
      setEmpty("");
    }
  }

  function handleImageError(e) {
    e.target.src =
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
  }
  return (
    <div
      className={`grid grid-cols-3 justify-between items-center gap-2 mb-4 ${
        item.count === 0 ? "hidden" : ""
      }`}
    >
      <img
        src={item.img}
        className="w-[50px] h-[50px] object-cover rounded"
        onError={handleImageError}
      />
      <div>
        <p className="font-bold">{item.name}</p>
        <p className="text-sm">{(item.price * item.count).toFixed(2)} AZN</p>
      </div>
      <div className="flex items-center gap-1">
        <button className="bg-blue-600 text-white px-2 subs" onClick={Dec}>
          -
        </button>
        <span>{item.count}</span>
        <button className="bg-blue-600 text-white px-2 plus" onClick={Add}>
          +
        </button>
      </div>
    </div>
  );
}

export default QuickCard;
