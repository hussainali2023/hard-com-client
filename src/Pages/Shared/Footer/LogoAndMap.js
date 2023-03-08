import React from "react";
import Logo from "../../../assests/Screenshot 2023-03-04 114954.jpg";

const LogoAndMap = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <div className=" flex justify-center mb-4">
        <img src={Logo} alt="" className=" h-16" />
      </div>
      <div>
        <iframe
          style={{ width: "90%", height: "28vh" }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Kolkata&t=&z=10&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default LogoAndMap;
