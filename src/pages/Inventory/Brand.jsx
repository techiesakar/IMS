import DataLayout from "components/ui/DataLayout";
import UploadImage from "components/ui/UploadImage";
import { useEffect, useState } from "react";
import axios from "hoc/axios";
const Brand = () => {
  document.title = "SA - Brand";
  const [openForm, setOpenForm] = useState(false);
  const [Brand_name, setBrand_name] = useState("");
  const [Image, setImage] = useState("");

  const postRequest = () => {
    try {
      const formdata = new FormData();
      formdata.append("image", Image);
      formdata.append("Brand_name", Brand_name);

      axios
        .post("/brand", formdata)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataLayout
      title="All Brands"
      hideFilter={true}
      hideEdit={true}
      hideAdd={true}
      hideViewAll={true}
      openForm={() => setOpenForm(!openForm)}
    >
      {openForm && (
        <div className="p-4 rounded bg-white w-72 flex flex-col gap-4">
          {/* <UploadImage placeholder="Upload Brand Image" /> */}
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
            className="py-2 px-3 outline-none border-gray-300 focus:border-blue-500 border-2 rounded"
          />

          <button
            onClick={() => {
              postRequest();
            }}
            className="bg-blue-600 py-2 px-4 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      )}
    </DataLayout>
  );
};

export default Brand;
