import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazan from "../../../assets/brands/amazon.png";
import vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import people from "../../../assets/brands/start_people.png";
const brands = [amazan, vector, casio, moonstar, randstad, star, people];

const Brands = () => {
  return (
    <div className="my-16 border-b-2 border-dashed pb-10 border-gray-400">
      <h2 className="text-secondary font-bold text-center text-3xl my-10">
        We've helped thousands ofsales teams
      </h2>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        grabCursor={true}
      >
        {brands.map((brand) => (
          <SwiperSlide>
            <img src={brand} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
