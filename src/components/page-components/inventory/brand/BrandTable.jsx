import React, { useState } from "react";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { ImSpinner8 } from "react-icons/im";
import { BiPencil } from "react-icons/bi";

import { BrandContext } from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";
import { useNavigate } from "react-router-dom";
import Loading from "components/Loading";
import BrandTableSkeleton from "./skeleton/BrandTableSkeleton";

const BrandTable = () => {
  const navigate = useNavigate();
  const [brandID, setBrandID] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <BrandContext.Consumer>
      {({ allBrands, deleteRequest, setCurrentBrand, tableLoading }) => {
        return (
          <>
            {tableLoading ? (
              <Loading />
            ) : (
              <table className="w-full table-full  text-left text-gray-800 bg-white overfow-hidden	">
                <thead className="text-gray-700">
                  <tr className="border-gray-200 border-b">
                    <th className="px-6 py-4 w-12">
                      <input type="checkbox" name="brandItem" />
                    </th>
                    <th scope="col" className="px-6 w-12 py-3">
                      SN
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Image
                    </th>
                    <th className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 w-40 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allBrands.length > 0 ? (
                    <>
                      {allBrands.map((brand, index) => {
                        return (
                          <tr key={index} className=" border-b">
                            <td className="px-6 py-4">
                              <input type="checkbox" name="brand" />
                            </td>

                            <td className="px-6 py-4 ">{index + 1}</td>
                            <td className="px-6 py-4">
                              <img
                                // src={brand.image}
                                src={`http://localhost:4002/public/${brand.image}`}
                                alt={brand.Brand_name}
                                className="h-8 w-8 rounded-lg"
                              />
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

                                {isDeleting && brandID === brand.id ? (
                                  <ImSpinner8 className="animate-spin" />
                                ) : (
                                  <button
                                    aria-label="Delete Supplier"
                                    onClick={() => {
                                      deleteRequest(brand.id, setIsDeleting);
                                      setBrandID(brand.id);
                                    }}
                                  >
                                    <AiFillDelete />
                                  </button>
                                )}

                                <button
                                  aria-label="View Supplier"
                                  onClick={() => {
                                    navigate(`/brand/${brand.id}`);
                                  }}
                                >
                                  <AiFillEye />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    <BrandTableSkeleton />
                  )}
                </tbody>
              </table>
            )}
          </>
        );
      }}
    </BrandContext.Consumer>
  );
};

export default BrandTable;
