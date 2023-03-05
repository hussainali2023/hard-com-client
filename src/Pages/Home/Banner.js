import React from "react";
import { SimpleCarouselSlider } from "react-simple-carousel-image-slider";
// import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../assests/cooler-master-hyper-series-banner-home.jpg";
import image2 from "../../assests/corsair-republic-day-offer-banner-home.jpg";
import image3 from "../../assests/jedi-survivor-amd-game-bundle-banner-home.jpg";
import "react-simple-carousel-image-slider/dist/index.css";
const Banner = () => {
  const images = [image1, image2, image3];
  return (
    <div>
      <SimpleCarouselSlider
        width="100%"
        height="70vh"
        images={images}
        // autoplay={true}
        responsive={[
          {
            breakPoint: 420,
            height: "100px",
            parallax: true,
          },
          {
            breakPoint: 600,
            height: "400px",
            parallax: true,
          },
          {
            breakPoint: 1000,
            height: "500px",
            parallax: true,
          },
        ]}
      />
    </div>
  );
};

export default Banner;
