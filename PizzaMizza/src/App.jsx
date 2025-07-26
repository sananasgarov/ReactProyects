import Products from "./components/products";
import Footer from "./layout/footer";
import Header from "./layout/header";
import { useState } from "react";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;
function App() {
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="body">
      <Header
        className="max-w-[1320px] w-[80%] mx-auto"
        setSearch={setSearch}
        cartItems={cartItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <main className="max-w-[1320px] w-[80%] mx-auto">
        <Products
          search={search}
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      </main>
      <Footer className="max-w-[1320px] w-[80%] mx-auto" />
    </div>
  );
}

export default App;
