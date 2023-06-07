import DataLayout from "components/ui/DataLayout";
// import UploadImage from "components/ui/UploadImage";
import { useMemo, useCallback, useState } from "react";
import axios from "hoc/axios";
import Loading from "components/Loading";
import { BiPencil } from "react-icons/bi";
import { AiFillDelete, AiFillEye, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  Brand_name: yup.string().required("cannot be empty"),
});

const Brand = () => {
  document.title = "SA - Brand";
  const [Brand_name, setBrand_name] = useState("");
  const [Image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);
  const [allBrands, setAllBrands] = useState([]);
  const [editInputOpen, setEditInputOpen] = useState(false);

  const [currentBrand, setCurrentBrand] = useState([]);

  // const postRequest = () => {
  //   try {
  //     setLoading(true);
  //     const formdata = new FormData();
  //     formdata.append("image", Image);
  //     formdata.append("Brand_name", Brand_name);

  //     axios
  //       .post("/brand", formdata)
  //       .then((res) => {
  //         console.log(res);
  //         if (res.status === 200) {
  //           setLoading(false);
  //           setChange(!change);
  //           toast(`${Brand_name} successfully added`);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setLoading(false);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const deleteRequest = (id) => {
  //   try {
  //     axios
  //       .delete(`/brand/${id}`)
  //       .then((res) => {
  //         console.log(res);
  //         if (res.status === 200) {
  //           setLoading(false);
  //           setChange(!change);
  //           toast(`Item Deleted`);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setLoading(false);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getTable = useCallback(() => {
  //   try {
  //     setLoading(true);
  //     axios
  //       .get("/brand")
  //       .then((res) => {
  //         console.log(res);
  //         setAllBrands([...res.data.Brand]);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return allBrands;
  // }, []);

  let data = useMemo(() => getTable(), [change]);
  console.log(data);

  let mode;
  if (currentBrand.length > 0) {
    mode = (
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
  }
  return (
    <DataLayout
      title="All Brands"
      showFilter={true}
      showEdit={false}
      showViewAll={false}
    >
      {mode}
      <div className="max-w-screen-xl w-full mx-auto grid grid-cols-12 gap-12">
        <div className="col-span-6">
          <table className="w-full table-fixed text-left text-gray-800 bg-white overfow-hidden	">
            <thead className="text-gray-700">
              <tr className="border-gray-200 border-b">
                <th className="px-6 py-4">
                  <input type="checkbox" name="brandItem" />
                </th>
                <th className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 w-40 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allBrands.map((brand, index) => {
                return (
                  <tr key={index} className=" border-b">
                    <td className="px-6 py-4">
                      <input type="checkbox" name="brand" />
                    </td>
                    <td className="px-6 py-4">
                      {editInputOpen && currentBrand === brand.id ? (
                        <input
                          type="text"
                          placeholder={brand.Brand_name}
                          onChange={(e) => {
                            setBrand_name(e.target.value);
                          }}
                          className="p-1 outline-none text-sm border-gray-300 focus:border-blue-500 border rounded"
                        />
                      ) : (
                        brand.Brand_name
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2 items-center text-base">
                        <button
                          aria-label="Edit Supplier"
                          onClick={() => {
                            setEditInputOpen(true);
                            setCurrentBrand([brand]);
                          }}
                        >
                          <BiPencil />
                        </button>
                        <button
                          aria-label="Delete Supplier"
                          onClick={() => deleteRequest(brand.id)}
                        >
                          <AiFillDelete />
                        </button>
                        <Link to={"/brand/view"}>
                          <button aria-label="View Supplier">
                            <AiFillEye />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col-span-6">
          <ToastContainer />

          <div className="p-4 rounded bg-white w-72 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Brand"
              onChange={(e) => {
                setBrand_name(e.target.value);
              }}
              className="py-2 px-3 outline-none border-gray-300 focus:border-blue-500 border-2 rounded"
            />

            <input
              type="file"
              placeholder="files"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              className="py-2 px-3 outline-none border-gray-300 focus:border-blue-500 border-2 rounded "
            />

            {loading ? (
              <Loading />
            ) : (
              <button
                onClick={() => {
                  postRequest();
                }}
                className="bg-blue-600 py-2 px-4 text-white rounded-md"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </DataLayout>
  );
};

export default Brand;
