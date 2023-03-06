import React from "react";
import Banner from "./Banner";
import Cabinet from "./Products/Cabinet";
import Keyboard from "./Products/Keyboard";
import Monitor from "./Products/Monitor";
import Motherboard from "./Products/Motherboard";

const Home = () => {
  return (
    <div>
      <Banner />
      <Keyboard />
      <Monitor />
      <Motherboard />
      <Cabinet />
    </div>
  );
};

export default Home;
