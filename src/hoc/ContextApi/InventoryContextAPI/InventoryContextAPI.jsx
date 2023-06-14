import axios from "hoc/axios";
import React, { createContext } from "react";

export const InventoryContext = createContext();

const postRequest = (tableData) => {
  console.log(tableData);
  let data = {};
  data.name = tableData[0].product_name;
  data.brand = tableData[0].product_brand;
  data.category = tableData[0].product_category;
  data.price = 0;
  data.SQPC = [];
  tableData.map((val, index) => {
    let latestData = {
      size: val.size,
      color: val.color,
      qty: val.product_quantity,
      price: val.priceandunit,
      sizeType: val.sizeType,
      waist: val.waist,
      chest: val.chest,
    };
    data.SQPC.push(latestData);
  });
  console.log(data);
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
