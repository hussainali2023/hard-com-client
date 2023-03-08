import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryProduct = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
      <h1>This is from Category prouducts</h1>
    </div>
  );
};

export default CategoryProduct;
