import React from "react";
import Bottom from "./Bottom";
import Company from "./Company";
import LogoAndMap from "./LogoAndMap";
import MyAccount from "./MyAccount";
import NewsLetter from "./NewsLetter";
import UsefulLinks from "./UsefulLinks";

const Footer = () => {
  return (
    <div>
      <NewsLetter />
      <div className=" px-2 md:px-16 grid grid-cols-2 md:grid-cols-4">
        <LogoAndMap />
        <UsefulLinks />
        <MyAccount />
        <Company />
      </div>
      <Bottom />
    </div>
  );
};

export default Footer;
