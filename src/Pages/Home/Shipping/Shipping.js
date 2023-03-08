import {
  faCircleCheck,
  faLock,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Products/zoom.css";

const Shipping = () => {
  return (
    <div className=" mx-4 md:mx-32 mt-14 grid grid-cols-2 md:grid-cols-3">
      <div className=" flex zoom cursor-pointer">
        <FontAwesomeIcon icon={faTruck} className=" w-16 h-10" />
        <p className=" md:text-xl font-semibold ml-2">All India Shipping</p>
      </div>
      <div className=" flex zoom cursor-pointer mb-4">
        <FontAwesomeIcon icon={faLock} className=" w-16 h-10" />
        <p className=" md:text-xl font-semibold ml-2">Secure Checkout</p>
      </div>
      <div className=" flex zoom cursor-pointer ">
        <FontAwesomeIcon icon={faCircleCheck} className=" w-16 h-10" />
        <p className=" md:text-xl font-semibold ml-2">Original Products</p>
      </div>
    </div>
  );
};

export default Shipping;
