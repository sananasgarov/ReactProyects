import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
function Product({
  img,
  name,
  price,
  id,
  cartItems,
  setCartItems,
  totalPrice,
  setTotalPrice,
}) {
  function AddToCard() {
    const subs = document.querySelector(".subs");
    const plus = document.querySelector(".plus");
    const totalPriceElement = document.querySelector("#TotalPrice");
    totalPriceElement.classList.remove("hidden");
    const Empty = document.querySelector("#Empty");
    Empty.classList.add("hidden");
    const item = {
      id: id,
      img: img,
      name: name,
      price: price,
      count: 1,
    };
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
    setTotalPrice(totalPrice + price);
  }
  const handleImageError = (e) => {
    e.target.src =
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
  };
  return (
    <div className="card shadow-sm p-[20px]" bis_skin_checked="1">
      <button className="w-[100%] mb-[20px] focus:cursor-pointer">
        <img
          src={img}
          alt=""
          className="object-cover w-[100%]"
          onError={handleImageError}
        />
      </button>
      <button
        className="hover:cursor-pointer AddToCard"
        data-id="2-lou-malnatis-deep-dish-pizzas"
        data-name="Lou Malnati's Pizza"
        data-price="67.99"
        data-img="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&amp;auto=format&amp;ar=1%3A1"
      >
        <FontAwesomeIcon
          icon={faBagShopping}
          className="text-[20px]"
          onClick={AddToCard}
        />
      </button>
      <p className="text-black font-bold text-[23px]">{name}</p>
      <p className="text-orange-500 text-[14px]">Price: {price} AZN</p>
    </div>
  );
}

export default Product;
