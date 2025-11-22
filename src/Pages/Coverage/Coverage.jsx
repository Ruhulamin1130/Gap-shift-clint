import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const position = [23.685, 90.3563];
const Coverage = () => {
  const mapRef = useRef(null);
  const datas = useLoaderData();
  // console.log(datas);
  const handleSerch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = datas.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const cord = [district.latitude, district.longitude];
      mapRef.current.flyTo(cord, 12);
      console.log(cord);
    }
  };
  return (
    <div className="w-11/12 mx-auto rounded-3xl bg-white my-10">
      <h2 className="text-3xl font-bold my-8 p-8">
        We are available in 64 districts
      </h2>
      <div className="m-8">
        {/* serch button  */}

        <form onSubmit={handleSerch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              name="location"
              type="search"
              className="grow"
              placeholder="Search"
            />
          </label>
          <button className="btn btn-primary text-black">Serch</button>
        </form>
      </div>
      <div className="w-11/12 mx-auto h-[600px]">
        <h2 className="font-bold text-3xl my-4">
          We deliver almost all over Bangladesh
        </h2>
        {/* map here */}
        <MapContainer
          className="h-[500px] my-8"
          center={position}
          zoom={8}
          ref={mapRef}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {datas.map((data, index) => (
            <Marker key={index} position={[data.latitude, data.longitude]}>
              <Popup>
                <strong>{data.district}</strong> <br /> oure covareagea area:{" "}
                {data.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
