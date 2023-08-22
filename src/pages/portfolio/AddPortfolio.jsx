import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
import UploadImage from "components/ui/UploadImage";
import React, { useState, useRef, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
// import img from "../../assets/brandings/Logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../hoc/axios";
const AddPortfolio = () => {
  document.title = "SA - Inventory";
  //   const Category = [
  //     { value: "one", id: "1" },
  //     { value: "two", id: "2" },
  //   ];
  const [storeCategory, setStoreCategory] = useState([]);
  const [storeTools, setStoreTools] = useState([]);
  const [ChangeTitle, setChangeTitle] = useState("");
  const [ChangeDate, setChangeDate] = useState("");
  const [ChangeTools, setChangeTools] = useState("");
  const [ChangeCategory, setChangeCategory] = useState("");
  const [ChangeChallange, setChangeChallange] = useState("");
  const [ChangeSolution, setChangeSolution] = useState("");
  const fileInputRef = useRef(null);
  const [multipleImage, setMultipleImage] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(false);
  //for options in status only change  state name
  const opti = [];
  storeCategory.map((val, i) => {
    let stats = {
      value: val.title,
      id: val.id,
    };
    return opti.push(stats);
  });
  const tool = [];
  storeTools.map((val, i) => {
    let stats = {
      value: val.title,
      id: val.id,
    };
    return tool.push(stats);
  });
  const handleFileChange = (event) => {
    // alert("ghjk");
    console.log(event.target.files);
    const uploadedFile = event.target.files[0];
    // setFile(uploadedFile);
    if (uploadedFile) {
      setMultipleImage([...multipleImage, uploadedFile]);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
    setShowImage(true);
  };
  function handleDelete(e, id) {
    e.preventDefault();
    // setFile(null);
    // setImageUrl(null);
    let data = multipleImage;
    data.splice(id, 1);
    setMultipleImage([...data]);
    fileInputRef.current.value = "";
  }
  const getCategoryData = () => {
    try {
      axios
        .get("/category")
        .then((res) => {
          console.log(res);
          setStoreCategory(res.data.result);
          // toast.success("Data has been submitted sucessfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getToolsData = () => {
    try {
      axios
        .get("/tools")
        .then((res) => {
          console.log(res);
          setStoreTools(res.data.result);
          // toast.success("Data has been submitted sucessfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToolsData();
    getCategoryData();
  }, []);
  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("title", ChangeTitle);
    formData.append("tools", JSON.stringify([ChangeTools]));
    formData.append("date", ChangeDate);
    formData.append("category", ChangeCategory);
    formData.append("challange", ChangeChallange);
    formData.append("solution", ChangeSolution);
    formData.append("coverImage", imageUrl);
    multipleImage.map((val) => {
     return  formData.append("image", val);
    });
    try {
      axios
        .post("/portfolio", formData)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success("Data has been submitted sucessfully");
            setChangeTitle("");
            setChangeTools("");
            setChangeDate("");
            setChangeCategory("");
            setChangeChallange("");
            setChangeSolution("");
            setImageUrl("");
            setMultipleImage([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // const handleTitle = (e) => {
  //   console.log(e);
  // };
  return (
    <DataLayout
      title="Add Portfolio"
      showFilter={true}
      showViewAll={true}
      showEdit={false}
      showAdd={false}
      addItemLink="/portfolio/add"
      viewAllLink="/portfolio"
    >
      <ToastContainer autoClose={1000} />
      <div className="bg-white p-8 rounded ">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-start gap-2">
            <span>Title</span>
            <input
              type="text"
              value={ChangeTitle}
              onChange={(e) => setChangeTitle(e.target.value)}
              placeholder="Enter title here!"
              className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <span>Tools</span>
            <select
              type="text"
              value={ChangeTools}
              onChange={(e) => setChangeTools(e.target.value)}
              placeholder="Address"
              className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
            >
              <option value="" id="0">
                Select tools
              </option>
              {tool.map((vals, i) => {
                console.log(vals);
                return (
                  <>
                    <option value={vals.id}>{vals.value}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span>category</span>
            <select
              type="text"
              value={ChangeCategory}
              onChange={(e) => setChangeCategory(e.target.value)}
              placeholder="Address"
              className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
            >
              <option value="" id="0">
                Select category
              </option>
              {opti.map((val, i) => {
                console.log(val);
                return (
                  <>
                    <option value={val.id}>{val.value}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span>Challange</span>
            <textarea
              type="text"
              value={ChangeChallange}
              onChange={(e) => setChangeChallange(e.target.value)}
              placeholder="Challange"
              className="w-full p-3 resize-none outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
            ></textarea>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span>Solution</span>
            <textarea
              type="text"
              value={ChangeSolution}
              onChange={(e) => setChangeSolution(e.target.value)}
              placeholder="Description"
              className="w-full p-3 resize-none outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
            ></textarea>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span>Date</span>
            <input
              type="date"
              value={ChangeDate}
              onChange={(e) => setChangeDate(e.target.value)}
              // disabled
              // placeholder="2023-05-30 19:49:29"
              className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
            />
          </div>

          {/* <div className="flex flex-col items-start gap-2">
            <span>Challange</span>
            <textarea
              type="text"
              value={ChangeChallange}
              onChange={(e) => setChangeChallange(e.target.value)}
              placeholder="Challange"
              className="w-full p-3 resize-none outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
            ></textarea>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span>Solution</span>
            <textarea
              type="text"
              value={ChangeSolution}
              onChange={(e) => setChangeSolution(e.target.value)}
              placeholder="Description"
              className="w-full p-3 resize-none outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
            ></textarea>
          </div> */}
        </div>

        <div className="flex gap-32 text-left w-full my-5">
          <div className=" ">
            <div className="mb-2">
              {" "}
              <label>Cover Image </label>
            </div>
            <div className="">
              {" "}
              <UploadImage
                placeholder="Cover image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
              />
            </div>
          </div>
          <div className=" h-64 ">
            <div className="mb-2">
              {" "}
              <label>Upload Gallery Image </label>
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
              className={`border border-[#b2b2b2]   h-52 overflow-clip ${
                showImage ? "flex gap-4" : ""
              }   items-start justify-center 
               p-2 border-dashed   rounded-lg`}
            >
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
                    {multipleImage.length === 0
                      ? `Upload gallery Image Here`
                      : `Add More Image`}
                  </div>
                }
              </div>
              <div className="grid grid-cols-3  h-48 overflow-y-auto   p-1  gap-3 jutify-center  ">
                {multipleImage.length > 0 &&
                  multipleImage.map((val, i) => {
                    return (
                      <div
                        key={i}
                        className=" flex flex-col  justify-enter items-center  "
                      >
                        <div className="relative  border border-red-900  p-0.5">
                          <img
                            src={URL.createObjectURL(val)}
                            alt="Loading"
                            className=" w-80 h-32 object-cover"
                          />

                          <span
                            onClick={(e) => handleDelete(e, i)}
                            className="text-red-500  text-2xl cursor-pointer absolute top-4 right-4"
                          >
                            <AiFillDelete />
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full" onClick={() => handleSubmit()}>
          <Button variant="contained" color="primary" size="sm">
            Save
          </Button>
          <Button variant="contained" color="danger" size="sm">
            Cancel
          </Button>
        </div>
      </div>
    </DataLayout>
  );
};

export default AddPortfolio;
