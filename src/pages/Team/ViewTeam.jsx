import DataLayout from 'components/ui/DataLayout'
import React from 'react'
import Logo from '../../assets/brandings/LogoBlack.png'
import { useState,useEffect } from 'react';
import axios from 'hoc/axios'
import { Link } from 'react-router-dom';
function ViewTeam() {
    document.title='View Team Members';


    const tableHead = [
        {
          title: "name",
        },
        {
          title: "Image",
        },
        {
          title: "position",
        },
        {
          title: "Social Medai Link",
        },
      ];
    
      const [tableBody,settableBody] = useState([]);
      
      const [ShowModalUpdate, setShowModalUpdate] = useState(false)

      const getData=()=>{
        try{
          axios.get('/staff').then(res=>{
            console.log(res);
            if(res.status===200){
              settableBody([...res.data.data])
            }
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
    <div>
         <DataLayout
      title="View Team Members"
      showFilter={true}
      showEdit={false}
      showAdd={true}
      addItemLink={'/team/add'}
      showViewAll={false}
      
    >
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                {tableHead.map((val, i) => {
                  return (
                    <th key={i} scope="col" className="px-6 py-3">
                      {val.title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {tableBody.map((val, i) => {
                let images=`http://cmsback.e-aribt.com/public/${val.employee_img}`
                return (
                  <tr key={i}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 capitalize py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {val.staff_name}
                    </th>
                    <td className="px-6 py-4 ">
                        <img src={images} alt={val.staff_name} className='h-14 w-14 rounded-full' />
                    </td>
                    <td className="px-6 py-4 text-justify capitalize">{val.position}</td>
                    <td className="px-6 py-4 text-justify">
                        <div className='grid gap-4'>
                        <Link to={val.facebook_link} target='_blank'>1. Facebook</Link>
                        <Link to={val.instagram_link} target='_blank'>2. instagram</Link>
                        <Link to={val.twitter_link} target='_blank'>3. twitter</Link>
                        <Link to={val.whatsapp_link} target='_blank'>4. whatsapp</Link>
                        </div>
                    </td>

                    <td className="flex items-center px-6 py-4 space-x-3">
                      <div 
                        onClick={()=>{
                            setShowModalUpdate(true)
                        }}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </div>
                      <a
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    </DataLayout>

    <div>

{/* <!-- Modal toggle --> */}


{/* <!-- Main modal --> */}
<div  className={`fixed top-0 left-0 right-0 z-50 flex transition-all duration-1000 delay-200 ease-in-out ${ShowModalUpdate?'translate-y-0':'-translate-y-full'} bg-black bg-opacity-10 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full`}>
    <div className="relative w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={()=>{
                setShowModalUpdate(false)
            }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <form className="space-y-6" action="#">
                    <div className='flex flex-col  items-start justify-start'>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div className='flex flex-col items-start justify-start'>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 

    </div>
    </div>
  )
}

export default ViewTeam
