import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  console.log(stripePromise);
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mx-20">
      <h3 className=" text-3xl">Payment For {data.productName}</h3>
      <p className=" text-xl">
        Please Pay <strong>{data.newPrice}</strong>{" "}
      </p>
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} />
      </Elements>
    </div>
  );
};

export default Payment;
