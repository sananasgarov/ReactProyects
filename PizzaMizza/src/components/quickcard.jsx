import React from "react";

function QuickCard({ item, id, cartItems }) {
  function Subs() {}
  function handleImageError(e) {
    e.target.src =
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
  }
  return (
    <div
      className="grid grid-cols-3 justify-between items-center gap-2 mb-4"
      data-id="${id}"
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
        <button className="bg-blue-600 text-white px-2 subs" onClick={Subs}>
          -
        </button>
        <span>{item.count}</span>
        <button className="bg-blue-600 text-white px-2 plus" onClick={() => {}}>
          +
        </button>
      </div>
    </div>
  );
}

export default QuickCard;
