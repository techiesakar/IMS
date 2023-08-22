import React, { useState, useEffect } from "react";
import Pagination from "components/Pagination";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import DataLayout from "components/ui/DataLayout";

import suppliers from "data/suppliers.json";
import axios from "../../hoc/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Portfolio = () => {
  const [storePortfolioImage, setStorePortfolioImage] = useState([]);

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
  const getPortfolioData = () => {
    try {
      axios
        .get("/portfolio")
        .then((res) => {
          console.log(res);
          setStorePortfolioImage(res.data.result);
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
    getPortfolioData();
  }, []);
  const deleteRequest = (id) => {
    try {
      axios
        .delete(`/portfolio/${id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            // setLoading(false);
            // setChange(!change);
            getPortfolioData();
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
      title="Portfolio"
      showFilter={true}
      showEdit={true}
      showAdd={true}
      addItemLink="/portfolio/add"
      viewAllLink="/portfolio"
    >
      <ToastContainer autoClose={1000} />
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
              Challenge
            </th>
            <th scope="col" className="px-6 py-4">
              Solution
            </th>
            <th scope="col" className="px-6 py-4">
              Tools
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
        <tbody>
          {storePortfolioImage.map((portfolio, index) => {
            let image1 = `https://cmsback.e-aribt.com/public/${portfolio?.coverImage}`;
            // let image2 = `http://192.168.1.80:5004/public/${portfolio.image}`;

            return (
              <tr key={portfolio.index} className=" border-b">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    name="inventoryItem"
                    value={portfolio.id}
                  />
                </td>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{portfolio.title}</td>
                <td className="px-6 py-4">
                  {new Date(portfolio.date).toDateString()}
                </td>
                <td className="px-6 py-4">{portfolio?.category?.title}</td>
                <td className="px-6 py-4">{portfolio.challange}</td>
                <td className="px-6 py-4">{portfolio.solution}</td>
                <td className="px-6 py-4">
                  {portfolio.Tools.map((tool, ind) => {
                    return <div>{tool.title}</div>;
                  })}
                </td>
                <td className="px-6 py-4">
                  <img
                    src={image1}
                    alt="loading"
                    className="w-32 h-32 ocover"
                  />
                </td>
                <td className="px-6 py-4 grid grid-cols-2 bg-gray-200  h-60 w-80 my-1 overflow-y-auto  gap-3">
                  {portfolio?.image.map((images, index) => {
                    let image2 = `https://cmsback.e-aribt.com/public/${images}`;
                    // let image2 = `http://192.168.1.80:5004/public/${portfolio?.image}`
                    return (
                      <div className="">
                        <img
                          src={image2}
                          alt="loading"
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
                      onClick={() => deleteRequest(portfolio.id)}
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

export default Portfolio;
