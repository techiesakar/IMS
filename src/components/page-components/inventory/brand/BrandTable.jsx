import React from "react";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

import { BrandContext } from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";

const BrandTable = ({ setCurrentBrand }) => {
  return (
    <BrandContext.Consumer>
      {({ brand, deleteRequest }) => {
        return (
          <table className="w-full table-fixed text-left text-gray-800 bg-white overfow-hidden	">
            <thead className="text-gray-700">
              <tr className="border-gray-200 border-b">
                <th className="px-6 py-4">
                  <input type="checkbox" name="brandItem" />
                </th>
                <th className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 w-40 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {brand.map((brand, index) => {
                return (
                  <tr key={index} className=" border-b">
                    <td className="px-6 py-4">
                      <input type="checkbox" name="brand" />
                    </td>
                    <td className="px-6 py-4">{brand.Brand_name}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2 items-center text-base">
                        <button
                          aria-label="Edit Supplier"
                          onClick={() => {
                            setCurrentBrand([brand]);
                          }}
                        >
                          <BiPencil />
                        </button>
                        <button
                          aria-label="Delete Supplier"
                          onClick={() => deleteRequest(brand.id)}
                        >
                          <AiFillDelete />
                        </button>
                        <button aria-label="View Supplier">
                          <AiFillEye />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      }}
    </BrandContext.Consumer>
  );
};

export default BrandTable;
