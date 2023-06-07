import Pagination from "components/Pagination";
// import inventoryItems from "data/inventory";
import DataLayout from "components/ui/DataLayout";
import React, { useState } from "react";
// import { BiFilterAlt, BiPlus, BiPencil } from "react-icons/bi";
import inventory from "data/inventory.json";
import { BiPencil } from "react-icons/bi";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Inventory = () => {
  const productsList = inventory.products;
  document.title = "SA - Inventory";

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the index range for the current page
  const totalPages = Math.ceil(productsList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // We need to perform loop on the products that is to be shown on the page
  const currentProducts = productsList.slice(indexOfFirstItem, indexOfLastItem);
  // Change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DataLayout
      title="All Products"
      showFilter={true}
      showEdit={false}
      showAdd={true}
      showViewAll={false}
      addItemLink={() => {
        navigate("/inventory/add");
      }}
      viewAllLink={() => {
        navigate("/inventory");
      }}
    >
      <table className="w-full  text-left text-gray-800 bg-white">
        <thead className="text-gray-900  ">
          <tr className="border-b">
            <th scope="col" className="px-6 py-4">
              <input type="checkbox" />
            </th>
            <th scope="col" className="px-6 py-4">
              Image
            </th>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Category
            </th>
            <th scope="col" className="px-6 py-4">
              Brand
            </th>
            <th scope="col" className="px-6 py-4">
              Price
            </th>
            <th scope="col" className="px-6 py-4">
              Discount %
            </th>
            <th scope="col" className="px-6 py-4">
              Stock
            </th>
            <th scope="col" className="px-6 py-4">
              Date Updated
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((item, index) => {
            return (
              <tr key={index} className="border-b bg-white">
                <td className="px-6 py-4">
                  <input type="checkbox" name="inventoryItem" value={index} />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-8 w-8 rounded-lg"
                  />
                </td>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.brand}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.discountPercentage}</td>
                <td className="px-6 py-4">{item.stock}</td>
                <td className="px-6 py-4">17-20-2023</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2 items-center text-base">
                    <button aria-label="Edit Supplier">
                      <BiPencil />
                    </button>
                    <button aria-label="Delete Supplier">
                      <AiFillDelete />
                    </button>

                    <button aria-label="View Item">
                      <AiFillEye />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
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

export default Inventory;
