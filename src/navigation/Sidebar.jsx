import React, { useContext } from "react";

import Favicon from "assets/images/Favicon.png";
import HeaderLogo from "assets/images/Logo.png";

import { Link } from "react-router-dom";
import NavLinks from "./NavlLinks";

import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import ToggleContext from "contexts/ToggleContext";

const Sidebar = () => {
  // const [toggle, setToggle] = useState(false);
  const { toggle, setToggle } = useContext(ToggleContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <aside
      className={`sidebar fixed -left-56 z-50  md:left-0 top-0 transition-all duration-300  bg-cyan-950 h-screen whitespace-nowrap  md:flex flex-col gap-6 justify-between py-6 ${
        toggle ? "w-16" : "w-52"
      }`}
    >
      <div className="flex flex-col gap-6 px-4">
        <div className="site-branding h-8 flex items-center ">
          <Link to={"/"} className="flex gap-2 items-left h-full">
            {!toggle ? (
              <img
                src={HeaderLogo}
                alt="SR Inventory"
                className="site-logo  h-full w-auto object-contain"
              />
            ) : (
              <img
                src={Favicon}
                alt="SR Inventory"
                className="site-logo h-full w-8"
              />
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
                  <button type="button" className="text-2xl" title={item.title}>
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
          <button type="button">
            {toggle ? (
              <TbLayoutSidebarRightCollapse />
            ) : (
              <span className="flex items-center gap-3">
                <TbLayoutSidebarLeftCollapse />
                <span className="text-base">Collapse Menu</span>
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
