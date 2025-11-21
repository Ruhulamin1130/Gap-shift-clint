import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
const works = [
  {
    title: "Booking Pick & Drop",
    discription:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash on delevary",
    discription:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Delebary hub",
    discription:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME and corporate",
    discription:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowitWork = () => {
  return (
    <div>
      <h2 className="text-3xl my-10 font-bold text-secondary">How it works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {works.map((work) => (
          <>
            <div className="bg-white hover:bg-primary p-8 rounded-4xl ">
              <span className="text-4xl flex items-center justify-center">
                <TbTruckDelivery></TbTruckDelivery>
              </span>
              <h2 className="font-bold text-xl text-secondary my-4">
                {work.title}
              </h2>
              <p>{work.discription}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default HowitWork;
