import { useState } from "react";
import Basketmodule from "../components/basketmodule";
import Navbar from "../components/navbar";
import Overlay from "../components/overlay";
import BasketBtn from "../components/basketbtn";
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
