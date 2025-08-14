import { createBrowserRouter } from "react-router";
import Todolist from "../pages/todolist";



export const routes = createBrowserRouter(
  {
    path: "/",
    element: <Todolist />,
  },
);
