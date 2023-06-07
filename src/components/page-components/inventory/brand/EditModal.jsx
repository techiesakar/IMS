import React from "react";

const EditModal = () => {
  return (
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
                    <ErrorMessage name="Brand_name" component={"div"} />
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
                          setFieldValue("imagetwo", e.target.files[0]);
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
  );
};

export default EditModal;
