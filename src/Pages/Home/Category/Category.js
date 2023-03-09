import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const {
    data: categories,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://hard-com-server.vercel.app/category");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading......</p>;
  }
  return (
    <div className="mx-2 md:mx-8 md:my-16 my-8">
      <h1 className=" text-xl md:text-3xl font-semibold">Trending Category</h1>

      <div className=" grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 mx-2 md:mx-20">
        {categories?.map((category) => (
          <Link to={`/category/${category.type}`}>
            <div key={category._id} className="zoom mb-6">
              <img src={category.logo} className=" h-40 w-40" alt="" />{" "}
              <p className=" ml-10 text-lg"> {category.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
