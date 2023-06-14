import React from "react";
import { BiFilterAlt, BiPencil, BiPlus } from "react-icons/bi";
import { MdOutlineInventory2 } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DataLayout = ({
  children,
  title,
  addItemLink = null,
  viewAllLink = null,
  showFilter = false,
  showEdit = false,
  showAdd = false,
  showViewAll = false,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <h1 className="text-left font-bold text-xl text-gray-800">{title}</h1>
      <div className="flex gap-4">
        {showFilter && (
          <button
            className="flex gap-2 items-center font-semibold hover:text-blue-800"
            aria-label="Filter"
          >
            <BiFilterAlt /> Filter
          </button>
        )}

        {showAdd && (
          <button
            onClick={addItemLink}
            className="flex gap-2 items-center font-semibold hover:text-blue-800"
            aria-label="Add"
          >
            <BiPlus /> Add
          </button>
        )}

        {showEdit && (
          <button
            className="flex gap-2 items-center font-semibold hover:text-blue-800"
            aria-label="Edit"
          >
            <BiPencil /> Edit
          </button>
        )}

        {showViewAll && (
          <button
            onClick={() => navigate(`${viewAllLink}`)}
            className="flex gap-2 items-center font-semibold hover:text-blue-800"
            aria-label="Edit"
          >
            <MdOutlineInventory2 /> View All
          </button>
        )}
      </div>

      <div className="w-full h-full flex  flex-col">{children}</div>
    </div>
  );
};

export default DataLayout;
