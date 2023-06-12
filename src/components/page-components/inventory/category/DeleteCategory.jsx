import React, { useState } from "react";
import { CategoryContext } from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import { ImSpinner8 } from "react-icons/im";

const DeleteCategory = ({ setOpenDelete, id }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  return (
    <CategoryContext.Consumer>
      {({ deleteRequest }) => {
        return (
          <div className="bg-gray-900/60 flex justify-center fixed items-center h-screen w-screen z-50 top-0 left-0 right-0 bottom-0">
            <div className=" bg-white rounded flex flex-col gap-6 py-12 px-8 relative">
              <div className="flex flex-col items-start gap-2 max-w-md">
                <span className="font-semibold text-gray-900 text-lg">
                  Are you absolutely sure?
                </span>
                <span className="font-light text-gray-600 text-sm">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </span>
              </div>
              <div className="flex gap-6">
                <button
                  onClick={() => {
                    setOpenDelete(false);
                  }}
                  type="button"
                  className="py-2  px-4 inline-block items-center justify-center rounded-md text-sm font-medium bg-transparent transition text-gray-900 border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    deleteRequest(id, setIsDeleting, setOpenDelete);
                  }}
                  type="button"
                  className="py-2  px-4 inline-block items-center justify-center rounded-md text-sm font-medium bg-gray-900 hover:bg-gray-800 transition text-white border"
                >
                  {isDeleting ? (
                    <span className="flex gap-2 items-center justify-center">
                      Deleting <ImSpinner8 className="animate-spin" />
                    </span>
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </CategoryContext.Consumer>
  );
};

export default DeleteCategory;
