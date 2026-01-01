import React from "react";
import { useParams } from "react-router";
import useAxiousSequire from "../../../hooks/useAxiousSequire";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { percelId } = useParams();
  const axiousSequire = useAxiousSequire();
  const { data: percels } = useQuery({
    queryKey: ["percels", percelId],
    queryFn: async () => {
      const res = await axiousSequire.get(`/percels/${percelId}`);
      return res.data;
    },
  });
  const handlePay = async () => {
    if (!percels) {
      return;
    }
    const paymentInfo = {
      cost: percels.cost,
      percelId: percels._id,
      senderEmail: percels.senderEmail,
      percelName: percels.percelName,
    };
    const res = await axiousSequire.post(
      "/create-checkout-session",
      paymentInfo
    );
    console.log(res.data);
    window.location.assign(res.data.url);
  };
  return (
    <div>
      <h2>
        Payment Page : {percels?.percelName} itsprice : {percels?.cost} taka!
      </h2>
      <button onClick={handlePay} className="btn btn-primary text-black">
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
