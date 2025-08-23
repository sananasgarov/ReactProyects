import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
