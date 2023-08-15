import DataLayout from 'components/ui/DataLayout'
import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import { BiUpload } from "react-icons/bi";


function Add() {
    document.title='Add Team Members'

    const formlabels = [
        {
          title: "Name",
          type:'text',
          apiname:'name'
        },
        {
          title: "Image",
          type:'file',
          apiname:'Image'
    
        },
        {
          title: "Position",
          type:'text',
          apiname:'position'
    
        },
        {
          title: "facebook link (optional)",
          apiname:'facebook'
    
        },
        {
          title: "whatsapp link (optional)",
          apiname:'whatsapp'
    
        },
        {
          title: "instagram link (optional)",
          apiname:'instagram',
        },
        {
          title: "linkeind link (optional)",
          apiname:'linkeind'
    
        },
        {
          title: "twitter link (optional)",
          apiname:'twitter'
    
        },
      ];
  return (
    <div>
      <DataLayout
      title="Team Members"
      showFilter={true}
      showEdit={false}
      showAdd={false}
      showViewAll={true}
      viewAllLink="/team/view"
    >
        <div>
        <div className="col-span-7 ">
          <Formik
          initialValues={{
            name:"",
            image:"",
            position:"",
            facebook:"",
            instagram:"",
            whatsapp:"",
            twitter:"",
            linkeind:""
          }}
        //   validationSchema={schema}
          onSubmit={(values)=>{
            console.log(values)
          }}
          >
            {({handleSubmit,values,setFieldValue}) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className='grid grid-cols-2 gap-5'>
                    {
                      formlabels.map((val,i)=>{
                       if(val.type==='file'){
                        return (
                            <div className="flex flex-col gap-1 justify-start items-start w-full">
                            <label  className="text-sm font-semibold capitalize">{val.title}</label>
                            <label htmlFor={val.apiname}  className="text-sm font-semibold capitalize">
                                {
                                    values.image?<div className='h-16 w-16 '>
                                        <img className='h-full w-full' src={URL.createObjectURL(values.image)} />
                                    </div>:
                                    <div 
                              className=" text-white text-3xl flex items-center justify-center h-16 w-16 bg-blue-400 border-gray-500 rounded-md px-4 py-2 outline-none placeholder:capitalize"
                                    
                                    >
                                        <BiUpload />
                                    </div>
                                }
                            </label>
                            
                            <input 
                            id={val.apiname}
                            onChange={(e)=>{
                                setFieldValue('image',e.target.files[0]);
                                e.target.value='';
                            }}
                              type={val.type}
                              placeholder={val.title}
                              name={val.apiname}
                              className="border hidden w-full bg-gray-100 border-gray-500 rounded-md px-4 py-2 outline-none placeholder:capitalize"
                            />
                            <ErrorMessage name={val.apiname} component={'div'} className='text-sm text-red-600' />
                          </div>
                          )
                       }else{
                        return (
                            <div className="flex flex-col gap-1 justify-start items-start w-full">
                            <label htmlFor={val.apiname}  className="text-sm font-semibold capitalize">{val.title}</label>
                            <Field
                              type={val.type}
                              placeholder={val.title}
                              name={val.apiname}
                              className="border w-full bg-gray-100 border-gray-500 rounded-md px-4 py-2 outline-none placeholder:capitalize"
                            />
                            <ErrorMessage name={val.apiname} component={'div'} className='text-sm text-red-600' />
                          </div>
                          )
                       }
                      })
                    }
                 
                  </div>
                  <div className='flex w-full'>
                    <button className='w-fit h-fit px-20 mt-6 rounded-md capitalize drop-shadow-md py-2 bg-green-700 text-white'>submit</button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        </div>
     
    </DataLayout>
    </div>
  )
}

export default Add
