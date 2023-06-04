import React, { useState } from "react";

import DataLayout from "components/ui/DataLayout";

import salesData from "data/sales.json";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

const Sales = () => {
  const salesList = salesData.sales;

  document.title = "SA - Sales";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = salesList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(salesList.length / itemsPerPage);

  return (
    <DataLayout
      title="Sales"
      hideFilter={false}
      hideEdit={false}
      hideAdd={false}
      hideViewAll={true}
      addItemLink="/sales/add"
      viewAllLink="/sales"
      openForm={null}
    >
      <table className="w-full  text-left text-gray-800 bg-white">
        <thead className="text-gray-700">
          <tr className="border-gray-200 border-b">
            <th className="px-6 py-4">
              <input type="checkbox" name="inventoryItem" />
            </th>
            <th scope="col" className="px-6 py-4 rounded-l-md w-20">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-4">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-4">
              Total Item
            </th>
            <th scope="col" className="px-6 py-4">
              Total Price
            </th>
            <th scope="col" className="px-6 py-4">
              Payment Method
            </th>
            <th scope="col" className="px-6 py-4">
              Date
            </th>

            <th scope="col" className="px-6 w-20 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className=" border-b">
              <td className="px-6 py-4">
                <input type="checkbox" name="inventoryItem" value={item.id} />
              </td>
              <td className="px-6 py-4">{item.customer_id}</td>

              <td className="px-6 py-4">{item.customer_name}</td>
              <td className="px-6 py-4">{item.total_item}</td>
              <td className="px-6 py-4">{item.total_price}</td>
              <td className="px-6 py-4">
                {item.is_cash === "Pay Later" ? (
                  <span className="px-2 py-1 bg-red-500 text-white rounded-md text-xs">
                    Credit
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-green-600 text-white rounded-md text-xs">
                    Cash
                  </span>
                )}
              </td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center text-base">
                  <button aria-label="Edit Supplier">
                    <BiPencil />
                  </button>
                  <button aria-label="Delete Supplier">
                    <AiFillDelete />
                  </button>
                  <Link to={"/customer/view"}>
                    <button aria-label="View Supplier">
                      <AiFillEye />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataLayout>
  );
};

export default Sales;
