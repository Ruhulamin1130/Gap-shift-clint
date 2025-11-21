import React from "react";
import imgs1 from "../../../assets/live-tracking.png";
import imgs2 from "../../../assets/safe-delivery.png";
import imgs3 from "../../../assets/safe-delivery.png";

const services = [
  {
    title: "Live Parcel Tracking",
    discription:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    img: imgs1,
  },
  {
    title: "100% Safe Delivery",
    discription:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: imgs2,
  },
  {
    title: "24/7 Call Center Support",
    discription:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: imgs3,
  },
];

const BestServices = () => {
  return (
    <div className="grid grid-cols-1 gap-4 border-b-2 border-dashed border-gray-400 pb-10">
      {services.map((service, idx) => (
        <div key={idx} className="flex bg-white rounded-2xl p-8 m-2">
          <div className="w-28 mr-10 ">
            <img src={service.img} alt={service.title} />
          </div>

          <div className="border-l-2 pl-4 ml-2 border-dashed">
            <h2 className="font-bold text-2xl text-secondary my-4">
              {service.title}
            </h2>
            <p className="text-gray-400">{service.discription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestServices;
