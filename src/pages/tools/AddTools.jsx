import axios from "../../hoc/axios";
import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
import UploadImage from "components/ui/UploadImage";
import React, { useState, useRef, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../assets/brandings/Logo.png";
const AddTools = () => {
  document.title = "SA - Inventory";
  const Category = [
    { value: "one", id: "1" },
    { value: "two", id: "2" },
  ];
  //   const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);
  //   const [file, setFile] = useState(null);
  //for options in status only change  state name
  const opti = [];
  Category.map((val, i) => {
    let stats = {
      value: val.value,
      id: val.id,
    };
    return opti.push(stats);
  });
  const [multipleImage, setMultipleImage] = useState([]);
  const [Change, setChange] = useState("");
  const [showError, setShowError] = useState(false);
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    // setFile(uploadedFile);
    if (uploadedFile) {
      setMultipleImage([...multipleImage, uploadedFile]);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
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
  const handleSubmit = (values) => {
    setShowError(true);
    try {
      if (Change.length === 0) {
        throw "error";
      }

      axios
        .post("/tools", { title: values })
        .then((res) => {
          console.log(res);
          setShowError(false);
          setChange("");
          toast.success("Data has been submitted sucessfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DataLayout
      title="Add Category"
      showFilter={true}
      //   showEdit={true}
      //   showAdd={true}
      showViewAll={true}
      addItemLink="/tools/add"
      viewAllLink="/tools"
    >
      <ToastContainer autoClose={1000} />
      <div className="bg-white p-8 rounded ">
        <div className="flex flex-col gap-4">
          {/* Row Start */}

          <div className="flex w-full ">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Title</span>
              <input
                type="text"
                value={Change}
                required
                onChange={(e) => {
                  setChange(e.target.value);
                  setShowError(true);
                }}
                placeholder="Enter title here!"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div>
          <div className="text-left">
            {Change.length === 0 && showError ? (
              <div className="text-red-500 text-sm">Required</div>
            ) : null}
          </div>
          <div
            className="flex gap-4 w-full"
            onClick={() => handleSubmit(Change)}
          >
            <Button variant="contained" color="primary" size="sm" type="submit">
              Submit
            </Button>
            {/* <Button variant="contained" color="danger" size="sm">
              Cancel
            </Button> */}
          </div>
        </div>
      </div>
    </DataLayout>
  );
};

export default AddTools;
