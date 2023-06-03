import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
import UploadImage from "components/ui/UploadImage";
import React from "react";

const AddSupplier = () => {
  document.title = "SA - Inventory";
  return (
    <DataLayout
      title="Add Supplier"
      hideFilter={true}
      hideEdit={true}
      hideAdd={true}
      addItemLink="/supplier/add"
      viewAllLink="/suppliers"
    >
      <form className="bg-white p-8 rounded ">
        <div className="flex flex-col gap-6">
          {/* Row Start */}
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Supplier ID</span>
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
          </div>
          {/* Row  End */}
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Name</span>
              <input
                type="text"
                placeholder="Supplier Name"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Contact</span>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div>
          {/* Row  End */}
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>PAN or VAT Number</span>
              <input
                type="text"
                placeholder="PAN or VAT Number"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Address</span>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div>
          {/* Row  End */}{" "}
          <div className="flex gap-4 w-full">
            <UploadImage placeholder="Registration Certificate" />
            <UploadImage placeholder="PAN/VAT" />
          </div>
          <div className="flex gap-4 w-full">
            <Button variant="contained" color="primary" size="sm">
              Save
            </Button>
            <Button variant="contained" color="danger" size="sm">
              Cancel
            </Button>
          </div>
          {/* Row Five End */}
        </div>
      </form>
    </DataLayout>
  );
};

export default AddSupplier;
