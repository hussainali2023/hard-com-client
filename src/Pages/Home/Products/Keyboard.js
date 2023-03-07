// import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Zoom from "react-img-hover-zoom";
import "./zoom.css";

const Keyboard = () => {
  const [keyboards, setKeyboards] = useState();
  useEffect(() => {
    fetch("https://hard-com-server.vercel.app/category/keyboard")
      .then((res) => res.json())
      .then((data) => setKeyboards(data));
  }, []);

  console.log(keyboards);

  const card = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    arrow: true,
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
    <div className=" mt-10 mx-10">
      <h2 className=" text-3xl"> Keyboards </h2>
      <Slider {...card}>
        {keyboards?.map((keyboard) => (
          <div key={keyboard._id} className="zoom  py-4 px-6">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <img src={keyboard.photo} className=" w-72" />
            </div>
            <div>
              <p>{keyboard?.name}</p>
              <div className=" flex text-center">
                <p className=" text-2xl mr-4">{keyboard?.newPrice}</p>
                <p className=" text-xl line-through">{keyboard?.oldPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Keyboard;
