import React from "react";
import Bottom from "./Bottom";
import Company from "./Company";
import LogoAndMap from "./LogoAndMap";
import MyAccount from "./MyAccount";
import UsefulLinks from "./UsefulLinks";

const Footer = () => {
  return (
    <div>
      <div className=" px-16 grid grid-cols-2 md:grid-cols-4">
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
