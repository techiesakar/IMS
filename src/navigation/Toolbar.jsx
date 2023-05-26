import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import profileImg from "assets/images/profileImg.jpg";

const Toolbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full xl:pl-60 bg-orange-400">
      <div className="flex gap-2">
        <AiOutlineMessage />
        <MdNotifications />
      </div>
      <div className="flex gap-3">
        <img
          src={profileImg}
          alt="Sakar Aryal"
          className="h-6 w-6 rounded-full"
        />
        <div>
          <span>Sakar Aryal</span>
          <span>CEO</span>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
