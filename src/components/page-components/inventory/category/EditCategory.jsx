import { categorySchema } from "components/schema/caetgory/CategorySchema";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { CategoryContext } from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ImSpinner8 } from "react-icons/im";

const EditCategory = () => {
  const [editLoading, setEditLoading] = useState(false);
  return (
    <CategoryContext.Consumer>
      {({ patchRequest, currentCategory, setCurrentCategory }) => {
        return (
          <div className="bg-gray-900/60 flex justify-center fixed items-center h-screen w-screen z-50 top-0 left-0 right-0 bottom-0">
            <Formik
              initialValues={{
                Category_name: currentCategory[0].Category_name,
              }}
              validationSchema={categorySchema}
              onSubmit={(values, { resetForm }) => {
                patchRequest(
                  values.Category_name,
                  currentCategory[0].id,
                  resetForm,
                  setEditLoading
                );
              }}
            >
              {({ handleSubmit }) => {
                return (
                  <Form
                    onSubmit={handleSubmit}
                    className=" bg-white rounded flex flex-col gap-6 py-12 px-8 relative"
                  >
                    <div className="flex flex-col items-start gap-2">
                      <span className="font-semibold text-gray-900 text-lg">
                        Edit Category
                      </span>
                      <span className="font-light text-gray-600 text-sm">
                        Make changes to the category here. Click save when
                        you're done.
                      </span>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4  ">
                        <div className="flex gap-4 items-center">
                          <label
                            htmlFor="Category_name"
                            className="text-sm font-medium "
                          >
                            Category
                          </label>
                          <Field
                            type="text"
                            name="Category_name"
                            className="px-3 py-2 text-sm outline-none focus:border-gray-600 transition-all font-medium w-full rounded-md border border-gray-300"
                          />
                        </div>

                        {/* <ErrorMessage
                      name="Category_name"
                      component="div"
                      className="text-red-400 text-xs "
                    /> */}
                      </div>

                      <div className="flex justify-end">
                        <button
                          type={`${editLoading ? "button" : "submit"}`}
                          className="py-2  px-4 inline-block items-center justify-center rounded-md text-sm font-medium bg-gray-900 hover:bg-gray-800 transition text-white"
                        >
                          {editLoading ? (
                            <span className="flex gap-2 items-center justify-center">
                              Saving <ImSpinner8 className="animate-spin" />
                            </span>
                          ) : (
                            "Save Changes"
                          )}
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          setCurrentCategory([]);
                        }}
                        type="button"
                        className="absolute top-4 right-4 hover:bg-gray-900/60 transition hover:text-white  text-gray-900 h-8 w-8 border border-gray-400 rounded-full justify-center items-center flex"
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
    </CategoryContext.Consumer>
  );
};

export default EditCategory;
