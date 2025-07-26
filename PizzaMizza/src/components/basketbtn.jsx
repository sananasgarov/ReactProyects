import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function BasketBtn({ hidden, setHidden }) {
  function handleBasketClick() {
    setHidden("");
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }
  return (
    <button
      className="hover:cursor-pointer "
      id="ShowCard"
      onClick={handleBasketClick}
    >
      <div className="shadow-md text-[24px] rounded-sm w-[60px] h-[60px] fixed z-50 right-10 top-[50%] flex justify-center items-center">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </button>
  );
}

export default BasketBtn;
