import axios from "hoc/axios";
import React, { createContext } from "react";

export const InventoryContext = createContext();

const postRequest = (tableData) => {
  console.log(tableData);
};

const InventoryContextAPI = ({ children }) => {
  return (
    <InventoryContext.Provider
      value={{
        postRequest: postRequest,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContextAPI;
