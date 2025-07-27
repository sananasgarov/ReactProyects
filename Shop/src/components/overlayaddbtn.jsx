import { HeaderContext } from "../App";
import { useContext } from "react";
function OverlayAddBtn() {
  const { addBtn, setAddBtn } = useContext(HeaderContext);
  return (
    <div
      className={`fixed inset-0 bg-black opacity-50 z-[50] ${addBtn}`}
      onClick={() => {
        setAddBtn("hidden");
        const body = document.querySelector("body");
        body.style.overflow = "auto";
      }}
    ></div>
  );
}

export default OverlayAddBtn;
