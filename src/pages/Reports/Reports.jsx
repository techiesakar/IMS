import UploadImage from "components/ui/UploadImage";
// import Forms from "pages/Forms";
import React from "react";

const Reports = () => {
  document.title = "SA - Reports";
  return (
    <div className="w-full h-full flex items-center justify-center">
      <UploadImage placeholder="Upload Image" />
    </div>
  );
};

export default Reports;
