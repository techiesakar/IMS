import Sidebar from "navigation/Sidebar";
import Toolbar from "navigation/Toolbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="md:pl-56 pt-14 min-h-screen w-screen relative">
      <Toolbar />
      <Sidebar />
      <main className="bg-[#F8FBFD] h-main-height">{children}</main>
    </div>
  );
};

export default Layout;
