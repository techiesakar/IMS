import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import profileImg from "assets/images/profileImg.jpg";

const Toolbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full md:pl-56 bg-white">
      <div className="flex justify-between items-center px-8 h-14">
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
            <div className="flex flex-col items-start ">
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
