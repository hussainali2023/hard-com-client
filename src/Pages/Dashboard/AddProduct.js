import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";
import AddCategory from "./AddCategory";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const date = new Date().toJSON().slice(0, 10);
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

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  // const imgbbKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const handleAddPhone = (data) => {
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

          const phone = {
            sellerName: user.displayName,
            email: user.email,
            post_date: date,
            condition: data.condition,
            type: data.type,
            name: data.name,
            photo: imgData.data.url,
            oldPrice: data.oldPrice,
            newPrice: data.newPrice,
            location: data.location,
            usage: data.usage,
          };
          // console.log(phone);
          fetch("https://hard-com-server.vercel.app/all-products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(phone),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("New Product Added Successfully");
              refetch();
              navigate("/my-product");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-12  md:gap-10 my-10 mr-6">
      <AddCategory></AddCategory>

      <div className=" col-span-8 ml-2 md:ml-16  ">
        <h1 className=" text-2xl font-bold text-blue-600">Add A New Product</h1>
        <p className=" text-red-600">{error}</p>
        <form onSubmit={handleSubmit(handleAddPhone)} action="">
          <div className=" grid grid-cols-2 gap-4 md:gap-6 mt-6">
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Select Product Category
              </label>
              <br />
              <select {...register("type")} className="w-full py-2 border-2 ">
                {categories?.map((category, i) => (
                  <option value={category.type} key={i}>
                    {category.type}
                  </option>
                ))}
              </select>
            </div>{" "}
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Product Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="form-control
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
                placeholder="Enter Product Name"
              />
            </div>{" "}
          </div>
          <div className=" grid grid-cols-2  gap-6">
            <div>
              <p className="mb-2">Image of Product</p>
              <label className="block shadow ">
                <span className="sr-only cursor-pointer">Choose File</span>
                <input
                  {...register("image")}
                  type="file"
                  className="block cursor-pointer text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400"
                />
              </label>
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Sale Price
              </label>
              <input
                {...register("newPrice")}
                type="text"
                className="form-control
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
                placeholder="Enter Sale Price"
              />
            </div>{" "}
          </div>
          <div className=" grid grid-cols-2 gap-6">
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Usage Years
              </label>
              <input
                {...register("usage")}
                type="text"
                className="form-control
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
                placeholder="Usage Years"
              />
            </div>{" "}
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Original Price
              </label>
              <input
                {...register("oldPrice")}
                type="text"
                className="form-control
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
                placeholder="Enter Original Price"
              />
            </div>{" "}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Location
              </label>
              <input
                {...register("location")}
                type="text"
                className="form-control
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
                placeholder="Enter Location"
              />
            </div>{" "}
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Condition Type
              </label>
              <br />
              <select
                {...register("condition")}
                className="w-full py-2 border-2 "
              >
                <option value="excellent">excellent</option>
                <option value="good">good</option>
                <option value="fair">fair</option>
              </select>
            </div>{" "}
          </div>
          <input
            className="btn px-4 py-2 cursor-pointer hover:bg-yellow-500 rounded-xl bg-yellow-400 text-white border-0 mt-4"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
