import React from "react";
import About from "./About/About";
import Banner from "./Banner";
import Category from "./Category/Category";
import Cabinet from "./Products/Cabinet";
import Keyboard from "./Products/Keyboard";
import Monitor from "./Products/Monitor";
import Motherboard from "./Products/Motherboard";
import Shipping from "./Shipping/Shipping";

const Home = () => {
  return (
    <div>
      <Banner />
      <Shipping />
      <Category />
      <Keyboard />
      <Monitor />
      <Motherboard />
      <Cabinet />
      <About />
    </div>
  );
};

export default Home;
