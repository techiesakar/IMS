import React, { createContext, useState } from "react";

// Create the context
const MenuShrinkContext = createContext();
const MenuToggleContext = createContext();

// Create a provider component
export const MenuToggleProvider = ({ children }) => {
  const [toggleShrink, setToggleShrink] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <MenuShrinkContext.Provider value={{ toggleShrink, setToggleShrink }}>
      <MenuToggleContext.Provider value={{ toggleMenu, setToggleMenu }}>
        {children}
      </MenuToggleContext.Provider>
    </MenuShrinkContext.Provider>
  );
};

export { MenuShrinkContext, MenuToggleContext };
