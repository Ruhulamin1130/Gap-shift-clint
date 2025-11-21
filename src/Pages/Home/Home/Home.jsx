import React from "react";
import Banner from "../Banner/Banner";
import HowitWork from "../HowitWork/HowitWork";
import Ourservice from "../Ourservice/Ourservice";
import Brands from "../Brands/Brands";
import BestServices from "../BestServices/BestServices";
import BannerTwo from "../BannerTwo/BannerTwo";
import Review from "../Review/Review";
const reviewPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <HowitWork></HowitWork>
      <Ourservice></Ourservice>
      <Brands></Brands>
      <BestServices></BestServices>
      <BannerTwo></BannerTwo>
      <Review reviewPromise={reviewPromise}></Review>
    </div>
  );
};

export default Home;
