import { useState } from "react";
import BasketBtn from "../components/BasketBtn";
import Basketmodule from "../components/basketmodule";
import Navbar from "../components/navbar";
import Overlay from "../components/overlay";
function Header({ setSearch, cartItems, totalPrice, setTotalPrice }) {
  const [hidden, setHidden] = useState("hidden");
  return (
    <div>
      <Navbar setSearch={setSearch} />
      <BasketBtn hidden={hidden} setHidden={setHidden} />
      <Basketmodule
        hidden={hidden}
        setHidden={setHidden}
        cartItems={cartItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <Overlay hidden={hidden} setHidden={setHidden} />
    </div>
  );
}

export default Header;
