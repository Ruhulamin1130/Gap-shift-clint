import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { FaLocationArrow } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="">
          <img src={bannerImg1} />
          <div className="absolute bottom-20 left-20">
            <button className="btn rounded-4xl bg-red-500 ">
              Track yout Persel <FaLocationArrow></FaLocationArrow>
            </button>
            <button className="btn p-2 ml-2 ">Be a rider</button>
          </div>
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
