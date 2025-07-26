function Navbar({ setSearch }) {
  return (
    <nav className="shadow-md grid grid-cols-3 justify-around px-[7rem] py-[10px] items-center">
      <img
        src="https://doughmaster.netlify.app/static/media/logo.3f417c685919869e7ba2.png"
        alt=""
        className="w-[60px] object-cover"
      />
      <button className="hover:cursor-pointer w-[60px]">Card</button>
      <input
        type="text"
        id="search"
        placeholder="Search Pizza..."
        className="shadow-md !p-[7px] border-none focus:outline-none w-[300px]"
        onChange={(e) => setSearch(e.target.value)}
      />
    </nav>
  );
}

export default Navbar;
