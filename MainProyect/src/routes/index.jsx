import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SinglePage from "../pages/SinglePage";
import About from "../pages/AboutUs";
import Policy from "../pages/Policy";
import Contact from "../pages/Contact";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/notfound";
import Layout from "../layout/main";
import AllProducts from "../pages/allproducts";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        element: <SinglePage />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/policy",
        element: <Policy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
