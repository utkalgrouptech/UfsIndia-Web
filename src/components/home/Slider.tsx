import { Slider1, Slider2 } from "@/src/assets/home";
import React from "react";
import Slider from "react-slick";


function Fade() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
  };
  return (
    <div className="w-full lg:h-[60vh]  h-[30vh]  overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-40 bg-opacity-50">
  
      </div>
      <Slider {...settings}>
        <div className="w-full h-full">
          <img src={Slider1.src} alt="" className="w-full h-[60vh] object-cover " />
        </div>
        <div className="w-full h-full ">
          <img src={Slider2.src} alt="" className="w-full h-[60vh] object-cover" />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
