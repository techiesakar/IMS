import { BrandContext } from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";
import { CategoryContext } from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import React, { useContext, useEffect, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { inventorySchema } from "components/schema/inventory/InventorySchema";
import { InventoryContext } from "hoc/ContextApi/InventoryContextAPI/InventoryContextAPI";
import { BiUpload } from "react-icons/bi";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AiOutlineDelete } from "react-icons/ai";

const Clothing = () => {
  const { allBrands } = useContext(BrandContext);
  const { allCategory } = useContext(CategoryContext);
  const [tableData, setTableData] = useState([]);
  let grandTotal = 0;

  const [isFreeSize, setisFreeSize] = useState(false);

  return (
    <InventoryContext.Consumer>
      {({ postRequest }) => {
        return (
          <>
            <Formik
              initialValues={{
                product_name: "",
                product_brand: "",
                product_category: "",
                product_quantity: "",
                color: "",
                uk: "",
                global: "",
                eu: "",
                waist: "",
                chest: "",
                freesize: false,
                priceperunit: "",
                image: "",
              }}
              validationSchema={inventorySchema}
              onSubmit={(values, { resetForm }) => {
                values.freesize = isFreeSize;
                setTableData((prevTableData) => [...prevTableData, values]);
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
                        <h1 className="text-left font-bold text-2xl">
                          Clothing
                        </h1>
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

                        <div className="flex gap-12 w-full">
                          <div className="flex items-start justify-between w-1/2 gap-2">
                            <label
                              htmlFor="freesize"
                              className=" cursor-pointer flex-col gap-2  items-center justify-center flex"
                            >
                              <span> Freesize:</span>
                              <Field
                                type="checkbox"
                                name="freesize"
                                checked={isFreeSize}
                                onChange={() => setisFreeSize(!isFreeSize)}
                              />
                            </label>

                            {!isFreeSize && (
                              <>
                                <label>
                                  UK SIZE:
                                  <Field
                                    type="text"
                                    name="uk"
                                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                                  />
                                </label>
                                <label>
                                  Global:
                                  <Field
                                    type="text"
                                    name="global"
                                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                                  />
                                </label>
                                <label>
                                  EU:
                                  <Field
                                    type="text"
                                    name="eu"
                                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                                  />
                                </label>
                                <label>
                                  Waist SIZE:
                                  <Field
                                    type="text"
                                    name="waist"
                                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                                  />
                                </label>
                                <label>
                                  Chest SIZE:
                                  <Field
                                    type="text"
                                    name="chest"
                                    className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
                                  />
                                </label>
                              </>
                            )}
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

                          <div className="flex flex-col items-start w-1/2 gap-2">
                            <span>Colors</span>
                            <Field
                              type="text"
                              name="color"
                              className="w-full p-3 outline-none border  focus:border-blue-500 border-gray-200 rounded-md transition-all duration-300"
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
                            Add To Cart
                          </button>
                        </div>
                        {/* Row Five End */}
                      </div>
                    </Form>
                  </div>
                );
              }}
            </Formik>

            {tableData.length > 0 && (
              <>
                {" "}
                <table className="w-full  text-left text-gray-800 bg-white">
                  <thead className="text-gray-900  ">
                    <tr className="border-b">
                      <th scope="col" className="px-6 py-4">
                        SN
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Brand
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Category
                      </th>

                      {isFreeSize ? (
                        <th scope="col" className="px-6 py-4">
                          Freesize
                        </th>
                      ) : (
                        <>
                          {tableData[0].uk && (
                            <th scope="col" className="px-6 py-4">
                              UK Size
                            </th>
                          )}
                          {tableData[0].global && (
                            <th scope="col" className="px-6 py-4">
                              Global Size
                            </th>
                          )}
                          {tableData[0].eu && (
                            <th scope="col" className="px-6 py-4">
                              EU Size
                            </th>
                          )}
                          {tableData[0].waist && (
                            <th scope="col" className="px-6 py-4">
                              Waist
                            </th>
                          )}
                          {tableData[0].chest && (
                            <th scope="col" className="px-6 py-4">
                              Chest
                            </th>
                          )}
                        </>
                      )}
                      <th scope="col" className="px-6 py-4">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Unit Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Total Price
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {tableData.map((item, index) => {
                      return (
                        <tr key={index} className="border-b bg-white">
                          <td className="px-6 py-4">{index + 1}</td>

                          <td className="px-6 py-4">{item.product_name}</td>
                          <td className="px-6 py-4">Brand</td>
                          <td className="px-6 py-4">Category</td>

                          {item.freesize ? (
                            <td className="px-6 py-4">{item.freesize}</td>
                          ) : (
                            <>
                              {item.uk && (
                                <td className="px-6 py-4">{item.uk}</td>
                              )}

                              {item.global && (
                                <td className="px-6 py-4">{item.global}</td>
                              )}
                              {item.eu && (
                                <td className="px-6 py-4">{item.eu}</td>
                              )}
                              {item.waist && (
                                <td className="px-6 py-4">{item.waist}</td>
                              )}
                              {item.chest && (
                                <td className="px-6 py-4">{item.chest}</td>
                              )}
                            </>
                          )}
                          <td className="px-6 py-4">{item.color}</td>
                          <td className="px-6 py-4">{item.product_quantity}</td>
                          <td className="px-6 py-4">{item.priceperunit}</td>
                          <td className="px-6 py-4">
                            {item.product_quantity * item.priceperunit}
                          </td>
                          <td className="hidden">
                            {
                              (grandTotal =
                                grandTotal +
                                item.product_quantity * item.priceperunit)
                            }
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="border-b pb-24 bg-white text-left pt-8 px-4 flex  flex-col flex-start justify-start gap-8 items-center">
                  <div className="flex gap-3 w-full">
                    <span className=" font-bold text-xl text-blue-600">
                      Grand Total :
                    </span>
                    <span className=" font-bold text-xl text-gray-600">
                      {grandTotal}
                    </span>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={() => {
                        postRequest(tableData);
                      }}
                      type="button"
                      className="bg-blue-600 w-fit px-4 rounded-md py-2  text-white hover:bg-blue-500 tranisiotn"
                    >
                      Add To Inventory
                    </button>
                  </div>
                </div>
                <div></div>
              </>
            )}
          </>
        );
      }}
    </InventoryContext.Consumer>
  );
};

export default Clothing;
