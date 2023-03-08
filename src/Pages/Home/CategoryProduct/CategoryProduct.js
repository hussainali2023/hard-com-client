import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CategoryProduct = () => {
  const products = useLoaderData();

  const singleProduct = products[0];
  console.log(singleProduct);
  console.log(products);

  return (
    <div>
      <h1 className=" uppercase mx-16 text-3xl font-semibold my-10">
        {singleProduct.type}
      </h1>

      <div className=" grid grid-cols-3 gap-4 mt-6 mx-20">
        {products?.map((product) => (
          <div>
            <Link to={`/category/${product.type}`}>
              <div key={product._id} className=" mb-6">
                <img src={product.photo} className=" zoom h-64 w-80" alt="" />{" "}
                <p className=" ml-10 text-lg"> {product.type}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
