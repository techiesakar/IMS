import Spinner from 'components/ui/Spinner';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import axios from 'hoc/axios'
import {useParams,useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

function EditStudent() {
    const [Submitted, setSubmitted] = useState(false)
  const [Data, setData] = useState([])

    const {id}=useParams()
    const navigate=useNavigate()
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
      const getData=
        (id) => {
          try {
            axios.get(`/student/${id}`).then(res=>{
              console.log(res);
              setData([...res.data.result])
            })
          } catch (error) {
            console.log(error);
          }
        }
    
      useEffect(() => {
        getData(id)
      
       
      }, [id,useParams])
      
  return (
    <div className="">
        <div className='text-2xl font-bold capitalize flex py-4 underline text-blue-900'>Edit Student</div>
    <div>
    {
        Data.length>0?<Formik
        initialValues={{
        limage:Data.length>0?Data[0]?.image:"",
        image:"",
        name:Data.length>0?Data[0]?.name:"",
        email:Data.length>0?Data[0]?.email:"",
        contact:Data.length>0?Data[0]?.contact:"",
        course:Data.length>0?Data[0]?.course:[],
        // description:Data.length>0?Data[0]?.description:"",
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
            formData.append('image',values.image?values.image:values.limage)
  
            axios.patch(`/student/${id}`,formData).then(res=>{
              console.log(res)
              setSubmitted(false)
              navigate(-1)
  
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
              {console.log(Data,values)}
              <div className="grid gap-5">
                {formlabels.map((val, i) => {
                  if (val.type != "textare") {
                    return (
                      <div key={val.apiname} className="flex flex-col gap-1 justify-start items-start w-full">
                        <label
                          htmlFor={val.apiname}
                          className="text-sm font-semibold capitalize"
                        >
                          {val.title}
                        </label>
  
                        <Field
                          type="text"
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
                      <div key={i} className="flex flex-col gap-1 justify-start items-start w-full">
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
                            <div className='mt-4 grid grid-cols-6 gap-4'>
                              {
                                values?.course.map((val,i)=>{
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
                              values.image ? <img src={URL.createObjectURL(values.image)} className="w-full aspect-square" />
                            :<img src={`http://localhost:5004/public/${values.limage}`} className="w-full aspect-square" />
                        }
                      </div>
              </div>
              <div className="flex w-full gap-5 mt-6">
                  <div onClick={()=>{
                      navigate(-1)
                  }} className='capitalize w-fit h-fit px-10 py-2 bg-red-500 text-white cursor-pointer rounded-md'>
                  discard
                  </div>
                <button disabled={Submitted?true:false} className="disabled:bg-gray-500 disabled:cursor-not-allowed w-fit h-fit px-20  rounded-md capitalize drop-shadow-md py-2 bg-green-700 text-white">
                {
                  Submitted?<Spinner />:'submit'
                }
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>:<Spinner />
    }
    </div>
  </div>
  )
}

export default EditStudent