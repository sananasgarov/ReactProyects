import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="bg-[#1A0B2E] grid grid-cols-2 justify-center items-center text-white p-[20px]">
        <div></div>
        <div>
          <ul className="flex gap-[100px] justify-center items-center text-[20px]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/lab">Lab</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
