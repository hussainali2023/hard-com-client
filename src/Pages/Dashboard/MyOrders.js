import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://hard-com-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);
  return (
    <div className=" mt-6 ml-2">
      <h3 className=" text-xl md:text-3xl mb-5">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking?._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      src={booking?.productPhoto}
                      className=" h-12 md:h-20"
                      alt=""
                    />
                  </td>
                  <td>{booking?.name}</td>
                  <td>{booking?.newPrice}</td>
                  <td>{booking?.bookingDate}</td>
                  <td>
                    {booking?.newPrice && !booking?.paid && (
                      <Link to={`/payment/${booking._id}`}>
                        <button className="btn bg-orange-400 px-3 py-2 text-white rounded-xl btn-primary btn-sm">
                          Pay
                        </button>
                      </Link>
                    )}
                    {booking?.newPrice && booking?.paid && (
                      <span className=" text-green-500">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
