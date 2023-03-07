import React from "react";
import Countdown from "react-countdown";

const About = () => {
  return (
    <div className=" mx-16 my-10">
      <h1 className=" text-3xl font-semibold">
        {" "}
        <span className=" text-orange-400">About</span> Us
      </h1>
      <p>
        We at HARD-COM (www.hard-com.web.app) pride in completing 5 years of our
        existence. Known in the IT market as a innovator of technology, Our
        Journey has truly been justified to our name. HARD-COM is dedicated to
        100% customer delight ensuring that everything from placing your order
        to delivering it right to your doorstep is smooth and hassle-free. When
        it comes to online transactions, HARD-COM ensures that all credit/debit
        card and net banking transactions are done through secure and trusted
        gateways. All your bank details are safe and secure, and will not be
        shared with any third-party. HARD-COM is one of the leading IT
        distribution companies in WESTBENGAL operating since its inception in
        2018. The company is heading to provide full range of PC components to
        all customers through its wide sales channels.
        <Countdown
          className=" text-2xl p-3 bg-slate-300"
          date={Date.now() + 100000}
        />
      </p>
    </div>
  );
};

export default About;
