import QuickCard from "./quickcard";
import { useContext } from "react";
import { HeaderContext } from "../App";
function Addtocardmodule({}) {
  const {
    cartItems,
    hidden,
    totalPrice,
    empty,
    data
  } = useContext(HeaderContext);
  return (
    <div
      className={`fixed z-60 p-[20px] top-0 bg-white w-[400px] h-[100%] ${hidden}`}
      id="Card"
    >
      <p className="text-black font-bold text-[28px]">Quick Card</p>
      {cartItems.map((item) => (
        <QuickCard key={item.id} item={item} data={data } />
      ))}
      <p
        className={`text-[20px] font-bold ${totalPrice === 0 ? "hidden" : ""}`}
      >
        Total price :{" "}
        <span className="Total">{Math.abs(totalPrice.toFixed(2))}</span> AZN
      </p>
      <p className={`text-black font-bold text-[28px] ${empty}`}>
        Card is Empty
      </p>
      <button
        className="rounded-sm bg-purple-500 text-white p-[10px] hover:cursor-pointer hidden"
        id="BuyButton"
      >
        Buy
      </button>
    </div>
  );
}

export default Addtocardmodule;
