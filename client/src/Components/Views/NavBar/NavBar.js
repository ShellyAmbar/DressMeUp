import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const showSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSideBar} />
        </Link>
      </div>
      <SideBar isOpen={isOpen} showSideBar={showSideBar} />
    </>
  );
}

export default NavBar;
