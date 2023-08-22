import axios from "../../hoc/axios";
import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
// import UploadImage from "components/ui/UploadImage";
import React, { useState } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { BiUpload } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import img from "../../assets/brandings/Logo.png";
const AddCategory = () => {
  document.title = "SA - Inventory";
  const Category = [
    { value: "one", id: "1" },
    { value: "two", id: "2" },
  ];
  //   const [imageUrl, setImageUrl] = useState(null);
  // const fileInputRef = useRef(null);
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
  // const [multipleImage, setMultipleImage] = useState([]);
  const [Change, setChange] = useState("");
  // const handleFileChange = (event) => {
  //   const uploadedFile = event.target.files[0];
  //   // setFile(uploadedFile);
  //   if (uploadedFile) {
  //     setMultipleImage([...multipleImage, uploadedFile]);
  //   }
  // };
  // const handleButtonClick = () => {
  //   fileInputRef.current.click();
  // };
  // function handleDelete(e, id) {
  //   e.preventDefault();
  //   // setFile(null);
  //   // setImageUrl(null);
  //   let data = multipleImage;
  //   data.splice(id, 1);
  //   setMultipleImage([...data]);
  //   fileInputRef.current.value = "";
  // }
  const handleSubmit = (values) => {
    try {
      axios
        .post("/category", { title: values })
        .then((res) => {
          console.log(res);
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
      title="Category"
      showFilter={true}
      showEdit={false}
      showAdd={false}
      showViewAll={true}
      addItemLink="/category/add"
      viewAllLink="/category"
    >
      <ToastContainer autoClose={1000} />
      <div className="bg-white p-8 rounded ">
        <div className="flex flex-col gap-6">
          {/* Row Start */}

          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Title</span>
              <input
                type="text"
                value={Change}
                onChange={(e) => setChange(e.target.value)}
                placeholder="Enter  category title here!"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
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

export default AddCategory;
