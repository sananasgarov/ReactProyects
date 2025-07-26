function Saleleaderproduct({ item, setUrl }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setUrl(
          `https://dummyjson.com/products/category/${e.target.innerText.toLowerCase()}?limit=194&skip=0&select=title,price,images,stock`
        );
      }}
      className=" bg-[#eaeaea] cursor-pointer rounded-[30px] text-sm px-4 py-2.5 hover:bg-black transition duration-300 hover:text-white"
    >
      {item}
    </button>
  );
}
export default Saleleaderproduct;
