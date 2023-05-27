// Layout.js
import React, { useContext } from "react";
import {
  MenuShrinkContext,
  MenuToggleProvider,
} from "contexts/SideMenuToggleContext";

import Sidebar from "navigation/Sidebar";
import Toolbar from "navigation/Toolbar";

const Layout = ({ children }) => {
  return (
    <MenuToggleProvider>
      <LayoutContent>{children}</LayoutContent>
    </MenuToggleProvider>
  );
};

const LayoutContent = ({ children }) => {
  const { toggleShrink } = useContext(MenuShrinkContext);
  return (
    <div>
      <Sidebar />
      <div
        className={`${
          toggleShrink ? "md:pl-16" : "md:pl-52"
        } min-h-screen  relative  ease-in duration-200`}
      >
        <Toolbar />
        <main className="bg-[#F8FBFD]  h-main-height">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
