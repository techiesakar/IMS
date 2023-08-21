import React, { useState, useEffect } from "react";
import Pagination from "components/Pagination";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import DataLayout from "components/ui/DataLayout";

import suppliers from "data/suppliers.json";
import axios from "../../hoc/axios";

const Gallerys = () => {
  const [storeGallery, setStoreGallery] = useState([]);

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
  const gallery = [];

  // Change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const getGalleryData = () => {
    try {
      axios
        .get("/gallery")
        .then((res) => {
          console.log(res);
          setStoreGallery(res.data.result);
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
    getGalleryData();
  }, []);

  return (
    <DataLayout
      title="Gallery"
      showFilter={true}
      showEdit={false}
      showAdd={true}
      // showViewAll={true}
      addItemLink="/gallery/add"
      viewAllLink="/gallery"
      openForm={null}
    >
      <table>
        <thead className="text-gray-900  ">
          <tr className="border-b">
            <th scope="col" className="px-6 py-4">
              <input type="checkbox" />
            </th>
            <th scope="col" className="px-6 py-4">
              S.No
            </th>
            <th scope="col" className="px-6 py-4">
              Title
            </th>
            <th scope="col" className="px-6 py-4">
              Date
            </th>
            <th scope="col" className="px-6 py-4">
              Category
            </th>
            <th scope="col" className="px-6 py-4">
              Description
            </th>
            <th scope="col" className="px-6 py-4">
              Cover/Thumbnail_Image
            </th>
            <th scope="col" className="px-6 py-4">
              Gallery Image
            </th>
            <th scope="col" className="px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          {storeGallery.map((gallery, index) => {
            // let image1 = `http://192.168.1.80:5004/public/${gallery?.coverImage}`;
            let image1 = `https://cmsback.e-aribt.com/public/${gallery?.coverImage}`;
            return (
              <tr key={gallery.id} className=" border-b">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    name="inventoryItem"
                    value={gallery.id}
                  />
                </td>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{gallery.title}</td>
                <td className="px-6 py-4">
                  {new Date(gallery.date).toDateString()}
                </td>
                <td className="px-6 py-4">{gallery?.category?.title}</td>
                <td className="px-6 py-4">{gallery.description}</td>
                <td className="px-6 py-4">
                  <img src={image1} alt="" className="w-32 h-32 object-cover" />
                </td>
                <td className="px-6 py-4 grid grid-cols-2 bg-gray-200  h-60 w-80 my-1 overflow-y-auto  gap-3">
                  {gallery?.image.map((images, index) => {
                    let image2 = `https://cmsback.e-aribt.com/public/${images}`;
                    // let image2 = `http://192.168.1.80:5004/public/${gallery?.image}`
                    return (
                      <div className="">
                        <img
                          src={image2}
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                    );
                  })}
                </td>
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
                    >
                      <AiFillDelete className="text-red-500 text-xl " />
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

export default Gallerys;
