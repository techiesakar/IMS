import Pagination from "components/Pagination";
// import inventoryItems from "data/inventory";
import DataLayout from "components/ui/DataLayout";
import React, { useState,useEffect } from "react";
// import { BiFilterAlt, BiPlus, BiPencil } from "react-icons/bi";
import staffs from "data/staffs.json";
// import Table from "components/ui/Table";
import axios from '../../hoc/axios'
const Inventory = () => {
  const staffsList = staffs.staffs;
  document.title = "SA - Inventory";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the index range for the current page
  const totalPages = Math.ceil(staffsList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // We need to perform loop on the products that is to be shown on the page
  const currentStaffs = staffsList.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentStaffs);
  // Change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const getData=()=>{
    try{
      axios.get('/staff').then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err)
      })
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
      getData()
  }, [])
  

  return (
    <DataLayout
      title="All Staffs"
      showFilter={false}
      showEdit={false}
      showAdd={false}
      showViewAll={true}
      addItemLink="/staff/add"
      viewAllLink="/staffs"
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
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Email
            </th>
            <th scope="col" className="px-6 py-4">
              Phone
            </th>
            <th scope="col" className="px-6 py-4">
              Address
            </th>
            <th scope="col" className="px-6 py-4">
              Role
            </th>
            <th scope="col" className="px-6 py-4">
              Position
            </th>
          </tr>
        </thead>
        <tbody>
          {currentStaffs.map((item, index) => {
            return (
              <tr key={index} className="border-b bg-white">
                <td className="px-6 py-4">
                  <input type="checkbox" name="inventoryItem" value={index} />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-8 w-8 rounded-lg"
                  />
                </td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">{item.role}</td>
                <td className="px-6 py-4">{item.position}</td>
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
