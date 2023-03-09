import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const Modal = ({ isOpen, onClose, children, product }) => {
  // console.log(categoryPhone);
  const { user } = useContext(AuthContext);

  const date = new Date().toJSON().slice(0, 10);
  // console.log(date);
  const navigate = useNavigate();

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  const handleBooking = (data) => {
    if (!user?.uid) {
      alert("Please Login First to Confirm your booking");
      navigate("/login");
      return;
    }
    const booking = {
      bookingDate: date,
      productName: product.name,
      productPhoto: product.photo,
      name: data.name,
      email: data.email,
      product: data.product,
      phone: data.phone,
      meetingLocation: data.meetingLocation,
      newPrice: product.newPrice,
    };
    // console.log(booking);
    fetch("https://hard-com-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Booked");
          navigate("/my-orders");
        } else {
          toast.error(data.message);
        }
      });

    // console.log(booking);
  };
  if (!isOpen) return null;

  const handleVerify = () => {
    if (!user?.uid) {
      alert("Please Login First to Confirm your booking");
      return;
    }
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div style={OVERLAY_STYLES} className="modal text-black px-48">
        <div style={MODAL_STYLES} className="modal-box relative text-base ">
          <label
            onClick={onClose}
            htmlFor="booking-modal"
            className="btn pr-2 font-bold cursor-pointer text-2xl btn-sm btn-circle absolute right-2 top-2"
          >
            ✕{children}
          </label>
          <h3 className="text-lg font-bold">{product.name}</h3>
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="grid grid-cols-1 gap-1 mt-2"
          >
            <p className=" text-base ">Name:</p>
            <input
              type="text"
              {...register("name")}
              name="name"
              readOnly
              value={user?.displayName}
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
            />
            <p className="text-base"> Email:</p>
            <input
              name="email"
              {...register("email")}
              type="text"
              readOnly
              value={user?.email}
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
            />
            Price:
            <input
              name="sellPrice"
              {...register("newPrice")}
              type="number"
              readOnly
              value={product?.newPrice}
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
            />
            Phone:
            <input
              name="phone"
              {...register("phone")}
              type="number"
              placeholder="Phone Number"
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
            />
            Meeting Location:
            <input
              name="metting_location"
              {...register("meetingLocation")}
              type="text"
              placeholder="Enter Location"
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
            />
            <input
              // onClick={handleVerify}
              className="btn bg-orange-400 py-2 rounded-xl cursor-pointer text-white border-0 mt-4"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
