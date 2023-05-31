import React, { useState } from "react";
import Pagination from "components/Pagination";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import DataLayout from "components/ui/DataLayout";

import SuppliersList from "data/SuppliersList";

const Suppliers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  document.title = "SA - Suppliers";

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = SuppliersList.slice(indexOfFirstItem, indexOfLastItem);

  // Change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(SuppliersList.length / itemsPerPage);

  return (
    <DataLayout
      title="Suppliers"
      hideFilter={false}
      hideEdit={false}
      hideAdd={false}
      hideViewAll={true}
      addItemLink="/supplier/add"
      viewAllLink="/suppliers"
    >
      <table className="w-full  text-left text-gray-800 bg-white">
        <thead className="text-gray-700">
          <tr className="border-gray-200 border-b">
            <th className="px-6 py-4">
              <input type="checkbox" name="inventoryItem" />
            </th>
            <th scope="col" className="px-6 py-4 rounded-l-md w-20">
              ID
            </th>
            <th scope="col" className="px-6 py-4">
              Supplier Name
            </th>
            <th scope="col" className="px-6 py-4">
              Contact
            </th>
            <th scope="col" className="px-6 py-4">
              Address
            </th>
            <th scope="col" className="px-6 py-4">
              Contact Person
            </th>
            <th scope="col" className="px-6 py-4">
              Since
            </th>
            <th scope="col" className="px-6 w-20 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((supplier) => (
            <tr key={supplier.id} className=" border-b">
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  name="inventoryItem"
                  value={supplier.id}
                />
              </td>
              <td className="px-6 py-4">{supplier.id}</td>
              <td className="px-6 py-4">{supplier.title}</td>
              <td className="px-6 py-4">{supplier.contact}</td>
              <td className="px-6 py-4">{supplier.address}</td>
              <td className="px-6 py-4">{supplier.contactPerson}</td>
              <td className="px-6 py-4">{supplier.partnershipDate}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center text-base">
                  <button aria-label="Edit Supplier">
                    <BiPencil />
                  </button>
                  <button aria-label="Delete Supplier">
                    <AiFillDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </DataLayout>
  );
};

export default Suppliers;
