import DataLayout from "components/ui/DataLayout";
// import UploadImage from "components/ui/UploadImage";
import { useMemo, useCallback, useState } from "react";
import axios from "hoc/axios";
import Loading from "components/Loading";
import { BiPencil } from "react-icons/bi";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = () => {
  document.title = "SA - Brand";
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  const postRequest = () => {
    try {
      setLoading(true);
      const formData = { Category_name: category };

      axios
        .post("/category", formData)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setLoading(false);
            setChange(!change);
            toast(`${category} successfully added`);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRequest = (id) => {
    try {
      axios
        .delete(`/category/${id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setLoading(false);
            setChange(!change);
            toast(`Item Deleted`);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getTable = useCallback(() => {
    try {
      setLoading(true);
      axios
        .get("/category")
        .then((res) => {
          console.log(res);
          setAllCategories([...res.data.data]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
    return allCategories;
  }, []);

  let data = useMemo(() => getTable(), [change]);
  console.log(data);

  return (
    <DataLayout
      title="All Categories"
      showFilter={true}
      showEdit={false}
      showViewAll={false}
    >
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
              {allCategories.map((item, index) => {
                return (
                  <tr key={index} className=" border-b">
                    <td className="px-6 py-4">
                      <input type="checkbox" name="brand" />
                    </td>
                    <td className="px-6 py-4">{item.Category_name}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2 items-center text-base">
                        <button aria-label="Edit Supplier">
                          <BiPencil />
                        </button>
                        <button
                          aria-label="Delete Supplier"
                          onClick={() => deleteRequest(item.id)}
                        >
                          <AiFillDelete />
                        </button>
                        <Link to={"/category/view"}>
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
                setCategory(e.target.value);
              }}
              className="py-2 px-3 outline-none border-gray-300 focus:border-blue-500 border-2 rounded"
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

export default Category;
