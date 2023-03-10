import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products", user.email],
    queryFn: async () => {
      const res = await fetch(
        `https://hard-com-server.vercel.app/all-products?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (product) => {
    const agree = window.confirm(
      `Are you want to sure to Delete ${product.name}`
    );
    if (agree) {
      fetch(`https://hard-com-server.vercel.app/all-products/${product._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          toast.success(" Product Deleted Successfully");
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-3xl mb-5">My Products</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Ads</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product, i) => (
                <tr className="" key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img src={product.photo} className="h-20" alt="" />
                  </td>

                  <td>{product.name.slice(0, 15) + "...."}</td>
                  <td>{product.newPrice}</td>
                  <td></td>
                  <td>
                    <button>Advertise</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(product)}
                      className=" btn border-0 bg-yellow-500 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
