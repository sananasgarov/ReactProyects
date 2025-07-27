import React, { useState, useEffect } from "react";
import { HeaderContext } from "../App";
import { useContext } from "react";
function Addmodule() {
  const { addBtn, setAddBtn, url, setUrl, data, setData } = useContext(HeaderContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  async function AddProduct() {
    setAddBtn("hidden");
  }
  return (
    <div className={`fixed inset-50 bg-text-gray-800 z-51 w-[600px] left-130  ${addBtn}`}>
      <div className="flex flex-col gap-[30px] justify-center bg-gray-100 w-[600px] h-[auto] mx-auto p-[30px] rounded-2xl">
        <input
          type="text"
          placeholder="Product Name"
          className="border-[1px] border-solid"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Price"
          className="border-[1px] border-solid"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Stock"
          className="border-[1px] border-solid"
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Image URL"
          className="border-[1px] border-solid"
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
          onClick={AddProduct}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Addmodule;
