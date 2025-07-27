import { useEffect } from "react";
import Product from "./product";
import { useContext } from "react";
import { HeaderContext } from "../App";
function Products() {
  const { url, data, setData,} = useContext(HeaderContext);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, [url]);
  return (
    <div className="grid lg:grid-cols-4 gap-[20px] p-[30px] md:grid-cols-2 md:grid sm:grid-cols-1">
      {data.map((item) => {
        return (
          <Product
            key={item.id}
            name={item.title}
            price={item.price}
            stock={item.stock}
            img={item.images}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default Products;
