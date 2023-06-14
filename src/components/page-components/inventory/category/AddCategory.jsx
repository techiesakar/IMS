import Loading from "components/Loading";
import { categorySchema } from "components/schema/caetgory/CategorySchema";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { CategoryContext } from "hoc/ContextApi/CategoryContextAPI/CategoryContextAPI";
import { useState } from "react";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [hasParent, setHasParent] = useState(false);
  return (
    <CategoryContext.Consumer>
      {({ postRequest, allCategory }) => {
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
                  <>
                    <Form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <Field
                        type="text"
                        name="Category_name"
                        placeholder="Add Category"
                        className="border border-gray-200 rounded p-2 outline-none "
                      />
                      <ErrorMessage
                        name="Category_name"
                        component="div"
                        className="text-red-400 text-xs "
                      />

                      {/* If this category is child category */}

                      <label
                        htmlFor="selectParent"
                        className="p-3 bg-white rounded-md flex flex-start  cursor-pointer"
                      >
                        <Field
                          type="text"
                          as="select"
                          id="selectParent"
                          name="ChildCategory_name"
                          className="border-0  bg-transparent  px-2 outline-none w-full cursor-pointer"
                        >
                          <option className="p-3 bg-red" value="">
                            Select Parent Category
                          </option>
                          {allCategory.map((item, index) => {
                            return (
                              <option value={item.id}>
                                {item.Category_name}
                              </option>
                            );
                          })}
                        </Field>
                      </label>
                      <p className="text-sm italic text-gray-400">
                        If has parent category select otherwise ignore
                      </p>
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
                  </>
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
