import axios from "hoc/axios";
import { useMemo, useCallback, useState } from "react";
import { toast } from "react-toastify";
// export const postRequest = () => {
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

export const deleteRequest = (id, setLoading, setChange, change) => {
  try {
    axios
      .delete(`/brand/${id}`)
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

export const getTable = (setAllBrands, setLoading, change) => {
  try {
    setLoading(true);
    axios
      .get("/brand")
      .then((res) => {
        console.log(res);
        setAllBrands([...res.data.Brand]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

//   return allBrands;
