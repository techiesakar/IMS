import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "components/Pagination";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import customerData from "data/customerData.json";
import DataLayout from "components/ui/DataLayout";

const Customers = () => {
  const customersList = customerData.users;
  console.log(customersList);

  document.title = "SA - Customers";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customersList.slice(indexOfFirstItem, indexOfLastItem);

  // Change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(customersList.length / itemsPerPage);

  return (
    <DataLayout
      title="Customers"
      hideFilter={false}
      hideEdit={false}
      hideAdd={false}
      hideViewAll={true}
      addItemLink="/customer/add"
      viewAllLink="/customer"
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
              Full Name
            </th>
            <th scope="col" className="px-6 py-4">
              Phone
            </th>
            <th scope="col" className="px-6 py-4">
              Email
            </th>
            <th scope="col" className="px-6 py-4">
              Address
            </th>
            <th scope="col" className="px-6 py-4">
              Membership Since
            </th>

            <th scope="col" className="px-6 w-20 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((customer) => (
            <tr key={customer.id} className=" border-b">
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  name="inventoryItem"
                  value={customer.id}
                />
              </td>
              <td className="px-6 py-4">{customer.id}</td>

              <td className="px-6 py-4">
                {customer.firstName} {customer.lastName}
              </td>
              <td className="px-6 py-4">{customer.phone}</td>
              <td className="px-6 py-4">{customer.email}</td>
              <td className="px-6 py-4">{customer.address.address}</td>
              <td className="px-6 py-4">{customer.dateCreated}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center text-base">
                  <button aria-label="Edit Supplier">
                    <BiPencil />
                  </button>
                  <button aria-label="Delete Supplier">
                    <AiFillDelete />
                  </button>
                  <Link to={"/customer/view"} state={customer}>
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

export default Customers;
