import React from "react";
import { Link } from "react-router";

const PaymentCancled = () => {
  return (
    <div>
      <h2 className="text-2xl">payment cancled</h2>
      <Link to={"/dashbord/my-payment"}>try agin </Link>
    </div>
  );
};

export default PaymentCancled;
