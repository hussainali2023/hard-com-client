// import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Motherboard = () => {
  const [motherboards, setMotherboards] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/category/motherboard")
      .then((res) => res.json())
      .then((data) => setMotherboards(data));
  }, []);

  console.log(motherboards);

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
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className=" mt-10 mx-10">
      <h2 className=" text-3xl mb-6"> Motherboard </h2>
      <Slider {...card}>
        {motherboards?.map((motherboard) => (
          <div key={motherboard._id} className=" py-4 px-6 pb-10">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <div data-aos="zoom-in" data-aos-duration="1000">
                <img src={motherboard.photo} className=" w-72" />
              </div>
            </div>
            <div>
              <p className=" text-lg">{motherboard?.name}</p>
              <div className=" flex text-center">
                <p className="text-2xl text-center mr-6">
                  {motherboard?.newPrice}
                </p>
                <p className="text-xl text-center line-through">
                  {motherboard?.oldPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Motherboard;
