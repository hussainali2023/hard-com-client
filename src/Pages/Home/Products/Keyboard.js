// import { render } from "@testing-library/react";
import React from "react";
import Slider from "react-slick";
import image1 from "../../../assests/monitor.jpg";
import image2 from "../../../assests/monitor.jpg";
import image3 from "../../../assests/monitor.jpg";
import image4 from "../../../assests/monitor.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { image: image1, title: "This is First Image" },
  { image: image2, title: "This is Second Image" },
  { image: image3, title: "This is Third Image" },
  { image: image4, title: "This is Forth Image" },
  { image: image4, title: "This is Forth Image" },
  { image: image4, title: "This is Forth Image" },
  { image: image4, title: "This is Forth Image" },
];

const Keyboard = () => {
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
          slidesToScroll: 3,
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
    <div>
      <h2> Multiple items </h2>
      <Slider {...card}>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
      </Slider>
    </div>
  );
};
export default Keyboard;
