import React, { useState } from "react";
import { CategoryContext } from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import EditCategory from "./EditCategory";
import { ImSpinner8 } from "react-icons/im";

const CategoryTable = () => {
  const [categoryID, setCategoryID] = useState();
  return (
    <>
      <CategoryContext.Consumer>
        {({
          allCategory,
          setCurrentCategory,
          currentCategory,
          isDeleting,
          deleteRequest,
        }) => {
          return (
            <>
              <table className="w-full  text-left text-gray-800 bg-white overfow-hidden">
                <thead className="text-gray-700">
                  <tr className="border-gray-200 border-b">
                    <th className="px-6 py-4 ">
                      <input type="checkbox" name="brandItem" />
                    </th>
                    <th scope="col" className="px-6  py-3">
                      SN
                    </th>

                    <th className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 w-40 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allCategory.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-6 py-4">
                          <input type="checkbox" name="brand" />
                        </td>
                        <td className="px-6 py-4 ">{index + 1}</td>
                        <td className="px-6 py-4">{item.Category_name}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2 items-center text-base">
                            <button
                              aria-label="Edit Category"
                              onClick={() => {
                                setCurrentCategory([item]);
                              }}
                            >
                              <BiPencil />
                            </button>

                            {isDeleting && categoryID === item.id ? (
                              <ImSpinner8 className="animate-spin" />
                            ) : (
                              <button
                                aria-label="Delete Category"
                                onClick={() => {
                                  deleteRequest(item.id);
                                  setCategoryID(item.id);
                                }}
                              >
                                <AiFillDelete />
                              </button>
                            )}

                            <button aria-label="View Category">
                              <AiFillEye />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {currentCategory.length > 0 && <EditCategory />}
            </>
          );
        }}
      </CategoryContext.Consumer>
    </>
  );
};

export default CategoryTable;
