import { useState } from "react";
import Products from "./components/products";
import Salesleaders from "./components/salesleaders";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Sort from "./components/sort";
import Addmodule from "./components/addmodule";

function App() {
  const [url, setUrl] = useState(
    `https://dummyjson.com/products?limit=194&skip=0&select=title,price,images,stock`
  );
  const [hidden, setHidden] = useState("hidden");
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [empty, setEmpty] = useState("");
  const [data, setData] = useState([]);
  const [addBtn, setAddBtn] = useState("hidden");
  return (
    <div className="max-w-[1920px] mx-auto" id="body">
      <Header
        setUrl={setUrl}
        hidden={hidden}
        setHidden={setHidden}
        cartItems={cartItems}
        setCartItems={setCartItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        empty={empty}
        setEmpty={setEmpty}
        url={url}
        data={data}
        setData={setData}
        addBtn={addBtn}
        setAddBtn={setAddBtn}

      />
      <main>
        <Addmodule addBtn={addBtn} setAddBtn={setAddBtn} url={url} setUrl={setUrl} data={data} setData={setData} />
        <Salesleaders url={url} setUrl={setUrl} />
        <Sort setUrl={setUrl} />
        <Products
          url={url}
          setUrl={setUrl}
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          empty={empty}
          setEmpty={setEmpty}
          data={data}
          setData={setData}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
