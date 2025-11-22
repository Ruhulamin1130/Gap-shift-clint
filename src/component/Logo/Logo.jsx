import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <div className="flex items-end">
        <img src={logo} alt="" />
        <h2 className="text-3xl font-bold -ms-2">Zap-Shift</h2>
      </div>
    </NavLink>
  );
};

export default Logo;
