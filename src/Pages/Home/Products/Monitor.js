// import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Monitor = () => {
  const [monitors, setMonitors] = useState();
  useEffect(() => {
    fetch("https://hard-com-server-hussainali2023.vercel.app/category/monitor")
      .then((res) => res.json())
      .then((data) => setMonitors(data));
  }, []);

  console.log(monitors);

  const card = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" mt-10 mx-10">
      <h2 className=" text-3xl mb-6"> Monitors </h2>
      <Slider {...card}>
        {monitors?.map((monitor) => (
          <div key={monitor._id} className=" py-4 px-6 pb-10">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <img src={monitor.photo} className=" w-72" />
            </div>
            <div>
              <p className=" text-lg">{monitor?.name}</p>
              <div className=" flex text-center">
                <p className="text-2xl text-center mr-6">{monitor?.newPrice}</p>
                <p className="text-xl text-center line-through">
                  {monitor?.oldPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Monitor;
