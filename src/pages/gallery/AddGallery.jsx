import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
import UploadImage from "components/ui/UploadImage";
import React, { useState, useRef, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import img from "../../assets/brandings/Logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../hoc/axios";
const AddGallery = () => {
  document.title = "SA - Inventory";
  //   const Category = [
  //     { value: "one", id: "1" },
  //     { value: "two", id: "2" },
  //   ];
  const [storeCategory, setStoreCategory] = useState([]);
  const [ChangeTitle, setChangeTitle] = useState("");
  const [ChangeDate, setChangeDate] = useState("");
  const [ChangeCategory, setChangeCategory] = useState("");
  const [ChangeDescription, setChangeDescription] = useState("");
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
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
  const handleFileChange = (event) => {
    // alert("ghjk");
    console.log(event.target.files);
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
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
  useEffect(() => {
    getCategoryData();
  }, []);
  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("title", ChangeTitle);
    formData.append("date", ChangeDate);
    formData.append("category", ChangeCategory);
    formData.append("description", ChangeDescription);
    formData.append("coverImage", imageUrl);
    multipleImage.map((val, i) => {
      formData.append("image", val);
    });
    try {
      axios
        .post("/gallery", formData)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setChangeTitle("");
            setChangeDate("");
            setChangeDescription("");
            setChangeCategory("");
            setImageUrl("");
            setMultipleImage([]);
            toast.success("Data has been submitted sucessfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleTitle = (e) => {
    console.log(e);
  };
  return (
    <DataLayout
      title="Add Gallery"
      showFilter={true}
      //   showEdit={true}
      //   showAdd={true}
      showViewAll={true}
      addItemLink="/gallery/add"
      viewAllLink="/gallery"
    >
      <ToastContainer autoClose={1000} />
      <div className="bg-white p-8 rounded ">
        <div className="flex flex-col gap-6">
          {/* Row Start */}
          {/* <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Title</span>
              <input
                type="text"
                placeholder="CX100"
                disabled
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Date</span>
              <input
                type="text"
                disabled
                placeholder="2023-05-30 19:49:29"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div> */}
          {/* Row  End */}
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Title</span>
              <input
                type="text"
                value={ChangeTitle}
                onChange={(e) => setChangeTitle(e.target.value)}
                placeholder="Enter title here!"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
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
          </div>
          {/* Row  End */}
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
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
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Description</span>
              <textarea
                type="text"
                value={ChangeDescription}
                onChange={(e) => setChangeDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-3 resize-none outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              ></textarea>
            </div>
          </div>
          {/* Row  End */}{" "}
          <div className="flex gap-4 text-left w-full">
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
                          {/* {showImage && (
                          <img
                            src={val.image}
                            alt=""
                            className="h-40 w-80  object-contain"
                          />
                        )} */}
                          {/* {/* {!imageUrl && (
                        <div
                          onClick={handleButtonClick}
                          className="w-10 text-xl h-10 text-white bg-blue-600 cursor-pointer 
                           rounded-full flex items-center justify-center"
                        >
                          <BiUpload />
                        </div>
                      )} */}
                          {/* {imageUrl && ( */}
                          <div className="relative  border border-red-900  p-0.5">
                            <img
                              src={URL.createObjectURL(val)}
                              // setImageUrl(URL.createObjectURL(uploadedFile));

                              alt="Loading"
                              className=" w-80 h-32 object-cover"
                              //   onClick={handleButtonClick}
                            />

                            <span
                              onClick={(e) => handleDelete(e, i)}
                              className="text-red-500  text-2xl cursor-pointer absolute top-4 right-4"
                            >
                              <AiFillDelete />
                            </span>
                          </div>
                          {/* )} */}
                          {/* {imageUrl} */}
                          {/* {!imageUrl && (
                          <div className="">{"upload Image for gallery"}</div>
                        )}{" "} */}
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
          {/* Row Five End */}
        </div>
      </div>
    </DataLayout>
  );
};

export default AddGallery;
