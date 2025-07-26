import QuickCard from "./quickcard";

function Basketmodule({ hidden, setHidden, cartItems, totalPrice }) {
  return (
    <div
      className={`fixed z-60 p-[20px] top-0 bg-white w-[400px] h-[100%] ${hidden}`}
      id="Card"
    >
      <p className="text-black font-bold text-[28px]">Quick Card</p>
      {cartItems.map((item) => (
        <QuickCard
          key={item.id}
          item={item}
          id={item.id}
          cartItems={cartItems}
        />
      ))}
      <p className="text-[20px] font-bold hidden" id="TotalPrice">
        Total price : <span className="Total">{totalPrice.toFixed(2)}</span> AZN
      </p>
      <p className="text-black font-bold text-[28px]" id="Empty">
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

export default Basketmodule;
