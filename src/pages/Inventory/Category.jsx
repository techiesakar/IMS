import DataLayout from "components/ui/DataLayout";
import { useState } from "react";
const Category = () => {
  document.title = "SA - Inventory";
  const [openForm, setOpenForm] = useState(false);
  return (
    <DataLayout
      title="All Categories"
      hideFilter={true}
      hideEdit={true}
      hideAdd={true}
      hideViewAll={true}
      openForm={() => setOpenForm(!openForm)}
    >
      {openForm && (
        <div className="p-4 rounded bg-white w-72 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Category"
            className="py-2 px-3 outline-none border-gray-300 focus:border-blue-500 border-2 rounded"
          />

          <button className="bg-blue-600 py-2 px-4 text-white rounded-md">
            Submit
          </button>
        </div>
      )}
    </DataLayout>
  );
};

export default Category;
