import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
