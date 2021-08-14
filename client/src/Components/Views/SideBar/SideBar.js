import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import "./SideBar.css";

function SideBar(props) {
  return (
    <nav className={props.isOpen ? "nav-menu active" : "nav-menu"}>
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <AiOutlineClose onClick={props.showSideBar} />
          </Link>
        </li>
        {SideBarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon} <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;
