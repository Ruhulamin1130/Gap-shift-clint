import React from "react";
import Logo from "../component/Logo/Logo";
import { Outlet } from "react-router";
import authimg from "../assets/authImage.png";

const Authlayout = () => {
  return (
    <div>
      <div className="mb-10">
        <Logo></Logo>
      </div>
      <div className="flex h-screen border">
        <div className="left flex-1">
          <Outlet></Outlet>
        </div>
        <div className="right flex-1">
          <img src={authimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
