import { HeaderContext } from "../App";
import { useContext } from "react";
function Overlay() {
  const { hidden, setHidden } = useContext(HeaderContext);
  return (
    <div
      className={`fixed inset-0 bg-black opacity-50 z-[50] ${hidden}`}
      onClick={() => {
        setHidden("hidden");
        const body = document.querySelector("body");
        body.style.overflow = "auto";
      }}
    ></div>
  );
}

export default Overlay;
