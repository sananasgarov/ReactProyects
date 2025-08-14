import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../productcard";
function Products() {
  const products = useSelector((state) => state.products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
