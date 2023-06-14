import { BrandContext } from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";
import { CategoryContext } from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import React, { useContext } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { inventorySchema } from "components/schema/inventory/InventorySchema";
import { InventoryContext } from "hoc/ContextApi/InventoryContextAPI/InventoryContextAPI";
import { BiUpload } from "react-icons/bi";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AiOutlineDelete } from "react-icons/ai";

const ProductTypeOthers = () => {
  const { allBrands } = useContext(BrandContext);
  const { allCategory } = useContext(CategoryContext);

  return (
    <InventoryContext.Consumer>
      {({ postRequest }) => {
        return (
          <Formik
            initialValues={{
              product_name: "",
              product_brand: "",
              product_category: "",
              product_quantity: "",
              priceperunit: "",
              image: "",
              // price: "",
              // desc: "",

              // weight: "",
            }}
            validationSchema={inventorySchema}
            onSubmit={(values, { resetForm }) => {
              console.log("hello");
              console.log(values);
            }}
          >
            {({ values, handleSubmit, setFieldValue, handleChange }) => {
              return (
                <div>
                  <Form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded "
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex w-full gap-12">
                        <div className="flex flex-col items-start w-1/2 gap-2">
                          <span>Product Name</span>
                          <Field
                            type="text"
                            name="product_name"
                            placeholder="Product Name"
                            className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                          />
                          <ErrorMessage
                            name="product_name"
                            component="div"
                            className="text-red-400 text-xs "
                          />
                        </div>
                      </div>
                      {/* Row One End */}
                      <div className="flex gap-12 w-full">
                        <div className="flex flex-col items-start w-1/2 gap-2">
                          <span>Brand</span>
                          <Field
                            as="select"
                            id=""
                            name="product_brand"
                            className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                          >
                            <option value="">Select Brand</option>
                            {allBrands.map((brand, index) => (
                              <option
                                key={index}
                                className="capitalize px-2"
                                value={brand.id}
                              >
                                {brand.Brand_name}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="product_brand"
                            component="div"
                            className="text-red-400 text-xs "
                          />
                        </div>
                        <div className="flex flex-col items-start w-1/2 gap-2">
                          <span>Categories</span>
                          <Field
                            as="select"
                            name="product_category"
                            className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                          >
                            <option value="">Select Category</option>

                            {allCategory.map((item, index) => (
                              <option
                                key={index}
                                className="capitalize"
                                value={item.id}
                              >
                                {item.Category_name}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="product_category"
                            component="div"
                            className="text-red-400 text-xs "
                          />
                        </div>
                      </div>
                      {/* Row Two End */}
                      <div className="flex gap-12 w-full">
                        <div className="flex flex-col items-start w-1/2 gap-2">
                          <span>Quantity *</span>
                          <Field
                            type="number"
                            name="product_quantity"
                            className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                          />

                          <ErrorMessage
                            name="product_quantity"
                            component="div"
                            className="text-red-400 text-xs "
                          />
                        </div>

                        <div className="flex flex-col items-start w-1/2 gap-2">
                          <span>Price Per Qty*</span>
                          <Field
                            type="number"
                            name="priceperunit"
                            className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                          />
                          <ErrorMessage
                            name="priceperunit"
                            component="div"
                            className="text-red-400 text-xs "
                          />
                        </div>
                      </div>
                      {/* Row Three End */}
                      <div className="grid grid-cols-12  gap-12 w-full">
                        {/* image here */}

                        <div className="col-span-3">
                          <div className="border relative  border-gray-300 p-2 rounded-lg h-40 flex flex-col items-center justify-center w-full">
                            {values.image.length <= 0 && (
                              <label
                                htmlFor="imageInput"
                                className="w-10 text-xl h-10 text-white bg-blue-600 cursor-pointer  rounded-full flex items-center justify-center"
                              >
                                <BiUpload />
                              </label>
                            )}

                            {values.image ? (
                              <div className=" h-40 p-3">
                                <img
                                  src={URL.createObjectURL(values.image)}
                                  alt={values.Brand_name}
                                  className="h-full"
                                />

                                <span
                                  onClick={(e) => {
                                    e.target.files = null;
                                    e.target.value = "";
                                    setFieldValue("image", "");
                                  }}
                                  className="text-gray-600 hover:text-gray-700 transition text-lg cursor-pointer absolute top-8 right-8"
                                >
                                  <AiOutlineDelete />
                                </span>
                              </div>
                            ) : null}

                            <input
                              id="imageInput"
                              type="file"
                              name="image"
                              onChange={(e) => {
                                const data = e.target.files[0];
                                e.target.value = "";
                                handleChange(e);
                                setFieldValue("image", data);
                              }}
                              className="border hidden  border-gray-200 rounded p-2 outline-none"
                            />
                          </div>

                          <ErrorMessage
                            name="image"
                            component="div"
                            className="text-red-400 text-xs "
                          />
                        </div>

                        {/* Image ends */}
                        <div className="flex col-span-9  flex-col items-start gap-2">
                          <span>Description</span>
                          <ReactQuill
                            theme="snow"
                            value={values.description}
                            className="w-full h-full"
                            onChange={(e) => {
                              setFieldValue("description", e);
                            }}
                          />
                        </div>
                      </div>

                      {/* Row Four End */}
                      <div className="flex gap-4 w-full">
                        <button
                          type="submit"
                          className="py-2 px-3 bg-blue-500 rounded text-white"
                        >
                          Add
                        </button>
                      </div>
                      {/* Row Five End */}
                    </div>
                  </Form>
                </div>
              );
            }}
          </Formik>
        );
      }}
    </InventoryContext.Consumer>
  );
};

export default ProductTypeOthers;
