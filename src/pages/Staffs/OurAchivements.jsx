import DataLayout from "components/ui/DataLayout";
import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Spinner from "components/ui/Spinner";
import SVG from 'react-inlinesvg';
const OurAchivements = () => {
  document.title = "SA - Add achivements";
  const [Submitted, setSubmitted] = useState(false)

  const formlabels = [
    {
      title: "Title",
      apiname: "title",
      type: "text",
    },
    {
      title: "From",
      apiname: "from",
      type: "text",
    },
    {
        title: "Date",
        apiname: "date",
        type: "date",
      },
    {
      title: "image",
      apiname: "image",
      type: "file",
    },
    
    {
        title: "Overview",
        apiname: "overview",
        type: "none",
      },
    {
      title: "Requirements",
      apiname: "requirements",
      type: "none",
    },
    {
      title: "References",
      apiname: "references",
      type: "none",
    },
  ];

  const data = [
    {
      title: "our Mission",
      color:'#536040',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"/></svg>`,
      
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "our Mission",
      color:'#536040',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"/></svg>`,
      
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "our Mission",
      color:'#536040',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"/></svg>`,
      
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "our Mission",
      color:'#536040',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"/></svg>`,
      
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <DataLayout
      title="Our Achivements"
      showFilter={true}
      showEdit={false}
      showAdd={false}
    >
      <div className={`grid grid-cols-12 gap-4 h-full`}>
        <div className="col-span-6 ">
          <Formik
            initialValues={{
            image:'',
            title:'',
            from:'',
            date:'',
            references:"",
            requirements:"",
            overview:""

            }}
            // validationSchema={schema}
            onSubmit={(values) => {
              setSubmitted(true)
              console.log(values);
            }}
          >
            {({ handleSubmit, setFieldValue }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="grid gap-5">
                    {formlabels.map((val, i) => {
                      if (val.type !== "none") {
                        return (
                          <div className="flex flex-col gap-1 justify-start items-start w-full">
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
                              onChange={(e) => {
                                setFieldValue("description", e.target.value);
                              }}
                              rows="4"
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
        <div className="col-span-6  grid grid-cols-1 h-screen overflow-y-scroll gap-5 px-8 py-4">
          {data.map((val, i) => (
            <div className={`w-full hover:scale-105 transition-all  
            group duration-700 delay-300 ease-in-out ${val.color?"text-white":'bg-white text-gray-500'}  p-6 flex gap-5 items-start 
            justify-start rounded-lg drop-shadow-lg`} style={{
              backgroundColor:val.color
            }}>
              <div className="flex flex-col gap-1 items-start justify-start">
                <div className='flex justify-between w-full'>
                  <div className="text-base capitalize  font-extrabold flex gap-3 items-center">
                    <div className='h-6 w-6'>
                        <SVG src={val.icon} className="h-full w-full" />
                    </div>
                  <div>{val.title}</div>
                  </div>
                  <div className={`flex gap-6 text-xl` }>
                    <div className="text-gray-300 cursor-pointer hover:scale-110 hover:text-sky-600 ease-in-out transition-all delay-100 duration-200"><FaEdit /></div>
                    <div className="text-gray-300 cursor-pointer hover:scale-110 hover:text-red-600 ease-in-out transition-all delay-100 duration-200"><MdDelete /></div>

                  </div>
                </div>
                <div className="text-sm transition-all duration-1000 delay-700 ease-in   text-justify">
                  {val.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DataLayout>
  );
};

export default OurAchivements;
