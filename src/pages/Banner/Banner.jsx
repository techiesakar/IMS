import DataLayout from "components/ui/DataLayout";
import React,{useCallback, useMemo, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Spinner from "components/ui/Spinner";
// import SVG from 'react-inlinesvg';
import axios from 'hoc/axios'
// import { Link } from "react-router-dom";
const Banner = () => {
  document.title = "SA - Banner";
  const [Submitted, setSubmitted] = useState(false)
  const [Data, setData] = useState([])
  const [reload, setreload] = useState(false)


  const formlabels = [
    {
      title: "type",
      apiname: "type",
      type: "text",
    }
  ];

  
  const getData=useCallback(
    () => {
      try {
        axios.get('/banner').then(res=>{
          console.log(res);
          setData([...res.data.result])
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
      axios.delete(`/banner/${id}`).then(res=>{
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
      title="Our Banner"
      showFilter={false}
      showEdit={false}
      showAdd={false}
    >
      <div className="text-sm text-red-500 font-bold uppercase">home can be more then one. rest can only be 1</div>
      <div className={`grid grid-cols-12 gap-4 h-full`}>
        <div className="col-span-6 ">
          <Formik
            initialValues={{
            image:'',
            type:'',
            }}
            // validationSchema={schema}
            onSubmit={(values,{resetForm}) => {
              // setSubmitted(true)
              console.log(values);
              try {
              setSubmitted(true)
                const formData=new FormData();
                formData.append('type',values.type)
                formData.append('image',values.image)

                axios.post('/banner',formData).then(res=>{
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
                      if (val.type === "text") {
                        return (
                          <div className="flex flex-col gap-1 justify-start items-start w-full">
                            <label
                              htmlFor={val.apiname}
                              className="text-sm font-semibold capitalize"
                            >
                              {val.title}
                            </label>

                            <Field
                              as="select"
                              placeholder={val.title}
                              name={val.apiname}
                              className="border w-full capitalize bg-gray-100 border-gray-500 rounded-md px-4 py-2 outline-none placeholder:capitalize"
                            >
                              <option value={''}>select banner page</option>
                              <option value={'home'}>home</option>
                              <option value={'about'}>about</option>
                              <option value={'gallery'}>gallery</option>
                              <option value={'portfolio'}>portfolio</option>
                              <option value={'contact'}>contact</option>
                              <option value={'blog'}>blog</option>



                            </Field>
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
                              values.image && <img alt="loading" src={URL.createObjectURL(values.image)} className="w-full aspect-square" />
                            }
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
        <div className="col-span-6  grid grid-cols-1 place-content-start place-items-start h-[570px] overflow-y-scroll gap-5 px-8 py-4">
          {Data.length>0?Data.map((val, i) => (
            <div className={`w-full hover:scale-105 transition-all  h-fit  
            group duration-700 delay-300 ease-in-out ${val.color?"text-white":'bg-white text-gray-500'}  p-6 flex gap-5 items-start 
            justify-start rounded-lg drop-shadow-lg`} >
              <div className="flex flex-col gap-1 items-start  w-full justify-start">
                <div className='flex justify-between  w-full'>
                  <div className="text-base capitalize  font-extrabold flex gap-3 items-center">
                    {/* <div className='h-10 w-10 rounded-full bg-gray-500 '>
                      {
                        val.image && <img src={`http://localhost:5004/public/${val.image}`} className='w-full h-full rounded-full' />
                      }
                    </div> */}
                  <div>{val.type}</div>
                  </div>
                  <div className={`flex gap-6 text-xl` }>
                    {/* <Link to={`/banner/edit/${val.id}`} className="text-gray-300 cursor-pointer hover:scale-110
                     hover:text-sky-600 ease-in-out transition-all delay-100 duration-200">
                      <FaEdit /></Link> */}
                    <div className="text-gray-300 cursor-pointer hover:scale-110
                     hover:text-red-600 ease-in-out transition-all delay-100 duration-200">
                      <MdDelete onClick={()=>{
                        deletedata(val.id)
                      }} /></div>

                  </div>
                </div>
                <div className="text-sm transition-all w-full  h-56  pt-3 duration-1000  flex items-center justify-center delay-700 ease-in font-serif  text-justify">
                {
                        val.image && <img alt="loading" src={`http://localhost:5004/public/${val.image}`} className=' h-full aspect-square mx-auto' />
                      }
                </div>
              </div>
            </div>
          )):<div className='flex items-center'>
            <Spinner />
            </div>}
        </div>
      </div>
    </DataLayout>
  );
};

export default Banner;
