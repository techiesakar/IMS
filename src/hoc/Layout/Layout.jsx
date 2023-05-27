import React, { useContext } from "react";
import ToggleContext, { ToggleProvider } from "contexts/ToggleContext";
import Sidebar from "navigation/Sidebar";
import Toolbar from "navigation/Toolbar";

const Layout = ({ children }) => {
  return (
    <ToggleProvider>
      <LayoutContent>{children}</LayoutContent>
    </ToggleProvider>
  );
};

const LayoutContent = ({ children }) => {
  const { toggle } = useContext(ToggleContext);
  return (
    <div>
      <Sidebar />
      <div
        className={`${
          toggle ? "md:pl-16" : "md:pl-52"
        } min-h-screen  relative  ease-in duration-200`}
      >
        <Toolbar />
        <main className="bg-[#F8FBFD]  h-main-height">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
