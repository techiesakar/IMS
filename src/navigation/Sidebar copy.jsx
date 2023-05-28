import React, { useContext } from "react";
import {
  MenuShrinkContext,
  MenuToggleContext,
} from "contexts/SideMenuToggleContext";

import { Link } from "react-router-dom";
import NavLinks from "./NavlLinks";

import Favicon from "assets/brandings/Favicon.png";
import HeaderLogo from "assets/brandings/Logo.png";

import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

const Sidebar = () => {
  const { toggleShrink, setToggleShrink } = useContext(MenuShrinkContext);
  const { toggleMenu } = useContext(MenuToggleContext);

  const handleToggle = () => {
    setToggleShrink(!toggleShrink);
  };
  return (
    <aside
      className={`sidebar fixed ${
        toggleMenu ? "left-0" : "-left-56"
      } z-50  md:left-0 top-0 transition-all duration-300  bg-cyan-950 h-screen whitespace-nowrap  flex flex-col gap-6 justify-between py-10 ${
        toggleShrink ? "w-16" : "w-52"
      }`}
    >
      <div className="flex flex-col gap-10 px-4">
        <div className="site-branding h-8 flex items-center ">
          <Link to={"/"} className="flex gap-2 items-left h-full">
            {!toggleShrink ? (
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
                  {!toggleShrink && item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="text-white flex gap-3 items-center px-4 toggle-wrapper">
        <div className="text-2xl">
          <button
            type="button"
            className="md:block hidden"
            onClick={handleToggle}
          >
            {toggleShrink ? (
              <FiArrowRightCircle />
            ) : (
              <span className="flex items-center gap-3">
                <FiArrowLeftCircle />
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
