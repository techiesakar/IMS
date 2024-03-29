// Layout.js
import React, { useContext } from "react";
import {
  MenuShrinkContext,
  MenuToggleProvider,
} from "hoc/ContextApi/SideMenuContextAPI/SideMenuToggleContext";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const { toggleShrink } = useContext(MenuShrinkContext);
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/404" && (
        <Sidebar />
      )}

      <div
        className={`${
          location.pathname !== "/login" && location.pathname !== "/404"
            ? toggleShrink
              ? "md:ml-16"
              : "md:ml-52"
            : ""
        } min-h-screen  relative  ease-in duration-200`}
      >
        <main className="h-screen w-full bg-gray-50 flex flex-col font-mulish relative ">
          {location.pathname !== "/login" && location.pathname !== "/404" && (
            <Toolbar />
          )}
          <div className="px-6 py-6 flex-1 ">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
