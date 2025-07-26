import { useEffect } from "react";
import Product from "./product";

function Products({ url, cartItems, setCartItems, totalPrice, setTotalPrice, empty, setEmpty , data, setData }) {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, [url]);
  return (
    <div className="grid grid-cols-4 gap-[20px] p-[30px]">
      {data.map((item) => {
        return (
          <Product
            key={item.id}
            name={item.title}
            price={item.price}
            stock={item.stock}
            img={item.images}
            cartItems={cartItems}
            setCartItems={setCartItems}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            id={item.id}
            empty={empty}
            setEmpty={setEmpty}
          />
        );
      })}
    </div>
  );
}

export default Products;
