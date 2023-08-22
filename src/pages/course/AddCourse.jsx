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

const Course = () => {
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const [multipleImage, setMultipleImage] = useState("");
  const [multipleImages, setMultipleImages] = useState("");

  const navigate = useNavigate();
  const [teamData, setTeamData] = useState([]);
  const [storeRangeNumber, setStoreRangeNumber] = useState(0);
  const [budgetData, setBudgetData] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [showOutSourcingSubmittedData, setShowOutSourcingSubmittedData] =
    useState([]);

  // selected budget state
  const [setSelectedBudget, setSetSelectedBudget] = useState(null);

  const status = [
    { value: "planned", id: "1" },
    { value: "ongoing member", id: "2" },
    { value: "completed", id: "3" },
  ];

  //for options in status only change state name
  const Status = [];

  status?.map((val, i) => {
    let detas = {
      value: val.value,
      id: val.id,
    };
    return Status.push(detas);
  });

  //for options in Team only change state name
  const Team = [];
  teamData?.map((val, i) => {
    let detas = {
      value: val.firstname,
      id: val.id,
    };
    return Team.push(detas);
  });

  const gender = [
    { value: "male", id: "1" },
    { value: "female", id: "2" },
    { value: "others", id: "3" },
  ];

  //for options in gender only change state name
  const Gender = [];
  gender?.map((val, i) => {
    let detas = {
      value: val.value,
      id: val.id,
    };
    return Gender.push(detas);
  });

  const position = [
    { value: "Manager", id: "1" },
    { value: "Advisor", id: "2" },
    { value: "Moderator", id: "3" },
    { value: "Member", id: "3" },
  ];

  //for options in position only change state name
  const Position = [];
  position?.map((val, i) => {
    let detas = {
      value: val.value,
      id: val.id,
    };
    return Position.push(detas);
  });

  const Budget = [];
  budgetData?.map((val, i) => {
    let detas = {
      value: val.programName,
      id: val.id,
    };
    return Budget.push(detas);
  });

  const CourseSchema = yup.object().shape({
    title: yup.string().required("required"),
    skillLevel: yup.string().required("required"),
    duration: yup.string().required("required"),
    description: yup.string().required("required"),
    category: yup.string().required("required"),
  });
  const [category, setCategory] = useState([]);
  const categoryOptions = [];
  category?.map((val) => {
    console.log(val);
    let allCategoryData = { value: val.title, id: val.id };
    return categoryOptions.push(allCategoryData);
  });
  const formData = [
    {
      type: "text",
      label: "title",
      apikey: "title",
      placeholder: " Enter title here",
    },
    {
      type: "text",
      label: "skill level",
      apikey: "skillLevel",
      placeholder: "Enter skill level here",
    },
    {
      type: "date",
      label: "duration",
      apikey: "duration",
      placeholder: "Enter duration here ",
    },
    {
      type: "text",
      label: "description",
      apikey: "description",
      placeholder: "Enter description here",
    },
    {
      type: "select",
      label: "category",
      apikey: "category",
      options: [{ id: "0", value: "Select category" }, ...categoryOptions],
    },
  ];

  // const InstructorData = [
  //   {
  //     type: "text",
  //     apikey: "about",
  //     placeholder: "Enter about instructor",
  //     label: "about instructor",
  //   },
  //   {
  //     type: "email",
  //     apikey: "email",
  //     placeholder: "Enter email",
  //     label: "email",
  //   },

  //   {
  //     type: "text",
  //     apikey: "experience",
  //     placeholder: "Enter experience here ",
  //     label: "experience",
  //   },

  //   {
  //     type: "text",
  //     apikey: "name",
  //     placeholder: "Enter name here ",
  //     label: "name",
  //   },
  //   {
  //     type: "text",
  //     apikey: "position",
  //     placeholder: "Enter position here ",
  //     label: "position",
  //   },
  //   {
  //     type: "text",
  //     apikey: "skills",
  //     placeholder: "Enter skills here ",
  //     label: "skills",
  //   },
  // ];
  // const formImage = [
  //   {
  //     type: "file",
  //     apikey: "image",
  //     label: "image",
  //     accept: ".gif,.jpg,.jpeg,.png,.mov",
  //     file: "",
  //   },
  //   {
  //     type: "file",
  //     apikey: "donorAgrement",
  //     label: "Upload Donor Agreement",
  //     accept: ".gif,.jpg,.jpeg,.png,.mov",
  //     file: "",
  //   },
  //   {
  //     type: "file",
  //     apikey: "contactAgrement",
  //     label: "Upload Contract Agreement",
  //     accept: ".gif,.jpg,.jpeg,.png,.mov",
  //     file: "",
  //   },
  // ];

  const [storeOutSourcingSubmittedData, setStoreOutSourcingSubmittedData] =
    useState(false);

  // const [store, setStore] = useState([...formImage]);
  const [IDs, setIDs] = useState("");

  // const handleImage = (e, valued, i) => {
  //   console.log(e.target.files, e.target.value);
  //   if (e.target.value) {
  //     let data = store;
  //     data[i].file = e.target.files[0];
  //     setStore([...data]);
  //     setIDs(i);
  //   }
  // };
  // const [ID, setID] = useState([]);
  const Submit = async (values, resetForm) => {
    console.log(values);
    values.image = multipleImage;
    const formData = new FormData();
    await formData.append("image", values.image);
    await formData.append("title", values.title);
    await formData.append("skillLevel", values.skillLevel);
    await formData.append("description", values.description);
    await formData.append("duration", values.duration);
    await formData.append("category", values.category);

    try {
      axios
        .post("/course", formData)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Data has been added sucessfully");
            resetForm();
            setMultipleImage("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // const handleDataChange = (e) => {
  //   setStoreRangeNumber(e.target.value);
  // };
  // const AddMultipleData = async (value, resetForm) => {
  //   console.log(value);
  //   let data = showOutSourcingSubmittedData;
  //   setShowOutSourcingSubmittedData([...data, value]);
  //   setStoreOutSourcingSubmittedData(showOutSourcingSubmittedData);
  //   value.image = store[0].file;
  //   value.donorAgrement = store[1].file;
  //   value.contactAgrement = store[2].file;
  //   const formDatas = new FormData();
  //   await formDatas.append("firstName", value.firstName);
  //   await formDatas.append("lastName", value.lastName);
  //   await formDatas.append("gender", value.gender);
  //   await formDatas.append("contactNo", value.contactNo);
  //   await formDatas.append("email", value.email);
  //   await formDatas.append("image", value.image);
  //   await formDatas.append("donorAgrement", value.donorAgrement);
  //   await formDatas.append("contactAgrement", value.contactAgrement);
  //   await formDatas.append("position", value.position);
  //   try {
  //     axios.post("/OutSources", formDatas).then((res) => {
  //       resetForm();
  //       setStore([...formImage]);
  //       toast.success("Data has been added sucessfully");
  //       setID([...ID, res.data.result.id]);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getBudgets = () => {
  //   try {
  //     axios
  //       .get("/Budget")
  //       .then((res) => {
  //         // console.log(res);
  //         setBudgetData(res.data.result);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getTeamMembers = () => {
  //   try {
  //     axios
  //       .get("/staff")
  //       .then((res) => {
  //         setTeamData(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // setting the maximum input range in total budget
  // const [maxBudget, setMaxBudget] = useState(0);

  // const handleSetRemainingBudget = (id) => {
  //   console.log(id);
  //   const selectedBudget = budgetData.find((budget) => budget.id === id);
  //   setMaxBudget(
  //     Number(selectedBudget.budgetIssued) - Number(selectedBudget.usedBudget)
  //   );
  //   console.log(maxBudget);
  //   // console.log(Number(selectedBudget.budgetIssued) - Number(selectedBudget.usedBudget))
  // };

  const getCategory = () => {
    axios
      .get(`/category`)
      .then((res) => {
        // console.log(res);
        setCategory(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    // getTeamMembers();
    // getBudgets();
    getCategory();
  }, []);

  // const Delete = (id) => {
  //   axios
  //     .delete(`/planning/${id}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         toast.error("Data has been deleted sucessfully");
  //         getTeamMembers();
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const handleFileChange = (event) => {
    // alert("image1");
    console.log(event.target.files);
    const uploadedFile = event.target.files[0];
    // setFile(uploadedFile);
    if (uploadedFile) {
      setMultipleImage(uploadedFile);
    }
  };
  // const handleFileChange2 = (event) => {
  //   alert("image2");
  //   console.log(event.target.files);
  //   const uploadedFile = event.target.files[0];
  //   // setFile(uploadedFile);
  //   if (uploadedFile) {
  //     setMultipleImages(uploadedFile);
  //   }
  // };
  const handleButtonClick = () => {
    fileInputRef.current.click();
    // setShowImage(true);
  };
  // const handleButtonClick1 = () => {
  //   fileInputRef2.current.click();
  //   // setShowImage(true);
  // };
  function handleDelete(e, id) {
    e.preventDefault();
    setMultipleImage("");
  }
  // function handleDelete2(e, id) {
  //   e.preventDefault();
  //   setMultipleImages("");
  // }
  return (
    <DataLayout
      title="Add course"
      showFilter={true}
      showEdit={false}
      showAdd={false}
      showViewAll={true}
      addItemLink="/course/add"
      viewAllLink="/course"
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
            <h2 className="text-xl font-medium">New course</h2>
            <span className="text-2xl text-slate-900">
              <AiOutlineWallet />
            </span>
          </header>

          <Formik
            initialValues={{
              title: "",
              skillLevel: "",
              description: "",
              duration: "",
              image: "",
              category: "",
            }}
            validationSchema={CourseSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              Submit(values, resetForm);
            }}
          >
            {({ errors, touched, handleSubmit, setFieldValue, values }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-3">
                    {formData.map((course, i) => {
                      if (course.type === "select") {
                        return (
                          <div key={i}>
                            <div className=" my-1 text-left ">
                              <label
                                htmlFor="title"
                                className="font-medium capitalize text-base text-gray-600"
                              >
                                {course.label}
                              </label>
                            </div>

                            <Field
                              as={course.type}
                              // id={course.apikey}
                              name={course.apikey}
                              className="border border-[#c4c4c4] w-full text-slate-800 rounded-[5px] p-3 focus:outline-primary placeholder:text-sm"
                              // required
                              placeholder={course.placeholder}
                              // value={courseData.name}
                              onChange={(e) => {
                                if (course.apikey === "TeamMembers") {
                                  let data = course.options[e.target.value];
                                  setFieldValue(course.apikey, [
                                    ...values[course.apikey],
                                    data,
                                  ]);
                                } else if (course.apikey === "budgetrel") {
                                  setFieldValue(course.apikey, e.target.value);
                                  // handleSetRemainingBudget(e.target.value);
                                } else {
                                  setFieldValue(course.apikey, e.target.value);
                                }
                              }}
                            >
                              {course?.options?.map((data, index) => {
                                {
                                  /* console.log(data); */
                                }
                                return (
                                  <option
                                    key={data.id}
                                    value={
                                      course.apikey === "TeamMembers"
                                        ? index
                                        : data.id
                                    }
                                  >
                                    {data.value}
                                  </option>
                                );
                              })}
                            </Field>
                            {course.apikey === "TeamMembers" ? (
                              <div
                                className={`${
                                  values.TeamMembers.length > 0
                                    ? "bg-gray-200 flex flex-wrap items-center justify-cnter gap-3  mt-2 px-2 py-2 "
                                    : ""
                                }`}
                              >
                                {values.TeamMembers.map((val, i) => {
                                  // console.log(val);
                                  return (
                                    <div key={i} className="relative">
                                      <div
                                        className={`${
                                          values.TeamMembers
                                            ? " px-2 py-0.5 border border-black rounded-[4px] w-fit "
                                            : ""
                                        }`}
                                      >
                                        {val.value}
                                      </div>
                                      <div
                                        onClick={() =>
                                          setFieldValue(
                                            values.TeamMembers.splice(i, 1)
                                          )
                                        }
                                        className="  cursor-pointer hover:scale-105 flex justify-center items-center absolute -top-2 -right-2  bg-red-500
                                     text-white rounded-full w-5 h-5 p-1  text-sm"
                                      >
                                        x
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            ) : null}
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
                                htmlFor={course.apikey}
                                className="font-medium capitalize text-base text-gray-600"
                              >
                                {course.label}
                              </label>
                            </div>
                            {course.apikey === "Budget" ? (
                              <input
                                type={course.type}
                                id={course.apikey}
                                name={course.apikey}
                                className="border w-full border-[#c4c4c4] text-slate-800 rounded-[5px] p-3 focus:outline-primary placeholder:text-sm"
                                max="50"
                                onChange={(e) => {
                                  let valued = e.target.value;
                                  setFieldValue(course.apikey, valued);
                                }}
                                placeholder={course.placeholder}
                              />
                            ) : (
                              <Field
                                type={course.type}
                                id={course.apikey}
                                name={course.apikey}
                                className="border w-full border-[#c4c4c4] text-slate-800 rounded-[5px] p-3 focus:outline-primary placeholder:text-sm"
                                // required
                                placeholder={course.placeholder}
                              />
                            )}
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
                      {multipleImage.length === 0 ? (
                        <div
                          className={`${
                            multipleImage.length > 0 ? "bg-gray-200" : ""
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
                        {multipleImage && (
                          <div className=" flex flex-col  justify-enter items-center  ">
                            <div className="relative  border border-red-900  p-0.5">
                              {/* {multipleImage ? ( */}
                              <img
                                src={URL.createObjectURL(multipleImage)}
                                // setImageUrl(URL.createObjectURL(uploadedFile));

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

                  <div className="flex justify-end  my-4">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ padding: "10px 30px" }}
                    >
                      Add course
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

export default Course;

// import Button from "components/Button";
// import DataLayout from "components/ui/DataLayout";
// import UploadImage from "components/ui/UploadImage";
// import React, { useState, useRef, useEffect } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { BiUpload } from "react-icons/bi";
// import img from "../../assets/brandings/Logo.png";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "../../hoc/axios";
// const AddCourse = () => {
//   document.title = "SA - Inventory";
//   //   const Category = [
//   //     { value: "one", id: "1" },
//   //     { value: "two", id: "2" },
//   //   ];
//   const [storeCategory, setStoreCategory] = useState([]);
//   const [ChangeTitle, setChangeTitle] = useState("");
//   const [ChangeSkillLevel, setChangeSkillLevel] = useState("");
//   const [ChangeCategory, setChangeCategory] = useState("");
//   const [ChangeDescription, setChangeDescription] = useState("");
//   const fileInputRef = useRef(null);
//   const [file, setFile] = useState(null);
//   const [multipleImage, setMultipleImage] = useState([]);
//   const [imageUrl, setImageUrl] = useState("");
//   const [showImage, setShowImage] = useState(false);
//   //for options in status only change  state name
//   const opti = [];
//   storeCategory.map((val, i) => {
//     let stats = {
//       value: val.title,
//       id: val.id,
//     };
//     return opti.push(stats);
//   });
//   const handleFileChange = (event) => {
//     // alert("ghjk");
//     console.log(event.target.files);
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//     if (uploadedFile) {
//       setMultipleImage([...multipleImage, uploadedFile]);
//     }
//   };
//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//     setShowImage(true);
//   };
//   function handleDelete(e, id) {
//     e.preventDefault();
//     // setFile(null);
//     // setImageUrl(null);
//     let data = multipleImage;
//     data.splice(id, 1);
//     setMultipleImage([...data]);
//     fileInputRef.current.value = "";
//   }
//   const getCategoryData = () => {
//     try {
//       axios
//         .get("/category")
//         .then((res) => {
//           console.log(res);
//           setStoreCategory(res.data.result);
//           toast.success("Data has been submitted sucessfully");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getCategoryData();
//   }, []);
//   const handleSubmit = () => {
//     let formData = new FormData();
//     formData.append("title", ChangeTitle);
//     formData.append("skillLevel", ChangeSkillLevel);
//     formData.append("category", ChangeCategory);
//     formData.append("description", ChangeDescription);
//     formData.append("coverImage", imageUrl);
//     try {
//       axios
//         .post("/course", formData)
//         .then((res) => {
//           console.log(res);
//           if (res.status === 200) {
//             setChangeTitle("");
//             setChangeSkillLevel("");
//             setChangeDescription("");
//             setChangeCategory("");
//             setImageUrl("");
//             setMultipleImage([]);
//             toast.success("Data has been submitted sucessfully");
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleTitle = (e) => {
//     console.log(e);
//   };
//   return (
//     <DataLayout
//       title="Add course"
//       showFilter={true}
//       showEdit={true}
//       showAdd={true}
//       addItemLink="/course/add"
//       viewAllLink="/course"
//     >
//       <ToastContainer autoClose={1000} />
//       <div className="bg-white p-8 rounded ">
//         <div className="flex flex-col gap-6">
//           <div className="flex w-full gap-12">
//             <div className="flex flex-col items-start w-1/2 gap-2">
//               <span>Title</span>
//               <input
//                 type="text"
//                 value={ChangeTitle}
//                 onChange={(e) => setChangeTitle(e.target.value)}
//                 placeholder="Enter title here!"
//                 className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
//               />
//             </div>
//             <div className="flex flex-col items-start w-1/2 gap-2">
//               <span>Skill Level</span>
//               <input
//                 type="text"
//                 value={ChangeSkillLevel}
//                 onChange={(e) => setChangeSkillLevel(e.target.value)}
//                 // disabled
//                 placeholder="Enter skill level"
//                 className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
//               />
//             </div>
//           </div>
//           <div className="flex w-full gap-12">
//             <div className="flex flex-col items-start w-1/2 gap-2">
//               <span>category</span>
//               <select
//                 type="text"
//                 value={ChangeCategory}
//                 onChange={(e) => setChangeCategory(e.target.value)}
//                 placeholder="Address"
//                 className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
//               >
//                 <option value="" id="0">
//                   Select category
//                 </option>
//                 {opti.map((val, i) => {
//                   console.log(val);
//                   return (
//                     <>
//                       <option value={val.id}>{val.value}</option>
//                     </>
//                   );
//                 })}
//               </select>
//             </div>
//             <div className="flex flex-col items-start w-1/2 gap-2">
//               <span>Description</span>
//               <textarea
//                 type="text"
//                 value={ChangeDescription}
//                 onChange={(e) => setChangeDescription(e.target.value)}
//                 placeholder="Description"
//                 className="w-full p-3 resize-none outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
//               ></textarea>
//             </div>
//           </div>
//           {/* Row  End */}{" "}
//           <div className="flex gap-4 text-left w-full">
//             <div className=" ">
//               <div className="mb-2">
//                 {" "}
//                 <label>Cover Image </label>
//               </div>
//               <div className="">
//                 {" "}
//                 <UploadImage
//                   placeholder="Cover image"
//                   imageUrl={imageUrl}
//                   setImageUrl={setImageUrl}
//                 />
//               </div>
//             </div>
//             <div className=" h-64 ">
//               <div className="mb-2">
//                 {" "}
//                 <label>Upload Gallery Image </label>
//               </div>
//               <div className="">
//                 <input
//                   type="file"
//                   className="hidden"
//                   ref={fileInputRef}
//                   accept="image/*"
//                   onChange={handleFileChange}
//                 />
//               </div>
//               <div
//                 className={`border border-[#b2b2b2]   h-52 overflow-clip ${
//                   showImage ? "flex gap-4" : ""
//                 }   items-start justify-center
//                p-2 border-dashed   rounded-lg`}
//               >
//                 <div
//                   className={`${
//                     multipleImage.length > 0 ? "bg-gray-200" : ""
//                   } w-60 h-32   flex items-center  justify-center flex-col mt-1`}
//                 >
//                   {" "}
//                   <div
//                     onClick={handleButtonClick}
//                     className="flex items-center justify-center h-20"
//                   >
//                     <BiUpload
//                       className="w-9  h-9 p-1.5 text-white bg-blue-600 cursor-pointer
//                            rounded-full flex items-center justify-center"
//                     />
//                   </div>
//                   {
//                     <div className="text-center capitalize font-semibold text-gray-700">
//                       {multipleImage.length === 0
//                         ? `Upload gallery Image Here`
//                         : `Add More Image`}
//                     </div>
//                   }
//                 </div>
//                 <div className="grid grid-cols-3  h-48 overflow-y-auto   p-1  gap-3 jutify-center  ">
//                   {multipleImage.length > 0 &&
//                     multipleImage.map((val, i) => {
//                       return (
//                         <div
//                           key={i}
//                           className=" flex flex-col  justify-enter items-center  "
//                         >
//                           <div className="relative  border border-red-900  p-0.5">
//                             <img
//                               src={URL.createObjectURL(val)}
//                               alt="Loading"
//                               className=" w-80 h-32 object-cover"
//                             />

//                             <span
//                               onClick={(e) => handleDelete(e, i)}
//                               className="text-red-500  text-2xl cursor-pointer absolute top-4 right-4"
//                             >
//                               <AiFillDelete />
//                             </span>
//                           </div>
//                         </div>
//                       );
//                     })}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-4 w-full" onClick={() => handleSubmit()}>
//             <Button variant="contained" color="primary" size="sm">
//               Save
//             </Button>
//             <Button variant="contained" color="danger" size="sm">
//               Cancel
//             </Button>
//           </div>
//         </div>
//       </div>
//     </DataLayout>
//   );
// };

// export default AddCourse;
