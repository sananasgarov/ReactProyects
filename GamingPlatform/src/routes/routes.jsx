import { createBrowserRouter } from "react-router";
import Layout from "../layout/main";
import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import Services from "../pages/services";
import News from "../pages/news";
import ContactUs from "../pages/contactus";
import NotFound from "../pages/notfound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);
