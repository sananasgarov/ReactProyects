import Addtocardmodule from "../components/addtocardmodule";
import Navbar from "../components/navbar";
import Overlay from "../components/overlay";
import OverlayAddBtn from "../components/overlayaddbtn";
function Header() {
  return (
    <>
      <Addtocardmodule />
      <Navbar />
      <Overlay />
      <OverlayAddBtn />
    </>
  );
}

export default Header;
