import DataLayout from "components/ui/DataLayout";
import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Spinner from "components/ui/Spinner";

const AddStaff = () => {
  document.title = "SA - Add Staff";
  const [Submitted, setSubmitted] = useState(false)

  const formlabels = [
    {
      title: "Title",
      apiname: "title",
      type: "text",
    },
    {
      title: "Message",
      apiname: "message",
      type: "none",
    },
  ];

  const data = [
    {
      title: "our Mission",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "our Mission",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "our Mission",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "our Mission",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <DataLayout
      title="Company Info (our mission, our vision and so on)"
      showFilter={true}
      showEdit={false}
      showAdd={false}
      addItemLink="/staff/add"
      viewAllLink="/staffs"
    >
      <div className={`grid grid-cols-12 gap-4 h-full`}>
        <div className="col-span-6 ">
          <Formik
            initialValues={{
              address: "",
              contact_no: "",
              email: "",
              facebook: "",
              instagram: "",
              whatsapp: "",
              twitter: "",
              linkeind: "",
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
                              type=""
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
                              id="message"
                              name={val.apiname}
                              onChange={(e) => {
                                setFieldValue("message", e.target.value);
                              }}
                              rows="10"
                              placeholder="write your message here"
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
        <div className="col-span-6  grid grid-cols-1 h-96 overflow-y-scroll gap-5 px-8 py-4">
          {data.map((val, i) => (
            <div className="w-full hover:scale-105 transition-all  group duration-700 delay-300 ease-in-out    p-6 flex gap-5 items-start justify-start bg-white rounded-lg drop-shadow-lg">
              <div className="flex flex-col gap-1 items-start justify-start">
                <div className='flex justify-between w-full'>
                  <div className="text-base capitalize text-[#083344] font-extrabold">
                  {val.title}
                  </div>
                  <div className={`flex gap-6 text-xl` }>
                    <div className="text-gray-300 cursor-pointer hover:scale-110 hover:text-sky-600 ease-in-out transition-all delay-100 duration-200"><FaEdit /></div>
                    <div className="text-gray-300 cursor-pointer hover:scale-110 hover:text-red-600 ease-in-out transition-all delay-100 duration-200"><MdDelete /></div>

                  </div>
                </div>
                <div className="text-sm transition-all duration-1000 delay-700 ease-in  text-gray-400 text-justify">
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

export default AddStaff;
