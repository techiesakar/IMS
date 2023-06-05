import Button from "components/Button";
import DataLayout from "components/ui/DataLayout";
import UploadImage from "components/ui/UploadImage";
import React from "react";
import categories from "data/categories.json";

const AddInventory = () => {
  document.title = "SA - Inventory";
  return (
    <DataLayout
      title="Add Product"
      showFilter={false}
      showEdit={false}
      showAdd={false}
      showViewAll={true}
      addItemLink={null}
      viewAllLink="/inventory"
    >
      <form className="bg-white p-8 rounded ">
        <div className="flex flex-col gap-6">
          <div className="flex w-full gap-12">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Product ID</span>
              <input
                type="text"
                placeholder="CX100"
                disabled
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Product Name</span>
              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div>
          {/* Row One End */}
          <div className="flex gap-12 w-full">
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Brand</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                {categories.brands.map((brand) => (
                  <option className="capitalize" value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Categories</span>
              <select
                name=""
                id=""
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              >
                {categories.categories.map((category) => (
                  <option className="capitalize" value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Row Two End */}
          <div className="flex gap-12 w-full">
            {/* Weight */}
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Weight</span>
              <input
                type="text"
                placeholder="12"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Quantity</span>
              <input
                type="text"
                placeholder="12"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Unit Price</span>
              <input
                type="text"
                placeholder="Rs. 2999"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Total Price</span>
              <input
                type="text"
                placeholder="Rs. 2999"
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
              />
            </div>
          </div>
          {/* Row Three End */}
          <div className="flex gap-12 w-full">
            <div className="flex  items-start w-1/2 gap-2">
              <UploadImage placeholder="Upload Image 1" />
              <UploadImage placeholder="Upload Image 2" />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-2">
              <span>Description</span>
              <textarea
                className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                rows={6}
              ></textarea>
            </div>
          </div>
          {/* Row Four End */}
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

export default AddInventory;
