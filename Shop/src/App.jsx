import { createContext, useState } from "react";
import Products from "./components/products";
import Salesleaders from "./components/salesleaders";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Sort from "./components/sort";
import Addmodule from "./components/addmodule";
import { useMemo } from "react";
export const HeaderContext = createContext();
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
  const contextValue = useMemo(
    () => ({
      hidden,
      setHidden,
      cartItems,
      setCartItems,
      totalPrice,
      setTotalPrice,
      empty,
      setEmpty,
      url,
      setUrl,
      data,
      setData,
      addBtn,
      setAddBtn,
    }),
    [hidden, cartItems, totalPrice, empty, url, data, addBtn]
  );
  return (
    <div className="max-w-[1920px] mx-auto" id="body">
      <HeaderContext.Provider value={contextValue}>
        <Header />
        <main>
          <Addmodule />
          <Salesleaders url={url} setUrl={setUrl} />
          <Sort setUrl={setUrl} />
          <Products />
        </main>
        <Footer />
      </HeaderContext.Provider>
    </div>
  );
}
export default App;
