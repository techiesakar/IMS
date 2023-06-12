import React, { useState } from "react";
import { CategoryContext } from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import EditCategory from "./EditCategory";
import { useNavigate } from "react-router-dom";
import DeleteCategory from "./DeleteCategory";

const CategoryTable = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [catID, setCatID] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <CategoryContext.Consumer>
        {({ allCategory, setCurrentCategory, currentCategory }) => {
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

                            <button
                              aria-label="Delete Category"
                              onClick={() => {
                                setOpenDelete(true);
                                setCatID(item.id);
                              }}
                            >
                              <AiFillDelete />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                {openDelete && (
                  <DeleteCategory id={catID} setOpenDelete={setOpenDelete} />
                )}
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
