import React, { useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

const UploadImage = ({ placeholder, imageUrl, setImageUrl }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setImageUrl(uploadedFile);
      setFile(uploadedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.target.files[0];
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
      className="border border-[#b2b2b2] w-64   h-52  overflow- flex  gap-5 items-center justify-center 
               p-2 border-dashed   rounded-lg"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div className="flex flex-col items-center gap-4  overflow-scroll p-1">
        {!imageUrl && (
          <div
            onClick={handleButtonClick}
            className="w-10 text-xl h-10 text-white bg-blue-600 cursor-pointer  rounded-full flex items-center justify-center"
          >
            <BiUpload />
          </div>
        )}
        {imageUrl && (
          <div className="relative w-">
            <img
              src={URL.createObjectURL(imageUrl)}
              alt=""
              className="w-full object-contain h-48"
            />
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
