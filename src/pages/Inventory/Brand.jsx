import DataLayout from "components/ui/DataLayout";
import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import BrandContextApi, {
  BrandContext,
} from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";
import Table from "components/page-components/inventory/brand/BrandTable";
import Loading from "components/Loading";
import AddBrand from "components/page-components/inventory/brand/AddBrand";

const schema = yup.object().shape({
  Brand_name: yup.string().required("cannot be empty"),
});

const Brand = () => {
  document.title = "SA - Brand";
  const [Image, setImage] = useState("");
  const [Brand_name, setBrand_name] = useState("");
  const [currentBrand, setCurrentBrand] = useState([]);

  return (
    <BrandContextApi>
      <BrandContext.Consumer>
        {({ postRequest, loading }) => {
          return (
            <DataLayout
              title="All Brands"
              showFilter={true}
              showEdit={false}
              showViewAll={false}
            >
              {/* Main Container For Brands */}

              <div className="max-w-screen-xl w-full mx-auto grid grid-cols-12 gap-12">
                <div className="col-span-6">
                  <Table setCurrentBrand={setCurrentBrand} />
                </div>
                <div className="col-span-6">
                  <AddBrand
                    setImage={setImage}
                    setBrand_name={setBrand_name}
                    Brand_name={Brand_name}
                  />
                </div>
              </div>
              {/* PopUp Box Modal */}
              {currentBrand.length > 0 && (
                <div className="fixed top-0 z-50 left-0 right-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-20">
                  <div className="p-8 bg-white relative rounded-md ">
                    <Formik
                      initialValues={{
                        Brand_name: currentBrand[0]?.Brand_name,
                        image: `http://localhost:4002/public/${currentBrand[0]?.image}`,
                        imagetwo: "",
                      }}
                      validationSchema={schema}
                      onSubmit={(values) => {
                        console.log(values);
                      }}
                    >
                      {({ handleSubmit, setFieldValue, values }) => {
                        return (
                          <Form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4 w-full">
                              <div>
                                <div className="flex flex-col gap-4">
                                  <label>Brand Name</label>
                                  <Field
                                    type="text"
                                    name="Brand_name"
                                    className="border border-gray-200 rounded p-2 outline-none"
                                  />
                                </div>
                                <ErrorMessage
                                  name="Brand_name"
                                  component={"div"}
                                />
                              </div>
                              <div className="flex items-center w-full justify-center flex-col gap-4">
                                <label htmlFor="Image">
                                  <img
                                    src={
                                      values.imagetwo
                                        ? URL.createObjectURL(values.imagetwo)
                                        : values.image
                                    }
                                    alt={values.Brand_name}
                                    className="w-20 h-20 cursor-pointer"
                                  />
                                </label>

                                {console.log(values)}
                                <input
                                  id="Image"
                                  className="hidden"
                                  onChange={(e) => {
                                    console.log(e.target.files, "target");
                                    if (e.target.files.length > 0) {
                                      setFieldValue(
                                        "imagetwo",
                                        e.target.files[0]
                                      );
                                    }
                                  }}
                                  type="file"
                                  name="image"
                                />
                                <button className="py-2 px-3 bg-blue-500 rounded text-white">
                                  Save
                                </button>
                                <ErrorMessage name="image" component={"div"} />
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>

                    <div
                      onClick={() => {
                        setCurrentBrand([]);
                      }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
                    >
                      <AiOutlineClose />
                    </div>
                  </div>
                </div>
              )}
              {/* Popup Modal Ends */}
              <ToastContainer />
            </DataLayout>
          );
        }}
      </BrandContext.Consumer>
    </BrandContextApi>
  );
};

export default Brand;
