// import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./zoom.css";
import { Link } from "react-router-dom";

const Cabinet = () => {
  const [cabinets, setCabinets] = useState();
  useEffect(() => {
    fetch("https://hard-com-server.vercel.app/category/cabinet")
      .then((res) => res.json())
      .then((data) => setCabinets(data));
  }, []);

  console.log(cabinets);

  const card = {
    dots: false,
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
          dots: false,
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
    <div className=" mt-10 px-10">
      <h2 className=" text-3xl"> cabinets </h2>
      <Slider {...card}>
        {cabinets?.map((cabinet) => (
          <Link to={`/product/${cabinet._id}`}>
            <div key={cabinet._id} className="zoom  py-4 px-6">
              <div data-aos="zoom-in" data-aos-duration="1000">
                <img src={cabinet.photo} className=" w-72" />
              </div>
              <div>
                <p>{cabinet?.name}</p>
                <div className=" flex text-center">
                  <p className=" text-2xl mr-4">{cabinet?.newPrice}</p>
                  <p className=" text-xl line-through">{cabinet?.oldPrice}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
export default Cabinet;
