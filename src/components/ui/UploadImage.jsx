import React, { useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

const UploadImage = ({ placeholder }) => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setImageUrl(URL.createObjectURL(uploadedFile));
  };

  const handleUpload = () => {};

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    setFile(uploadedFile);
    setImageUrl(URL.createObjectURL(uploadedFile));
  };

  function handleDelete(e) {
    e.preventDefault();
    setFile(null);
    setImageUrl(null);
    fileInputRef.current.value = "";
  }
  return (
    <div
      className="border-2 border-gray-300 p-2 rounded-lg w-64 h-36 flex flex-col items-center justify-center"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div className="flex flex-col items-center gap-4 ">
        {!imageUrl && (
          <div
            onClick={handleButtonClick}
            className="w-10 text-xl h-10 text-white bg-blue-600 cursor-pointer  rounded-full flex items-center justify-center"
          >
            <BiUpload />
          </div>
        )}
        {imageUrl && (
          <div className="relative w-36">
            <img src={imageUrl} alt="" className="w-full" />
            <span
              onClick={handleDelete}
              className="text-red-500 text-2xl cursor-pointer absolute top-4 right-4"
            >
              <AiFillDelete />
            </span>
          </div>
        )}
        {!imageUrl && <>{placeholder}</>}
      </div>
    </div>
  );
};

export default UploadImage;
