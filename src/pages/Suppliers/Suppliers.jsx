import React, { useState } from "react";
import Pagination from "components/Pagination";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import DataLayout from "components/ui/DataLayout";

import suppliers from "data/suppliers.json";

const Suppliers = () => {
  const supplierList = suppliers.suppliers;
  document.title = "SA - Suppliers";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the index range for the current page
  const totalPages = Math.ceil(supplierList.length / itemsPerPage);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // We need to perform loop on the products that is to be shown on the page
  const currentSuppliers = supplierList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DataLayout
      title="Suppliers"
      hideFilter={false}
      hideEdit={false}
      hideAdd={false}
      hideViewAll={true}
      addItemLink="/supplier/add"
      viewAllLink="/suppliers"
      openForm={null}
    >
      <table>
        <thead className="text-gray-900  ">
          <tr className="border-b">
            <th scope="col" className="px-6 py-4">
              <input type="checkbox" />
            </th>
            <th scope="col" className="px-6 py-4">
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
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentSuppliers.map((supplier, index) => (
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
