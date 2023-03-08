import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const imgbbKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const {
    data: categories,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/category");
      const data = await res.json();
      return data;
    },
  });

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  const handleAddCategory = (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?key=17d74797a64a4ed97d0982c31d95c223`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(imgData);

          const category = {
            type: data.type,
            logo: imgData.data.url,
          };
          // console.log(category);
          fetch("http://localhost:5000/category", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(category),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("Category Added Successfully");
              refetch();
              navigate("/");
            });
        }
      });
  };

  return (
    <div className=" ml-4 col-span-4 mb-16 ">
      <h1 className=" mb-6 text-2xl font-bold text-blue-600">
        Add Product Category
      </h1>
      <div className="form-group mb-6">
        <label
          htmlFor="exampleInputEmail2"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Existing Category
        </label>
        <br />
        <select className="w-full py-2 ">
          {categories?.map((category, i) => (
            <option value={category.type} key={i}>
              {category.type}
            </option>
          ))}
        </select>
      </div>{" "}
      <form onSubmit={handleSubmit(handleAddCategory)} className=" " action="">
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Category Product (eg. Monitor, Cabinet)
          </label>
          <input
            {...register("type")}
            type="text"
            className="form-control lowercase
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail2"
            placeholder="Enter A New Category"
          />
        </div>
        <p className="mb-2">Category Logo</p>
        <label className="block shadow ">
          <span className="sr-only cursor-pointer">Choose File</span>
          <input
            type="file"
            {...register("image")}
            className="block cursor-pointer text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400"
          />
        </label>
        <input
          className="btn hover:bg-yellow-500 bg-yellow-400 px-4 py-2 rounded-xl text-white border-0 mt-6 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddCategory;
