import Sidebar from "navigation/Sidebar";
import Toolbar from "navigation/Toolbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="xl:pl-60 pt-14 min-h-screen w-screen relative">
      <Toolbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
