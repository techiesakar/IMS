import Loading from "components/Loading";
import React from "react";
import { BrandContext } from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";

const AddBrand = ({ setImage, setBrand_name, Brand_name }) => {
  return (
    <BrandContext.Consumer>
      {({ loading, postRequest }) => {
        return (
          <div className="p-4 rounded bg-white w-72 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Brand"
              onChange={(e) => {
                setBrand_name(e.target.value);
              }}
              className="py-2 px-3 outline-none border-gray-300 focus:border-blue-500 border-2 rounded"
            />

            <input
              type="file"
              placeholder="files"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              className="py-2 px-3 outline-none border-gray-300 focus:border-blue-500 border-2 rounded "
            />

            {loading ? (
              <Loading />
            ) : (
              <button
                onClick={() => {
                  postRequest(Brand_name, Image);
                }}
                className="bg-blue-600 py-2 px-4 text-white rounded-md"
              >
                Submit
              </button>
            )}
          </div>
        );
      }}
    </BrandContext.Consumer>
  );
};

export default AddBrand;
