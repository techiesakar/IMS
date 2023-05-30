import React from "react";
import { BiFilterAlt, BiPencil, BiPlus } from "react-icons/bi";
import { MdOutlineInventory2 } from "react-icons/md";
import { Link } from "react-router-dom";
const DataLayout = ({
  children,
  title,
  addItemLink,
  viewAllLink,
  hideFilter = false,
  hideEdit = false,
  hideAdd = false,
  hideViewAll = false,
}) => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <h1 className="text-left font-bold text-xl text-gray-800">{title}</h1>
      <div className="flex gap-4">
        {!hideFilter && (
          <button
            className="flex gap-2 items-center font-semibold hover:text-blue-800"
            aria-label="Filter"
          >
            <BiFilterAlt /> Filter
          </button>
        )}
        {console.log(viewAllLink)}
        {console.log(addItemLink)}

        {!hideAdd && (
          <Link to={addItemLink}>
            <button
              className="flex gap-2 items-center font-semibold hover:text-blue-800"
              aria-label="New Item"
            >
              <BiPlus /> New Item
            </button>
          </Link>
        )}

        {!hideEdit && (
          <button
            className="flex gap-2 items-center font-semibold hover:text-blue-800"
            aria-label="Edit"
          >
            <BiPencil /> Edit
          </button>
        )}

        {!hideViewAll && (
          <Link to={viewAllLink}>
            <button
              className="flex gap-2 items-center font-semibold hover:text-blue-800"
              aria-label="Edit"
            >
              <MdOutlineInventory2 /> View All
            </button>
          </Link>
        )}
      </div>
      <div className="w-full h-full flex  flex-col overflow-scroll">
        {children}{" "}
      </div>
    </div>
  );
};

export default DataLayout;
