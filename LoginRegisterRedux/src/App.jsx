import { RouterProvider } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "./redux/actions/products.actions";
import { routes } from "./routers";
import { getAllProducts } from "./service/product";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDatas = async () => {
      try {
        const [products] = await Promise.all([getAllProducts()]);
        dispatch(getAllProductsAction(products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getDatas();
  }, []);

  return <RouterProvider router={routes} />;
}

export default App;
