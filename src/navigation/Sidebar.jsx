import React from "react";
import HeaderLogo from "assets/images/Logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0  bg-cyan-950 h-screen w-40 p-4">
      <div className="flex justify-center">
        <Link to={"/"}>
          <img src={HeaderLogo} alt="SR Inventory" className="w-24" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
