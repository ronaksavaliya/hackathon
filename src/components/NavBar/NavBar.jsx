import React from "react";
import "./navBar.css";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navBar">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default NavBar;
