import React, { useState, useEffect } from "react";
import Pagination from "components/Pagination";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import DataLayout from "components/ui/DataLayout";
import suppliers from "data/suppliers.json";
import axios from "../../hoc/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Instructor = () => {
  const [storeCourseData, setStoreCourseData] = useState([]);

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
  const getCourseData = () => {
    try {
      axios
        .get("/course")
        .then((res) => {
          console.log(res);
          setStoreCourseData(res.data.result);
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
    getCourseData();
  }, []);
  const Delete = (id) => {
    axios
      .delete(`/instructor/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast.error("Data has been deleted sucessfully");
          getCourseData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DataLayout
      title="Course"
      showFilter={true}
      showEdit={true}
      showAdd={true}
      showViewAll={false}
      addItemLink="/instructor/add"
      viewAllLink="/instructor"
    >
      <ToastContainer autoClose={1000} />
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="capitalize  font-bold text-gray-700  ">
            <tr className=" border-b">
              <td>
                <div className="p-2">
                  <input type="checkbox" />
                </div>
              </td>
              <td>
                <div className="p-2">s.n.</div>
              </td>
              <td>
                <div className="p-2">Instructor_Name</div>
              </td>
              <td>
                <div className="p-2">Instructor_email</div>
              </td>
              <td>
                <div className="p-2">experience</div>
              </td>
              <td>
                <div className="p-2"> about_instructor</div>
              </td>
              <td>
                <div className="p-2">image</div>
              </td>
              <td>
                <div className="p-2">position</div>
              </td>
              <td>
                <div className="p-2">skills</div>
              </td>
              <td>
                <div className="p-2">Actions</div>
              </td>
            </tr>
          </thead>
          {storeCourseData[0]?.instructor.map((instructorData, i) => {
            let Images = `https://cmsback.e-aribt.com/public/${instructorData?.image}`;

            return (
              <tbody key={i} className="overflow-auto w-full">
                <tr className="border-b">
                  <td>
                    <div className="p-2">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>{i + 1}</td>
                  <td>{instructorData.name}</td>
                  <td>{instructorData.email}</td>
                  <td>{instructorData.experience}</td>
                  <td>{instructorData.about}</td>
                  <td>
                    <img
                      src={Images}
                      alt="loading"
                      className="w-32 h-32 py-2"
                    />
                  </td>
                  <td className="">
                    <div className="overflow-hidden w-48 line-clamp-1 px-2">
                      {instructorData.position}
                    </div>
                  </td>
                  <td>
                    {instructorData?.skills.map((skill, ind) => {
                      return <div>{skill.title}</div>;
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
              </tbody>
            );
          })}
        </table>
      </div>

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

export default Instructor;
