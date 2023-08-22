import DataLayout from "components/ui/DataLayout";
import React,{useCallback, useMemo,useEffect, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Spinner from "components/ui/Spinner";
// import SVG from 'react-inlinesvg';
import axios from 'hoc/axios'
import { Link } from "react-router-dom";
const Instructor = () => {
  document.title = "SA - Student";
  const [Submitted, setSubmitted] = useState(false)
  const [Data, setData] = useState([])
  const [reload, setreload] = useState(false)


  const formlabels = [
    {
      title: "Name",
      apiname: "name",
      type: "text",
    },
    {
      title: "email",
      apiname: "email",
      type: "email",
    },
    {
      title: "contact no",
      apiname: "contact",
      type: "text",
    },
  ];
  const [Course, setCourse] = useState([])

  const getCourse=()=>{
    try {
      axios.get('/course').then(res=>{
        console.log(res);
        setCourse([...res.data.result])
      }).catch(err=>{
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCourse()
  }, [])
  

  
  const getData=useCallback(
    () => {
      try {
        axios.get('/student').then(res=>{
          console.log(res);
          setData([...res.data.result])
        }).catch(err=>{
          console.log(err)
        })
      } catch (error) {
        console.log(error);
      }
    },
    [reload],
  )
  useMemo(() => getData(), [reload])

  const deletedata=(id)=>{
    try {
      axios.delete(`/student/${id}`).then(res=>{
setreload(prev=>!prev)
      }).catch(err=>{
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DataLayout
      title="Our Student"
      showFilter={false}
      showEdit={false}
      showAdd={false}
    >
      <div className={`grid grid-cols-12 gap-4 h-full`}>
        <div className="col-span-4 ">
          <Formik
            initialValues={{
            image:'',
            name:'',
            email:"",
            contact:"",
            course:[],

            }}
            // validationSchema={schema}
            onSubmit={(values,{resetForm}) => {
              // setSubmitted(true)
              console.log(values);
              try {
              setSubmitted(true)
                const formData=new FormData();
                formData.append('name',values.name)
                formData.append('email',values.email)
                formData.append('contact',values.contact)
                formData.append('course',JSON.stringify(values.course))

                formData.append('image',values.image)

                axios.post('/student',formData).then(res=>{
                  console.log(res)
                  setSubmitted(false)
                  setreload(true)

                  resetForm()
                }).catch(err=>{
              setSubmitted(false)
              console.log(err)
                })
              } catch (error) {

                console.log(error)
              }
            }}
          >
            {({ handleSubmit,values,setFieldValue }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="grid gap-5">
                    {formlabels.map((val, i) => {
                      if (val.type !== "textarea") {
                        return (
                          <div key={i} className="flex flex-col gap-1 justify-start items-start w-full">
                            <label
                              htmlFor={val.apiname}
                              className="text-sm font-semibold capitalize"
                            >
                              {val.title}
                            </label>

                            <Field
                              type={val.type}
                              placeholder={val.title}
                              name={val.apiname}
                              className="border w-full bg-gray-100 border-gray-500 rounded-md px-4 py-2 outline-none placeholder:capitalize"
                            />
                            <ErrorMessage
                              name={val.apiname}
                              component={"div"}
                              className="text-sm text-red-600"
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div className="flex flex-col gap-1 justify-start items-start w-full">
                            <label
                              htmlFor={val.apiname}
                              className="text-sm font-semibold capitalize"
                            >
                              {val.title}
                            </label>

                            <textarea
                              id="description"
                              name={val.apiname}
                              value={values.description}
                              onChange={(e) => {
                                setFieldValue("description", e.target.value);
                              }}
                              rows="10"
                              placeholder="write your description here"
                              className="border w-full bg-gray-100 border-gray-500 rounded-md px-4 py-2 outline-none placeholder:capitalize"
                            ></textarea>
                            <ErrorMessage
                              name={val.apiname}
                              component={"div"}
                              className="text-sm text-red-600"
                            />
                          </div>
                        );
                      }
                    })}

<div className="flex flex-col gap-1 justify-start items-start w-full">
                            <label
                              htmlFor={'image'}
                              className="text-sm font-semibold capitalize"
                            >
                              {'image'}
                            </label>

                            <input
                            id="image"
                              type="file"
                              // placeholder={val}
                              name={'image'}
                              onChange={(e)=>{
                                setFieldValue('image',e.target.files[0])
                                e.target.value=''
                              }}
                              className="border w-full bg-gray-100 border-gray-500 rounded-md px-4 py-2 outline-none placeholder:capitalize"
                            />
                            <ErrorMessage
                              name={'image'}
                              component={"div"}
                              className="text-sm text-red-600"
                            />
                            {
                              values.image && <img alt='loading...' src={URL.createObjectURL(values.image)} className="w-full aspect-square" />
                            }
                          </div>


                          <div className="flex flex-col gap-1 justify-start items-start w-full">
                            <label
                              htmlFor={'course'}
                              className="text-sm font-semibold capitalize"
                            >
                              {'course'}
                            </label>

                            <select
                              as="select"
                              placeholder={'select course'}
                              name={'course'}
                              onChange={(e)=>{
                                let data=Course[e.target.value]
                                if(values.course.findIndex(x=>x.id===data.id)===-1){

                                  setFieldValue("course", [...values.course,data]);
                                }
                                // console.log(data)
                              }}
                              className="border capitalize w-full bg-gray-100 border-gray-500 rounded-md px-4 py-2 outline-none placeholder:capitalize"
                            >
                              <option value="">select course</option>
                              {
                                Course.map((item,i)=>{
                                  return <option key={i} value={i}>{item.title}</option>
                                })
                              }
                            </select>
                            <div className='mt-4 grid grid-cols-2 gap-4'>
                              {
                                values.course.map((val,i)=>{
                                  console.log(val);

                                  return <div key={i} className='w-fit h-fit px-4 py-2 border border-gray-400 text-white bg-gray-400'>
                                    <div>{val.title}</div>
                                  </div>
                                })
                              }
                            </div>
                            <ErrorMessage
                              name={'course'}
                              component={"div"}
                              className="text-sm text-red-600"
                            />
                          </div>
                  </div>
                  <div className="flex w-full">
                    <button disabled={Submitted?true:false} className="disabled:bg-gray-500 disabled:cursor-not-allowed w-fit h-fit px-20 mt-6 rounded-md capitalize drop-shadow-md py-2 bg-green-700 text-white">
                    {
                      Submitted?<Spinner />:'submit'
                    }
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="col-span-8  grid grid-cols-1 place-content-start place-items-start h-[570px] overflow-y-scroll gap-5 px-8 py-4">
         {Data.length>0?
         <table className="w-full">
          <thead className="bg-blue-700 text-white py-4">
            <tr >
            <th className="py-3 px-2 capitalize">S.no</th>
            <th className="py-3 px-2 capitalize">image</th>
            <th className="py-3 px-2 capitalize">name</th>
            <th className="py-3 px-2 capitalize">contact</th>
            <th className="py-3 px-2 capitalize">email</th>
            <th className="py-3 px-2 capitalize">course</th>
            <th className="py-3 px-2 capitalize">action</th>


            </tr>

          </thead>
          <tbody>
          {Data.map((val, i) => {
            return(
              <tr key={i} className="pt-3">
                <td className="mt-6 border px-2">{i+1}</td>
                <td className="mt-6 border px-2">
                  <div className="h-8 w-8 flex items-center justify-center mt-3">
                  <img alt='loading...' src={`http://localhost:5004/public/${val.image}`} className='w-full h-full rounded-full' />
                  </div>
                </td>
                <td className="mt-6 border px-2">{val.name}</td>
                <td className="mt-6 border px-2">{val.contact}</td>
                <td className="mt-6 border px-2">{val.email}</td>
                <td className="mt-6 border px-2">{
                val.course.map((item,i)=>(
                  <div key={i} className="flex">{i+1}. {item.title}</div>
                ))
                
                
                }</td>
                <td className="mt-6 border px-2">
                <div className={`flex gap-2 text-xl` }>
                    <Link to={`/students/edit/${val.id}`} className="text-gray-300 cursor-pointer hover:scale-110
                     hover:text-sky-600 ease-in-out transition-all delay-100 duration-200">
                      <FaEdit /></Link>
                    <div className="text-gray-300 cursor-pointer hover:scale-110
                     hover:text-red-600 ease-in-out transition-all delay-100 duration-200">
                      <MdDelete onClick={()=>{
                        deletedata(val.id)
                      }} /></div>

                  </div>
                </td>



              </tr>
            )
          })
          }

          </tbody>
         </table>:<div className='flex items-center'>
            <Spinner />
            </div>
}
      
        </div>
      </div>
    </DataLayout>
  );
};

export default Instructor;
