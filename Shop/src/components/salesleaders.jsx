import { useEffect } from "react";
import { useState } from "react";
import Saleleaderproduct from "./saleleaderproduct";
function Salesleaders({ url, setUrl }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  return (
    <div className="p-[30px]">
      <div>
        <h2 className="text-black text-[24px] font-bold">Best Categories</h2>
      </div>
      <div className="flex flex-wrap gap-[10px] mt-[20px]">
        {categories.map((item, index) => {
          return (
            <Saleleaderproduct
              item={item}
              key={index}
              url={url}
              setUrl={setUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Salesleaders;
