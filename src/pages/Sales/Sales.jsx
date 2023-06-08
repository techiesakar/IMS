import React, { useState,useEffect } from "react";

import DataLayout from "components/ui/DataLayout";

// import salesData from "data/sales.json";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import axios from 'hoc/axios'
const Sales = () => {
  // const salesList = salesData.sales;

  document.title = "SA - Sales";

  // const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setcurrentItems] = useState([]);

  // const itemsPerPage = 8;
  // Calculate the index range for the current page
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = salesList.slice(indexOfFirstItem, indexOfLastItem);

  // const totalPages = Math.ceil(salesList.length / itemsPerPage);


  const GetData=()=>{
    try {
      axios.get('/studentinfo').then(res=>{
        console.log(res)
setcurrentItems([...res.data.Brand])
      }).catch(err=>{
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetData()
  }, [])
  

  return (
    <DataLayout
      title="Students"
      showFilter={true}
      showEdit={false}
      showAdd={true}
      showViewAll={false}
      addItemLink="/students/add"
      // viewAllLink="/sales"
      openForm={null}
    >
      <table className="w-full  text-left text-gray-800 bg-white">
        <thead className="text-gray-700">
          <tr className="border-gray-200 border-b">
            <th className="px-6 py-4">
              <input type="checkbox" name="inventoryItem" />
            </th>
            <th scope="col" className="px-6 py-4 rounded-l-md w-20">
              Student Name
            </th>
            <th scope="col" className="px-6 py-4">
              Image
            </th>
            <th scope="col" className="px-6 capitalize py-4">
            contact no
            </th>
            <th scope="col" className="px-6 capitalize py-4">
              gurdain No
            </th>
            <th scope="col" className="px-6 py-4">
              Date
            </th>
            <th scope="col" className="px-6 py-4">
              Course
            </th>
            <th scope="col" className="px-6 py-4">
              Shift
            </th>
            <th scope="col" className="px-6 py-4">
              Stage
            </th>

            <th scope="col" className="px-6 w-20 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item,i) => {
            let image=`https://hubitbackendstudentltd.onrender.com/public/${item.image}`
           return  <tr key={i} className=" border-b capitalize" >
              <td className="px-6 py-4">
                <input type="checkbox" name="inventoryItem" value={item.id} />
              </td>
              <td width={'14%'} className="px-6 py-4">{item.name}</td>

              <td className="px-6 py-4">
                <img src={image} className='h-12 w-12 rounded-full'/>
              </td>
              <td className="px-6 py-4">{item.contact_no}</td>
              <td className="px-6 py-4">{item.gurdain_no}</td>
           
              <td className="px-6 py-4">{new Date(item.createdAt).toLocaleString('default',{
                year:'numeric',month:'short',day:'numeric'
              })}</td>
              <td  className="px-6 py-4">
                <div className='line-clamp-2'>{item.Course}</div>
              </td>
              <td className="px-6 py-4">{item.Shift}</td>
              <td className="px-6 py-4">{item.Stage}</td>



              <td className="px-6 py-4">
                <div className="flex gap-2 items-center text-base">
                  <button aria-label="Edit Supplier">
                    <BiPencil />
                  </button>
                  <button aria-label="Delete Supplier">
                    <AiFillDelete />
                  </button>
                  <Link to={"/customer/view"}>
                    <button aria-label="View Supplier">
                      <AiFillEye />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
})}
        </tbody>
      </table>
    </DataLayout>
  );
};

export default Sales;
