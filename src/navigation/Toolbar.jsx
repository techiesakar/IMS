import React, { useState, useContext, useRef, useEffect } from "react";
import { MenuToggleContext } from "contexts/SideMenuToggleContext";
import { AiFillMessage, AiOutlineClose } from "react-icons/ai";
import { MdNotifications, MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";
import profileImg from "assets/brandings/profileImg.jpg";
import Overlay from "components/Overlay";
import { Link } from "react-router-dom";

const Toolbar = () => {
  const { toggleMenu, setToggleMenu } = useContext(MenuToggleContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current?.contains(e.target) ||
        dropdownButtonRef.current?.contains(e.target)
      ) {
        return;
      } else {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      window.addEventListener("click", pageClickEvent);
      console.log(isProfileOpen);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isProfileOpen]);

  return (
    <header className="w-full bg-white font-mulish">
      {toggleMenu && <Overlay />}
      <div className="flex justify-between items-center px-6 h-14">
        <button
          type="button"
          aria-label="Menu Toggle"
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`md:hidden text-2xl  ${
            toggleMenu ? "fixed top-6 right-6 z-50 text-white text-3xl" : ""
          }`}
        >
          {toggleMenu ? <AiOutlineClose /> : <BiMenuAltLeft />}
        </button>

        <div className="border border-gray-200 rounded-2xl bg-white flex items-center px-4 gap-2 h-9">
          <FiSearch className="text-green-500" />
          <input
            className="border-0 outline-none bg-transparent text-sm text-gray-600"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-6 h-full">
          <div className="flex gap-2 text-xl text-gray-700 border-r-2 border-gray-200 px-4">
            <AiFillMessage />
            <MdNotifications />
          </div>
          <div className="relative h-full flex items-center">
            <button
              ref={dropdownButtonRef}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              type="button"
              className="flex gap-2 items-center"
              aria-haspopup="true"
              aria-expanded={isProfileOpen ? "true" : "false"}
            >
              <img
                src={profileImg}
                alt="Sakar Aryal"
                className="h-6 w-6 rounded-full"
              />
              <div className="hidden md:flex items-center gap-1">
                <span className="text-gray-800 font-medium text-sm">
                  Sakar Aryal
                </span>
                <span className="mt-1 text-lg">
                  <MdKeyboardArrowDown />
                </span>
              </div>
            </button>

            <div
              ref={dropdownRef}
              className={`absolute top-full right-0 text-left bg-white shadow py-2 w-40 transition-all duration-800 ease-in border ${
                isProfileOpen ? "z-50 opacity-100" : "-z-10 opacity-0"
              }`}
            >
              <div className="px-4 border-b border-gray-200 pb-3">
                <div>Sakar Aryal</div>
                <div className="italic text-xs text-gray-600">
                  Administrator
                </div>
              </div>
              <ul className="flex flex-col px-4">
                <li>
                  <Link
                    to={"/settings"}
                    className="text-blue-600 leading-7 text-sm font-medium"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/login"}
                    className="text-blue-600 leading-7 text-sm font-medium"
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
