import React, { useState, useEffect } from "react";
import Pagination from "components/Pagination";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import DataLayout from "components/ui/DataLayout";

import suppliers from "data/suppliers.json";
import axios from "../../hoc/axios";

const Course = () => {
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

  return (
    <DataLayout
      title="Course"
      showFilter={true}
      showEdit={true}
      showAdd={true}
      addItemLink="/course/add"
      viewAllLink="/course"
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
              Skill Level
            </th>
            <th scope="col" className="px-6 py-4">
              Instructor
            </th>
            <th scope="col" className="px-6 py-4">
              Duration
            </th>
            <th scope="col" className="px-6 py-4">
              Description
            </th>
            <th scope="col" className="px-6 py-4">
              Image
            </th>
            <th scope="col" className="px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {storeCourseData.map((course, index) => {
            let image1 = `https://cmsback.e-aribt.com/public/${course?.coverImage}`;
            // let image2 = `http://192.168.1.80:5004/public/${course.image}`;

            return (
              <tr key={index} className=" border-b">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    name="inventoryItem"
                    value={course.id}
                  />
                </td>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{course.title}</td>
                <td className="px-6 py-4 capitalize">{course.skillLevel}</td>
                <td className="px-6 py-4 w-full">
                  <div className="overflow-auto w-11/12">
                    <table className="w-">
                      <thead className="capitalize  bg-gray-800 text-white  ">
                        <tr>
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
                        </tr>
                      </thead>
                      {course?.instructor.map((instructorData, i) => {
                        let Images = `https://cmsback.e-aribt.com/public/${instructorData?.image}`;

                        return (
                          <tbody key={i} className="overflow-auto w-full">
                            <tr>
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
                                {instructorData.skills.map((skill, ind) => {
                                  return <div>{skill.title}</div>;
                                })}
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </td>
                <td className="px-6 py-4">{course.duration}</td>
                <td className="px-6 py-4">{course.description}</td>
                <td className="px-6 py-4">
                  <img
                    src={image1}
                    alt="loading"
                    className="w-32 h-32 ocover"
                  />
                </td>
                {/* <td className="px-6 py-4 grid grid-cols-2 bg-gray-200  h-60 w-80 my-1 overflow-y-auto  gap-3">
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
                </td> */}
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

export default Course;
