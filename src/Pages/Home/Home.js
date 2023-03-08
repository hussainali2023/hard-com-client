import React from "react";
import About from "./About/About";
import Banner from "./Banner";
import Category from "./Category/Category";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import Cabinet from "./Products/Cabinet";
import Keyboard from "./Products/Keyboard";
import Monitor from "./Products/Monitor";
import Motherboard from "./Products/Motherboard";
import Popular from "./Products/Popular";
import Shipping from "./Shipping/Shipping";

const Home = () => {
  return (
    <div>
      <Banner />
      <Shipping />
      <Category />
      {/* <CategoryProduct /> */}
      <Popular />
      <Keyboard />
      <Monitor />
      <Motherboard />
      <Cabinet />
      <About />
    </div>
  );
};

export default Home;
