import Loading from "components/Loading";
import { categorySchema } from "components/schema/caetgory/CategorySchema";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { CategoryContext } from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import { useState } from "react";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  return (
    <CategoryContext.Consumer>
      {({ postRequest }) => {
        return (
          <>
            <Formik
              initialValues={{
                Category_name: "",
              }}
              validationSchema={categorySchema}
              onSubmit={(values, { resetForm }) => {
                postRequest(values.Category_name, resetForm, setLoading);
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
                    {loading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="py-2 px-3 bg-blue-500 rounded text-white"
                      >
                        Add
                      </button>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </>
        );
      }}
    </CategoryContext.Consumer>
  );
};

export default AddCategory;
