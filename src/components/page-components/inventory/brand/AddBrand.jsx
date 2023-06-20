import React, { useState } from "react";
import { BrandContext } from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";

import { Formik, Form, ErrorMessage, Field } from "formik";
import { brandSchema } from "components/schema/brand/BrandSchema";
import Loading from "components/Loading";
import { BiUpload } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { ImSpinner8 } from "react-icons/im";
const AddBrand = () => {
  const [loading, setLoading] = useState(false);
  return (
    <BrandContext.Consumer>
      {({ postRequest }) => {
        return (
          <>
            {/* Main Submit Field */}
            <Formik
              initialValues={{
                Brand_name: "",
                image: "",
              }}
              validationSchema={brandSchema}
              onSubmit={(values, { resetForm }) => {
                postRequest(
                  values.Brand_name,
                  values.image,
                  resetForm,
                  setLoading
                );
              }}
            >
              {({ values, handleSubmit, setFieldValue, handleChange }) => {
                return (
                  <Form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <Field
                      type="text"
                      name="Brand_name"
                      className="border border-gray-200 rounded p-2 outline-none "
                    />
                    <ErrorMessage
                      name="Brand_name"
                      component="div"
                      className="text-red-400 text-xs "
                    />
                    <div className="border relative border-gray-300 p-2 rounded-lg  h-36 flex flex-col items-center justify-center w-full">
                      {values.image.length <= 0 && (
                        <label
                          htmlFor="imageInput"
                          className="w-10 text-xl h-10 text-white bg-blue-600 cursor-pointer  rounded-full flex items-center justify-center"
                        >
                          <BiUpload />
                        </label>
                      )}

                      {values.image ? (
                        <div className=" w-36 p-3">
                          <img
                            src={URL.createObjectURL(values.image)}
                            alt={values.Brand_name}
                            className="w-20"
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

                    <button
                      type="submit"
                      className="py-2 px-3 bg-blue-500 rounded text-white"
                    >
                      {`${
                        loading ? (
                          <>
                            Loading <ImSpinner8 className="animate-spin" />
                          </>
                        ) : (
                          "Add"
                        )
                      }`}
                    </button>
                  </Form>
                );
              }}
            </Formik>
            {/* Pop up Edit Field Start */}
          </>
        );
      }}
    </BrandContext.Consumer>
  );
};

export default AddBrand;
