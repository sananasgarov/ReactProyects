import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/main";
import Home from "../pages/home";
import AllProducts from "../pages/allproducts";
import PayMentSec from "../pages/payment";
import PaymentFinal from "../pages/paymentfinal";
import SinglePage from "../pages/singlepage";
import About from "../pages/aboutus";
import Policy from "../pages/policy";
import Contact from "../pages/contact";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/notfound";

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
        path: "/payment",
        element: <PayMentSec />,
      },
      {
        path: "/paymentfinal",
        element: <PaymentFinal />,
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
