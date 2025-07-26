import Addtocardmodule from "../components/addtocardmodule";
import Navbar from "../components/navbar";
import Overlay from "../components/overlay";
import OverlayAddBtn from "../components/overlayaddbtn";
function Header({ setUrl, hidden, setHidden , cartItems, setCartItems, totalPrice, setTotalPrice , empty, setEmpty, url, data, setData , addBtn, setAddBtn }) {
  return (
    <>
      <Addtocardmodule cartItems={cartItems} hidden={hidden} setHidden={setHidden} setCartItems={setCartItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} empty={empty} setEmpty={setEmpty} url={url} data={data} setData={setData} />
      <Navbar setUrl={setUrl} hidden={hidden} setHidden={setHidden} addBtn={addBtn} setAddBtn={setAddBtn} />
      <Overlay hidden={hidden} setHidden={setHidden} />
      <OverlayAddBtn addBtn={addBtn} setAddBtn={setAddBtn} />
    </>
  );
}

export default Header;
