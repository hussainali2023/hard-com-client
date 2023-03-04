import React from "react";
import Logo from "../../../assests/Screenshot 2023-03-04 114954.jpg";
import GoogleMapReact from "google-map-react";

const LogoAndMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div>
      <div className=" flex justify-center mb-4">
        <img src={Logo} alt="" className=" h-16" />
      </div>
      <div>
        <iframe
          width="90%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Kolkata&t=&z=10&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default LogoAndMap;
