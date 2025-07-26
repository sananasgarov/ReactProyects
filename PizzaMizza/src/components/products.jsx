import Product from "./product";
import { data } from "../db/main";
function Products({
  search,
  cartItems,
  setCartItems,
  totalPrice,
  setTotalPrice,
}) {
  return (
    <div className="grid grid-cols-4 gap-[20px] p-[20px]">
      {data
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search);
        })
        .map((item) => {
          return (
            <Product
              img={item.img}
              name={item.name}
              price={item.price}
              key={item.id}
              id={item.id}
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          );
        })}
    </div>
  );
}

export default Products;
