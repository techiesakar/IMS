import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import {
  AiOutlineWallet,
  AiTwotoneDelete,
  AiTwotoneEdit,
  AiFillDelete,
} from "react-icons/ai";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { Form, Formik, Field } from "formik";
import axios from "../../hoc/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataLayout from "components/ui/DataLayout";
import { PersonAdd, Upload } from "@mui/icons-material";
import UploadImage from "components/ui/UploadImage";
import { BiUpload } from "react-icons/bi";

const AddInstructor = () => {
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const [multipleImage, setMultipleImage] = useState("");
  const [multipleImages, setMultipleImages] = useState("");

  const navigate = useNavigate();

  const instructorFormSchema = yup.object().shape({
    about: yup.string().required("required"),
    email: yup.string().email("Invalid email").required("required"),
    experience: yup.string().required("required"),
    // image: yup.string().required("required"),
    name: yup.string().required("required"),
    position: yup.string().required("required"),
    skills: yup.string().required("required"),
  });

  const InstructorData = [
    {
      type: "text",
      apikey: "about",
      placeholder: "Enter about instructor",
      label: "about instructor",
    },
    {
      type: "email",
      apikey: "email",
      placeholder: "Enter email",
      label: "email",
    },

    {
      type: "text",
      apikey: "experience",
      placeholder: "Enter experience here ",
      label: "experience",
    },

    {
      type: "text",
      apikey: "name",
      placeholder: "Enter name here ",
      label: "name",
    },
    {
      type: "text",
      apikey: "position",
      placeholder: "Enter position here ",
      label: "position",
    },
    {
      type: "text",
      apikey: "skills",
      placeholder: "Enter skills here ",
      label: "skills",
    },
  ];

  const [ID, setID] = useState([]);

  const Submit = async (value, resetForm) => {
    value.image = multipleImages;
    const formDatas = new FormData();
    await formDatas.append("about", value.about);
    await formDatas.append("email", value.email);
    await formDatas.append("experience", value.experience);
    await formDatas.append("image", value.image);
    await formDatas.append("name", value.name);
    await formDatas.append("position", value.position);
    await formDatas.append("skills", value.skills);
    try {
      axios.post("/instructor", formDatas).then((res) => {
        if (res.status === 200) {
          resetForm();
          toast.success("Data has been added sucessfully");
          // setID([...ID, res.data.result.id]);
          setMultipleImages("");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    console.log(event.target.files);
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setMultipleImages(uploadedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  function handleDelete(e, id) {
    e.preventDefault();
    setMultipleImages("");
  }
  return (
    <DataLayout
      title="Add Instructor"
      showFilter={true}
      showEdit={false}
      showAdd={false}
      showViewAll={true}
      addItemLink="/instructor/add"
      viewAllLink="/instructor"
    >
      <div className="wrapper text-left">
        <ToastContainer autoClose={1000} />
        <section>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
            className="bg-primary text-white rounded-md px-3 py-2 flex items-center gap-1 text-sm"
            title="Back to All members section"
          >
            <span className="text-xl">
              <TbArrowBackUp />
            </span>
            Back
          </button>
        </section>
        <div className="bg-white rounded-md p-3 mt-4">
          <header className="flex items-center gap-3 mb-4">
            <h2 className="text-xl capitalize font-medium">
              Add instructor details
            </h2>
            <span className="text-2xl text-slate-900">
              <AiOutlineWallet />
            </span>
          </header>

          <Formik
            initialValues={{
              about: "",
              email: "",
              experience: "",
              image: "",
              name: "",
              position: "",
              skills: "",
            }}
            validationSchema={instructorFormSchema}
            onSubmit={(value, { resetForm }) => {
              Submit(value, resetForm);
            }}
          >
            {({ errors, touched, handleSubmit }) => {
              return (
                <Form>
                  <div className="grid grid-cols-3 gap-3">
                    {InstructorData.map((course, i) => {
                      if (course.type === "select") {
                        return (
                          <div key={i}>
                            <div className="my-1">
                              <label
                                htmlFor="course_name"
                                className="font-medium capitalize text-base text-gray-600"
                              >
                                {course.label}
                              </label>
                            </div>
                            <Field
                              as={course.type}
                              id={course.apikey}
                              name={course.apikey}
                              className="border border-[#c4c4c4] w-full text-slate-800 rounded-[5px]
                                       p-3 focus:outline-primary placeholder:text-sm"
                              placeholder={course.placeholder}
                            >
                              {course?.options?.map((data, index) => {
                                return (
                                  <option key={index}>{data.value}</option>
                                );
                              })}
                            </Field>
                            {errors[course.apikey] && touched[course.apikey] ? (
                              <div className="text-red-500 text-sm capitalize text-light mt-1">
                                {errors[course.apikey]}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      } else {
                        return (
                          <div key={i}>
                            <div className="my-1">
                              <label
                                htmlFor="course_name"
                                className="font-medium capitalize text-base text-gray-600"
                              >
                                {course.label}
                              </label>
                            </div>
                            <Field
                              type={course.type}
                              id={course.apikey}
                              name={course.apikey}
                              placeholder={course.placeholder}
                              className="border w-full  border-[#c4c4c4] text-slate-800 rounded-[5px] p-3
                                       focus:outline-primary placeholder:text-sm"
                            />
                            {errors[course.apikey] && touched[course.apikey] ? (
                              <div className="text-red-500 text-sm capitalize text-light mt-1">
                                {errors[course.apikey]}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className=" h-64 my-3 ">
                    <div className="mb-2">
                      {" "}
                      <label>Upload Cover Image</label>
                    </div>
                    <div className="">
                      <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div
                      className={`border border-[#b2b2b2]   h-52 overflow-clip 
                            flex  items-start justify-center 
                 p-2 border-dashed   rounded-lg`}
                    >
                      {multipleImages.length === 0 ? (
                        <div
                          className={`${
                            multipleImages.length > 0 ? "bg-gray-200" : ""
                          } w-60 h-32   flex items-center  justify-center flex-col mt-1`}
                        >
                          {" "}
                          <div
                            onClick={handleButtonClick}
                            className="flex items-center justify-center h-20"
                          >
                            <BiUpload
                              className="w-9  h-9 p-1.5 text-white bg-blue-600 cursor-pointer 
                             rounded-full flex items-center justify-center"
                            />
                          </div>
                          {
                            <div className="text-center capitalize font-semibold text-gray-700">
                              Upload cover Image Here
                            </div>
                          }
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="  ">
                        {multipleImages && (
                          <div className=" flex flex-col  justify-enter items-center  ">
                            <div className="relative  border border-red-900  p-0.5">
                              <img
                                src={URL.createObjectURL(multipleImages)}
                                alt="Loading"
                                className=" w-80 h- object-cover"
                              />

                              <span
                                onClick={(e) => handleDelete(e)}
                                className="text-red-500  text-2xl cursor-pointer absolute top-4 right-4"
                              >
                                <AiFillDelete />
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end my-4">
                    <Button
                      type="submit"
                      //   disabled={IDs >= 2 ? "" : "disabled "}
                      onClick={handleSubmit}
                      variant="contained"
                      sx={{ padding: "10px 30px" }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </DataLayout>
  );
};

export default AddInstructor;
