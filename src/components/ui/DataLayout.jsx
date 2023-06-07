import { BrandContext } from "hoc/ContextApi/InventoryContext/InventoryCRUD";
import React, { useContext } from "react";
import { BiFilterAlt, BiPencil, BiPlus } from "react-icons/bi";
import { MdOutlineInventory2 } from "react-icons/md";
import { Link } from "react-router-dom";

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
  const data = useContext(BrandContext);
  console.log(data);
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
          // <Link to={addItemLink}>
          <button
            onClick={addItemLink}
            className="flex gap-2 items-center font-semibold hover:text-blue-800"
            aria-label="Add"
          >
            <BiPlus /> Add
          </button>
          // </Link>
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
            onClick={viewAllLink}
            className="flex gap-2 items-center font-semibold hover:text-blue-800"
            aria-label="Edit"
          >
            <MdOutlineInventory2 /> View All
          </button>
        )}
      </div>

      <div className="w-full h-full flex  flex-col overflow-scroll">
        {children}
      </div>
    </div>
  );
};

export default DataLayout;
