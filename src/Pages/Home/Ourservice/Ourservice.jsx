import React from "react";
import imgs from "../../../assets/service.png";

const services = [
  {
    title: "Express  & Standard Delivery",
    discription:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.?Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    discription:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.?Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
  },
  {
    title: "Fulfillment Solution",
    discription:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.?Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
  },
  {
    title: "Cash on Home Delivery",
    discription:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.?Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    discription:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.?Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
  },
  {
    title: "Parcel Return",
    discription:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.?Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
  },
];

const Ourservice = () => {
  return (
    <div className="bg-secondary rounded-2xl my-10 p-10">
      <h2 className="text-center font-bold text-3xl text-white my-4">
        Oure Services
      </h2>
      <p className="text-white text-center my-4">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br /> business shipments — we deliver
        on time, every time.
      </p>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-3xl">
        {services.map((service) => (
          <>
            <div className="bg-white hover:bg-primary p-8 rounded-4xl ">
              <span className="text-4xl flex items-center justify-center">
                <div className="rounded-full p-4 bg-gray-100">
                  <img src={imgs} alt="" />
                </div>
              </span>
              <h2 className="font-bold text-xl text-secondary my-4 text-center">
                {service.title}
              </h2>
              <p className="text-center">{service.discription}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Ourservice;
