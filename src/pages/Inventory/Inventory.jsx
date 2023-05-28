import inventoryItems from "data/Inventory";
import React from "react";
import { BiFilterAlt, BiPlus, BiPencil } from "react-icons/bi";

const Inventory = () => {
  document.title = "SA - Inventory";
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <h1 className="text-left font-bold text-xl text-gray-800">Inventory</h1>
      <div className="flex gap-4">
        <button
          className="flex gap-2 items-center font-semibold hover:text-blue-800"
          aria-label="Filter"
        >
          <BiFilterAlt /> Filter
        </button>
        <button
          className="flex gap-2 items-center font-semibold hover:text-blue-800"
          aria-label="New Item"
        >
          <BiPlus /> New Item
        </button>
        <button
          className="flex gap-2 items-center font-semibold hover:text-blue-800"
          aria-label="Edit"
        >
          <BiPencil /> Edit
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <table className="w-full  text-left text-gray-800 bg-white">
          <thead className="text-gray-900  ">
            <tr>
              <th scope="col" className="p-5">
                <input type="checkbox" />
              </th>
              <th scope="col" className="p-5">
                Photo
              </th>
              <th scope="col" className="p-5">
                Name
              </th>
              <th scope="col" className="p-5">
                SKU
              </th>
              <th scope="col" className="p-5">
                Dimension
              </th>
              <th scope="col" className="p-5">
                Purchasing Price
              </th>
              <th scope="col" className="p-5">
                Selling Price
              </th>
              <th scope="col" className="p-5">
                On-Hand
              </th>
              <th scope="col" className="p-5">
                Units
              </th>
              <th scope="col" className="p-5">
                Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item, index) => {
              return (
                <tr key={index} className="border-b bg-white">
                  <td className="px-5 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-5 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-lg"
                    />
                  </td>
                  <td className="px-5 py-2">{item.name}</td>
                  <td className="px-5 py-2">{item.sku}</td>
                  <td className="px-5 py-2">{item.dimensions}</td>
                  <td className="px-5 py-2">{item.purchasePrice}</td>
                  <td className="px-5 py-2">{item.sellingPrice}</td>
                  <td className="px-5 py-2">{item.onHand}</td>{" "}
                  <td className="px-5 py-2">{item.units}</td>
                  <td className="px-5 py-2">{item.updated}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
