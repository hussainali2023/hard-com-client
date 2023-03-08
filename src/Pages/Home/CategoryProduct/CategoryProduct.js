import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Home from "../Home";

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

      <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 mt-6 mx-4 md:mx-20">
        {products?.map((product) => (
          <div className="zoom">
            <Link to={`/product/${product._id}`}>
              <div key={product._id} className=" mb-6">
                <img src={product.photo} className="h-64 w-80" alt="" />{" "}
                <p className=""> {product.name}</p>
                <div className=" flex text-center mt-4">
                  <p className="text-2xl text-center mr-6">
                    {product?.newPrice}
                  </p>
                  <p className="text-xl text-center line-through">
                    {product?.oldPrice}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* <Home products={products}></Home> */}
      </div>
    </div>
  );
};

export default CategoryProduct;
