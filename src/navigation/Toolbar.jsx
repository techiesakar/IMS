import React, { useContext } from "react";

import { MenuToggleContext } from "contexts/SideMenuToggleContext";

import { AiFillMessage, AiOutlineClose } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";
import profileImg from "assets/images/profileImg.jpg";
import Overlay from "components/Overlay";

const Toolbar = () => {
  const { toggleMenu, setToggleMenu } = useContext(MenuToggleContext);
  const handlClick = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };

  return (
    <header className="w-full  bg-white">
      {toggleMenu && <Overlay />}
      <div className="flex justify-between items-center px-6 h-14">
        <button
          onClick={handlClick}
          className={`md:hidden text-2xl  ${
            toggleMenu && "fixed top-6 right-6 z-50 text-white text-3xl"
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
        <div className="flex items-center gap-6">
          <div className="flex gap-2 text-xl text-gray-700 border-r-2 border-gray-200 px-4">
            <AiFillMessage />
            <MdNotifications />
          </div>
          <div className="flex gap-3 items-center ">
            <img
              src={profileImg}
              alt="Sakar Aryal"
              className="h-6 w-6 rounded-full"
            />
            <div className="hidden md:flex flex-col items-start ">
              <span className="font-bold text-gray-900 text-sm ">
                Sakar Aryal
              </span>
              <span className="text-gray-600 text-xs">Inventory Manager</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
