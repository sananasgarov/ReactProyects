import React, { useEffect } from "react";
import Header from "../header";
import { Outlet, useLocation } from "react-router";
import Footer from "../footer";
function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0,0)
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
