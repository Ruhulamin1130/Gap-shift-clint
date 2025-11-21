import React from "react";
import topimg from "../../../assets/be-a-merchant-bg.png";
import rightimg from "../../../assets/location-merchant.png";
const BannerTwo = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 ">
        <img src={topimg} alt="" />
      </div>
      <div className="flex justify-between items-center p-10 rounded-3xl bg-[#03373D] my-10">
        <div className="left flex-1">
          <h2 className="font-bold text-3xl text-white my-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="text-gray-200 p-2">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex items-center gap-2">
            <button className="btn btn-primary">Become a Merchant</button>
            <button className="btn rounded-3xl">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div className="left flex-1">
          <img src={rightimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
