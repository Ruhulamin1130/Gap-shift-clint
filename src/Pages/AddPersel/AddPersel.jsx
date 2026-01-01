import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Container from "../../component/shared/Container";
import Swal from "sweetalert2";
import useAxiousSequire from "../../hooks/useAxiousSequire";
import useAuth from "../../hooks/useAuth";

const AddPersel = () => {
  const serviceCenters = useLoaderData();
  const duplicateRegions = serviceCenters.map((r) => r.region);
  const regions = [...new Set(duplicateRegions)];

  const axiousSequire = useAxiousSequire();
  const { user } = useAuth();
  // console.log(regions);
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const handleSendPersel = (data) => {
    console.log(data);
    const isDocument = data.perceltipe === "document";
    const issameDistrict = data.senderDistrict === data.receiverDistrict;
    const percelWeight = parseFloat(data.percelWeight);
    let cost = 0;
    if (isDocument) {
      cost = issameDistrict ? 60 : 80;
    } else {
      if (percelWeight <= 3) {
        cost = issameDistrict ? 110 : 150;
      } else {
        const minCharge = issameDistrict ? 110 : 150;
        const extraWeight = percelWeight - 3;
        const extraCharge = issameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;
    Swal.fire({
      title: "Are you agree?",
      text: `You have to pay ${cost} BDT for this percel`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, i agree!",
    }).then((result) => {
      // send persel data to server

      if (result.isConfirmed) {
        axiousSequire.post("/percels", data).then((res) => {
          console.log(res.data);
        });
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  const senderRegion = useWatch({ control, name: "senderRegions" });
  const receiverRegion = useWatch({ control, name: "receiverRegions" });
  const districtByRegion = (region) => {
    const regionDistict = serviceCenters.filter((c) => c.region === region);
    const district = regionDistict.map((d) => d.district);
    return district;
  };
  return (
    <Container>
      <div className="text-black">
        <h2 className="text-3xl font-bold my-4">Add Parcel</h2>

        <form onSubmit={handleSubmit(handleSendPersel)}>
          {/* persel tipe */}
          <div>
            <label className="label ml-4 p-4">
              <input
                type="radio"
                {...register("perceltipe")}
                className="radio"
                value={"document"}
                defaultChecked
              />
              Document
            </label>
            <label className="label ml-4 p-4">
              <input
                type="radio"
                {...register("perceltipe")}
                className="radio"
                value={"non-document"}
              />
              Non-Document
            </label>
          </div>
          {/* percel name weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* percelname */}
            <fieldset className="fieldset">
              <label className="label">Percel Name</label>
              <input
                type="text"
                className="input w-full"
                {...register("percelName")}
                placeholder="PercelName"
              />
            </fieldset>
            {/* percel wight */}
            <fieldset className="fieldset">
              <label className="label">Percel Weight (kg) </label>
              <input
                type="number"
                className="input w-full"
                {...register("percelWeight")}
                placeholder="PercelWight"
              />
            </fieldset>
          </div>
          {/* tow collan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* sender */}
            <div>
              <fieldset className="fieldset">
                <h2 className="text-2xl font-bold my-2 ">Sender Details</h2>
                {/* sender name */}
                <label className="label">Sender Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  className="input w-full"
                  {...register("senderName")}
                  placeholder="Sender-name"
                />
                {/* sender email */}
                <label className="label">Sender Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="input w-full"
                  {...register("senderEmail")}
                  placeholder="SenderEmail"
                />
                {/* sender address */}
                <label className="label">Sender Address</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register("senderAddress")}
                  placeholder="SenderAddress"
                />
                {/* sender Regions */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender Regions</legend>
                  <select
                    {...register("senderRegions")}
                    defaultValue="Pick a browser"
                    className="select"
                  >
                    <option disabled={true}>Pick a Region</option>
                    {regions.map((r, i) => (
                      <option key={i}>{r}</option>
                    ))}
                  </select>
                </fieldset>
                {/* sender district */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender District</legend>
                  <select
                    {...register("senderDistrict")}
                    defaultValue="Pick a district"
                    className="select"
                  >
                    <option disabled={true}>Pick a Distrct</option>
                    {districtByRegion(senderRegion).map((r, i) => (
                      <option key={i}>{r}</option>
                    ))}
                  </select>
                </fieldset>
              </fieldset>
            </div>
            {/* recever */}
            <div>
              <fieldset className="fieldset">
                <h2 className="text-2xl font-bold my-2 ">Recever Details</h2>
                {/* Recever name */}
                <label className="label">Recever Name</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register("receverName")}
                  placeholder="recever-name"
                />
                {/* Recever name */}
                <label className="label">Recever Email</label>
                <input
                  type="email"
                  className="input w-full"
                  {...register("receverEmail")}
                  placeholder="recever-Email"
                />
                {/* Recever address */}
                <label className="label">Recever Address</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register("receverAddress")}
                  placeholder="recever-address"
                />

                {/* receiver Regions */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Receiver Regions</legend>
                  <select
                    {...register("receiverRegions")}
                    defaultValue="Pick a browser"
                    className="select"
                  >
                    <option disabled={true}>Pick a Region</option>
                    {regions.map((r, i) => (
                      <option key={i}>{r}</option>
                    ))}
                  </select>
                </fieldset>
                {/* sender district */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">receiver District</legend>
                  <select
                    {...register("receiverDistrict")}
                    defaultValue="Pick a district"
                    className="select"
                  >
                    <option disabled={true}>Pick a Distrct</option>
                    {districtByRegion(receiverRegion).map((r, i) => (
                      <option key={i}>{r}</option>
                    ))}
                  </select>
                </fieldset>

                {/* Recever district */}
              </fieldset>
            </div>
          </div>
          <input
            type="submit"
            value="send-percel"
            className="btn btn-primary text-black my-2"
          />
        </form>
      </div>
    </Container>
  );
};

export default AddPersel;
