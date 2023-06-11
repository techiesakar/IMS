import Loading from "components/Loading";
import { categorySchema } from "components/schema/caetgory/CategorySchema";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { CategoryContext } from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const EditCategory = () => {
  const [editLoading, setEditLoading] = useState(false);
  return (
    <CategoryContext.Consumer>
      {({ patchRequest, currentCategory, setCurrentCategory }) => {
        return (
          <div className="bg-gray-900/60 flex justify-center fixed items-center h-screen w-screen top-0 left-0 right-0 bottom-0">
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
                  <Form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <Field
                      type="text"
                      name="Category_name"
                      className="border border-gray-200 rounded p-2 outline-none "
                    />
                    <ErrorMessage
                      name="Category_name"
                      component="div"
                      className="text-red-400 text-xs "
                    />
                    {editLoading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="py-2 px-3 bg-blue-500 rounded text-white"
                      >
                        Add
                      </button>
                    )}

                    <div className="w-full flex items-center justify-center">
                      <button
                        onClick={() => {
                          setCurrentCategory([]);
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
    </CategoryContext.Consumer>
  );
};

export default EditCategory;
