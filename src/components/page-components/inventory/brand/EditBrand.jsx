import React, { useState } from "react";
import { BrandContext } from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";

import { Formik, Form, ErrorMessage, Field } from "formik";
import { brandSchema } from "components/schema/brand/BrandSchema";

import Loading from "components/Loading";
import { AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

const EditBrand = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <BrandContext.Consumer>
        {/* values from context */}
        {({ patchRequest, currentBrand, setCurrentBrand }) => {
          return (
            <div className="bg-gray-900/60 flex justify-center fixed items-center h-screen w-screen top-0 left-0 right-0 bottom-0">
              <Formik
                // Initializing default values for formik
                initialValues={{
                  Brand_name: currentBrand[0].Brand_name,
                  image: `http://localhost:4002/public/${currentBrand[0].image}`,
                  tempImage: "",
                }}
                // Schema Validation using yup
                validationSchema={brandSchema}
                onSubmit={(values, { resetForm }) => {
                  patchRequest(
                    values.Brand_name,
                    values.image,
                    resetForm,
                    setLoading
                  );
                }}
              >
                {/* Formik data */}
                {({ values, handleSubmit, setFieldValue }) => {
                  console.log(values);
                  return (
                    <Form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-2"
                    >
                      {/* Brand Name input Field */}
                      <Field
                        type="text"
                        name="Brand_name"
                        value={values.Brand_name}
                        className="border border-gray-200 rounded p-2 outline-none "
                      />
                      <ErrorMessage
                        name="Brand_name"
                        component="div"
                        className="text-red-600"
                      />

                      <div className="w-full h-32 p-3 rounded-md bg-white flex justify-center items-center">
                        {/* If Image field is empty - we need to show upload section*/}
                        {values.image.length <= 0 && !values.tempImage && (
                          <div className="flex flex-col items-center gap-4">
                            <label
                              htmlFor="tempImage"
                              className="w-10 text-xl h-10 text-white bg-blue-600 cursor-pointer  rounded-full flex items-center justify-center"
                            >
                              <BiUpload />
                            </label>
                            <p>Upload Brand Image</p>

                            <input
                              id="tempImage"
                              type="file"
                              onChange={(e) => {
                                const data = e.target.files[0];
                                e.target.value = "";
                                setFieldValue("tempImage", data);
                              }}
                              className="border hidden  border-gray-200 rounded p-2 outline-none"
                            />
                          </div>
                        )}

                        {/* If Image Uploaded - tempImage  */}
                        {values.tempImage ? (
                          <div className="relative w-full p-3 flex items-center justify-center">
                            <img
                              src={URL.createObjectURL(values.tempImage)}
                              alt={values.Brand_name}
                              className="w-20"
                            />
                            <span
                              onClick={(e) => {
                                e.target.files = null;
                                e.target.value = "";
                                setFieldValue("tempImage", "");
                              }}
                              className="text-gray-600 hover:text-gray-700 transition text-lg cursor-pointer absolute top-2 right-2"
                            >
                              <AiOutlineDelete />
                            </span>
                          </div>
                        ) : (
                          // If default image presents
                          values.image && (
                            <div className="relative w-full p-3 flex items-center justify-center">
                              <img
                                src={values.image}
                                alt={values.Brand_name}
                                className="w-20"
                              />

                              <span
                                onClick={(e) => {
                                  e.target.files = null;
                                  e.target.value = "";
                                  setFieldValue("image", "");
                                }}
                                className="text-gray-600 hover:text-gray-700 transition text-lg cursor-pointer absolute top-2 right-2"
                              >
                                <AiOutlineDelete />
                              </span>
                            </div>
                          )
                        )}
                      </div>

                      {loading ? (
                        <Loading />
                      ) : (
                        <button
                          type="submit"
                          className="py-2 px-3 bg-blue-500 rounded text-white"
                          onClick={() => {
                            setFieldValue("image", values.tempImage);
                          }}
                        >
                          Add
                        </button>
                      )}
                      <div className="w-full flex items-center justify-center">
                        <button
                          onClick={() => {
                            setCurrentBrand([]);
                          }}
                          type="button"
                          className="w-10 h-10 hover:bg-gray-900/60 transition bg-gray-900/40 text-white rounded-full justify-center items-center flex"
                        >
                          <AiOutlineClose />
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          );
        }}
      </BrandContext.Consumer>
    </>
  );
};

export default EditBrand;
