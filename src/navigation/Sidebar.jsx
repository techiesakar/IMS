import { useState, createContext, useContext } from "react";

import Favicon from "assets/images/Favicon.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavlLinks";

import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <aside
      className={`sidebar fixed -left-56 md:left-0 top-0 transition-all duration-300  bg-cyan-950 h-screen whitespace-nowrap  md:flex flex-col gap-6 justify-between py-6 ${
        toggle ? "w-16" : "w-52"
      }`}
    >
      <div className="flex flex-col gap-6 px-4">
        <div className="h-14 site-branding">
          <Link to={"/"} className="flex gap-2 items-center">
            <img
              src={Favicon}
              alt="SR Inventory"
              className="w-8 h-8 site-logo"
            />

            {!toggle && (
              <span className="flex flex-col items-start text-white leading-4">
                <span className="font-bold ">SR</span>
                <span>Inventory</span>
              </span>
            )}
          </Link>
        </div>
        <ul className="flex flex-col gap-6 primary-menu">
          {NavLinks.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center text-white menu-item"
              >
                <Link
                  to={item.link}
                  className="flex items-center gap-3 menu-link"
                >
                  <button className="text-2xl" title={item.title}>
                    {item.icon}
                  </button>
                  {!toggle && item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="text-white flex gap-3 items-center px-4 toggle-wrapper">
        <div className="text-2xl" onClick={handleToggle}>
          <button>
            {toggle ? (
              <TbLayoutSidebarRightCollapse />
            ) : (
              <span className="flex items-center gap-3">
                <TbLayoutSidebarLeftCollapse />
                <span className="text-sm">Collapse</span>
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
