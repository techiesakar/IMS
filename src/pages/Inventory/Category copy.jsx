import axios from "axios";
// import inventoryItems from "data/inventory";
import DataLayout from "components/ui/DataLayout";
import React, { useCallback, useMemo, useState } from "react";
// import { BiFilterAlt, BiPlus, BiPencil } from "react-icons/bi";
import inventory from "data/inventory.json";

const Category = () => {
  const productsList = inventory.products;
  document.title = "SA - Inventory";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the index range for the current page
  const totalPages = Math.ceil(productsList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // We need to perform loop on the products that is to be shown on the page
  const currentProducts = productsList.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentProducts);
  // Change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [openForm, setOpenForm] = useState(false);
  const [Category, setCategory] = useState(false);
  const [AllCat, setAllCat] = useState([]);
  const [Change, setChange] = useState(false);
  const [Slider, setSlider] = useState(false);

  const Submit = (value) => {
    try {
      setSlider(true);
      axios
        .post("http://localhost:4002/category", { Category_name: Category })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setChange(!Change);
            setSlider(false);
          }
        })
        .catch((err) => {
          setSlider(false);
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getTable = useCallback(() => {
    try {
      axios
        .get("http://localhost:4002/category")
        .then((res) => {
          console.log(res);
          setAllCat([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, [Change]);

  useMemo(() => getTable(), [Change]);

  return (
    <DataLayout
      title="All Categories"
      hideFilter={true}
      hideEdit={true}
      hideAdd={true}
      hideViewAll={true}
      openForm={() => setOpenForm(!openForm)}
    >
      <table className="w-full  text-left text-gray-800 bg-white">
        <thead className="text-gray-900  ">
          <tr className="border-b">
            <th scope="col" className="px-6 py-4">
              <td>Categories</td>
            </th>
          </tr>
        </thead>
        <tbody>
          {AllCat.map((vaal, i) => {
            return (
              <tr className="border-b bg-white">
                <td className="px-6 py-4">{vaal.Category_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {openForm && (
        <div className="p-4 rounded bg-white w-72 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Category"
            className="py-2 px-3 outline-none border-gray-300 focus:border-blue-500 border-2 rounded"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          {Slider ? (
            ""
          ) : (
            <button
              className="bg-blue-600 py-2 px-4 text-white rounded-md"
              onClick={Submit}
            >
              Submit
            </button>
          )}
        </div>
      )}
    </DataLayout>
  );
};

export default Category;
