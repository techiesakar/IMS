import React from "react";
import SuppliersList from "./data/SuppliersList";

const Suppliers = () => {
  document.title = "SA - Supppliers";
  return (
    <div className="w-full h-full flex items-center justify-center">
      <table>
        {SuppliersList.map((supplier, val) => {
          return (
            <tr key={val}>
              <span>Address</span>
              <span>{supplier.title}</span>
              <span>Phone</span>
              <span> {supplier.phone}</span>
              <span>Contact Person</span>
              <div>
                <span>{supplier.contactPerson}, </span>
                <span> {supplier.contactPersonPosition}</span>
              </div>
              <span>Partners Since</span>
              <span>{supplier.partnershipDate}</span>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Suppliers;
