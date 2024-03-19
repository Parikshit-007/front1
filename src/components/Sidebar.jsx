import React, { useState } from "react";
import { FaHome, FaBars, FaAngleDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdDocument } from "react-icons/io";
import { BiSolidDetail } from "react-icons/bi";
import { BiSolidDockRight } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBookMedical } from "react-icons/fa6";
import { AiFillAppstore } from "react-icons/ai";
import { FaWindowRestore } from "react-icons/fa6";
import { FaCalendarPlus } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

const routes = [
  {
    path: "/",
    name: "Patient",
    icon: <BsFillPersonLinesFill />,
    subRoutes: [
      {
        path: "/Patient/IPD",
        name: "IPD",
        icon: <IoMdDocument />,
      },
      {
        path: "/Patient/OPD",
        name: "OPD",
        icon: <BiSolidDockRight />,
      },
      {
        path: "/Patient/Patient_Details",
        name: "Details",
        icon: <BiSolidDetail />,
      },
    ],
  },
  {
    path: "/Doctor",
    name: "Doctor",
    icon: <FaUserDoctor />,
    subRoutes: [
      {
        path: "/Doctor/Details",
        name: "Details",
        icon: <BiSolidDetail />,
      },
    ],
  },
  {
    path: "/Appointment",
    name: "Appointment",
    icon: <FaBookMedical />,
  },
  {
    path: "/Records",
    name: "Records",
    icon: <AiFillAppstore />,
  },
  {
    path: "/Inventory",
    name: "Inventory",
    icon: <FaWindowRestore />,
  },
  {
    path: "/Pharmacy",
    name: "Pharmacy",
    icon: <FaCalendarPlus />,
  },
  {
    path: "/Accounts",
    name: "Accounts",
    icon: <VscAccount />,
  },
  {
    path: "/Logout", // Logout route
    name: "Logout",
    icon: <VscAccount />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem("token");

    // Redirect the user to the login page
    navigate("/Login");
  };

  return (
    <div className="main_container">
      <div
        style={{
          width: isOpen ? "210px" : "90px",
          transition: "width 0.5s ease-in-out",
        }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && <h1 className="logo">CareChainAI</h1>}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  key={index}
                  setIsOpen={setIsOpen}
                  route={route}
                  isOpen={isOpen}
                />
              );
            }
            return (
              <NavLink
                activeClassName="active"
                to={route.path}
                key={index}
                className="link"
                onClick={route.path === "/Logout" ? handleLogout : null} // Handle logout click
              >
                <div className="icons">{route.icon}</div>
                {isOpen && <div className="link_text">{route.name}</div>}
              </NavLink>
            );
          })}
        </section>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
