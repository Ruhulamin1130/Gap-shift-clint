import React, { use } from "react";
import "swiper/css";

import topimg from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Review = ({ reviewPromise }) => {
  const datas = use(reviewPromise);
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className=" text-center">
          <div className="w-full">
            <img className="w-40 mx-auto" src={topimg} alt="" />
          </div>
          <h2 className="font-bold text-3xl text-secondary my-4">
            What our customers are sayings
          </h2>
          <p className="text-gray-400 my-4">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce <br /> pain, and strengthen
            your body with ease!
          </p>
        </div>
      </div>

      <Swiper
        effect={"coverflow"}
        scale={1}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {datas.map((data) => (
          <SwiperSlide>
            <ReviewCard key={data.id} data={data}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
