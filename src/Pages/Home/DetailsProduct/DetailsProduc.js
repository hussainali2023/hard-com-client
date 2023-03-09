import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
// import CategoryProduct from "../CategoryProduct/CategoryProduct";
// import Keyboard from "../Products/Keyboard";
import Popular from "../Products/Popular";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};
const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const DetailsProduc = () => {
  const { user } = useContext(AuthContext);

  const products = useLoaderData();
  const [open, setOpen] = useState(false);
  // const productObject = product[0];
  // const [CategoryProduct, setCategoryProdut] = useState("null");
  // const products = useLoaderData();
  console.log(products);

  return (
    <div
      style={BUTTON_WRAPPER_STYLES}
      className=" text-xs md:text-lg mx-10 md:mb-40"
    >
      {products.map((product) => (
        <div key={product._id} className=" my-10 grid grid-cols-2 gap-2">
          <div className=" ">
            <img src={product.photo} className=" h-5/6  md:h-[550px]" alt="" />
          </div>
          <div className=" md:mt-16">
            <div>
              <h1 className=" text-xl md:text-2xl font-bold">{product.name}</h1>
              <div className="flex mt-4">
                <p className=" mr-1">
                  Seller:{" "}
                  <span className=" font-bold">{product.sellerName}</span>
                </p>
                <p>{product.sellerVerify ? "Verified" : "not verified"}</p>
              </div>
            </div>
            <hr className=" w-2/3" />
            <p className=" text-xl md:text-2xl md:mt-6">${product.newPrice}</p>
            <p className=" text-sm line-through">
              Original Price: ${product.oldPrice}
            </p>
            <p>Condition Type: {product.condition}</p>
            <p>Years of Use: {product.usage}</p>
            <p>Post Date: {product.post_date}</p>
            <div className=" border-0 mt-2 md:mt-24 ">
              <label
                htmlFor="booking-modal"
                onClick={() => setOpen(true)}
                className=" px-5 py-3 hover:bg-orange-500 md:btn md:bg-orange-400 cursor-pointer  bg-orange-400 text-[10px] md:text-base p-2 md:text-white text-white md:mr-4 mr-2 rounded-2xl md:border-0"
              >
                Book Now
              </label>
              <Modal
                isOpen={open}
                product={product}
                onClose={() => setOpen(false)}
              ></Modal>
              <button className="md:btn md:bg-yellow-700 bg-yellow-700 text-[10px] md:text-base p-2 md:text-white text-white md:mr-4 rounded-2xl md:border-0">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* {categoryPhone && (
        <BookingModal categoryPhone={categoryPhone}></BookingModal>
      )} */}

      <Popular />
    </div>
  );
};

export default DetailsProduc;
