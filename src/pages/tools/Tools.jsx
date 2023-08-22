import React, { useState, useEffect } from "react";
import Pagination from "components/Pagination";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import DataLayout from "components/ui/DataLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import suppliers from "data/suppliers.json";
import axios from "../../hoc/axios";

const Tools = () => {
  const supplierList = suppliers.suppliers;
  document.title = "SA - Suppliers";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the index range for the current page
  const totalPages = Math.ceil(supplierList.length / itemsPerPage);
  const [storeToolsData, setStoreToolsData] = useState([]);
  // Calculate the index range for the current page
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // We need to perform loop on the products that is to be shown on the page
  // const currentSuppliers = supplierList.slice(
  //   indexOfFirstItem,
  //   indexOfLastItem
  // );
  const getToolsData = () => {
    try {
      axios
        .get("/tools")
        .then((res) => {
          console.log(res);
          setStoreToolsData(res.data.result);
          // toast.success("Data has been submitted sucessfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToolsData();
  }, []);

  // Change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const deleteRequest = (id) => {
    try {
      axios
        .delete(`/tools/${id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            // setLoading(false);
            // setChange(!change);
            getToolsData();
            toast.error(`Item  has been deleted sucessfully`);
          }
        })
        .catch((err) => {
          console.log(err);
          //   setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DataLayout
      title=" Add Tools"
      showFilter={true}
      showEdit={false}
      showAdd={true}
      // showViewAll={true}
      addItemLink="/tools/add"
      viewAllLink="/tools"
      openForm={null}
    >
      <ToastContainer autoClose={1000} />
      <table className="w-full">
        <thead className="text-gray-900  ">
          <tr className="border-b">
            <th scope="col" className="px-6 py-4">
              {" "}
              <input type="checkbox" />
            </th>
            <th scope="col" className="px-6 py-4">
              s.No
            </th>
            <th scope="col" className="px-6 py-4">
              Title
            </th>
            <th scope="col" className="px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {storeToolsData.map((category, index) => (
            <tr key={category.id} className=" border-b">
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  name="inventoryItem"
                  value={category.id}
                />
              </td>
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{category.title}</td>

              <td className="px-6 py-4">
                <div className="flex gap-2 items-center justify-center text-base">
                  <button
                    className="border border-gray-700 rounded-[3px] hover:opacity-60 p-1"
                    aria-label="Edit Supplier"
                  >
                    <BiPencil className="text-blue-700 text-xl" />
                  </button>
                  <button
                    className="border border-gray-700 rounded-[3px] hover:opacity-60 p-1"
                    aria-label="Delete Supplier "
                    onClick={() => deleteRequest(category.id)}
                  >
                    <AiFillDelete className="text-red-500 text-xl " />
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

export default Tools;
