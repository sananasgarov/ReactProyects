import { createContext, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router";
function Layout() {
  const [hidden, setHidden] = useState(false);
  return (
    <div>
      <Header hidden={hidden} setHidden={setHidden} />
      <div className="bg-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
