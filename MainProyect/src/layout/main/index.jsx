import React, { createContext, use, useEffect, useState } from "react";
import Header from "../header";
import { Outlet, useLocation } from "react-router";
import Footer from "../footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { getAllCars } from "../../services";
export const CarsContext = createContext();
function Layout() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [cars, setCars] = useState([]);
  const location = useLocation();
  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCars();
        setCars(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
  return (
    <CarsContext.Provider value={{ cars, setCars }}>
      <div className=" overflow-hidden">
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </CarsContext.Provider>
  );
}

export default Layout;
