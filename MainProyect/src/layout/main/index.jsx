import React from "react";
import Header from "../header";
import { Outlet } from "react-router";
import Footer from "../footer";

function Layout() {
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
