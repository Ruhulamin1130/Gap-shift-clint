import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiousSequire from "../../../hooks/useAxiousSequire";

const PaymentSuccess = () => {
  const [serchParams] = useSearchParams();
  const axiousSequire = useAxiousSequire();
  const sessionId = serchParams.get("session_id");
  console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
      axiousSequire
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [sessionId, axiousSequire]);

  return (
    <div>
      <h2 className="text-4xl">payment success</h2>
    </div>
  );
};

export default PaymentSuccess;
