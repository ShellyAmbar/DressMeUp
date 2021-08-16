import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";

export const SideBarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Shirts",
    path: "/Shirts",
    icon: <FaIcons.FaTshirt />,
    cName: "nav-text",
  },
  {
    title: "Pants",
    path: "/Pants",
    icon: <GiIcons.GiArmoredPants />,
    cName: "nav-text",
  },
  {
    title: "Shoes",
    path: "/Shoes",
    icon: <GiIcons.GiSonicShoes />,
    cName: "nav-text",
  },
];
