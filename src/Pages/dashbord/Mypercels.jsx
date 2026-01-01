import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiousSequire from "../../hooks/useAxiousSequire";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Mypercels = () => {
  const { user } = useAuth();
  const axiousSequire = useAxiousSequire();
  const { data: mypercels = [], refetch } = useQuery({
    queryKey: ["mypercels", user?.email],
    queryFn: async () => {
      const res = await axiousSequire.get(`/percels?email=${user?.email}`);
      return res.data;
    },
  });
  const handlePercelDelete = (id) => {
    console.log("delete", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You delet your percel",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSequire.delete(`/percels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handlePayment = async (percel) => {
    const paymentInfo = {
      cost: percel.cost,
      percelId: percel._id,
      senderEmail: percel.senderEmail,
      percelName: percel.percelName,
    };
    const res = await axiousSequire.post(
      "/payment-checkout-session",
      paymentInfo
    );
    console.log(res.data.url);
    window.location.assign(res.data.url);
  };
  return (
    <div>
      <h2>My Percels Page{mypercels?.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>payment</th>
              <th>Delivery-Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {mypercels.map((percel, index) => (
              <tr key={percel._id}>
                <th>{index + 1}</th>
                <td>{percel.percelName}</td>
                <td>{percel.cost} BDT</td>
                <td>
                  {percel.paymentStatus === "paid" ? (
                    <span className="btn btn-square btn-sm bg-primary">
                      paid
                    </span>
                  ) : (
                    <span
                      onClick={() => handlePayment(percel)}
                      className="btn  bg-green-500 btn-sm"
                    >
                      paynow
                    </span>

                    // <Link to={`/dashboard/payment/${percel._id}`}>
                    //   <span className="btn  bg-green-500 btn-sm">paynow</span>
                    // </Link>
                  )}
                </td>
                <td>{percel.deliveryStatus}</td>
                <td>
                  <button className="btn btn-squire hover:bg-primary btn-sm">
                    <FaSearch></FaSearch>
                  </button>
                  <button className="btn btn-squire hover:bg-primary btn-sm mx-4 ">
                    <FaEdit></FaEdit>
                  </button>
                  <button
                    onClick={() => handlePercelDelete(percel._id)}
                    className="btn btn-squire hover:bg-primary btn-sm "
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mypercels;
