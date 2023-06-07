import React, { createContext, useCallback, useMemo, useState } from "react";
import axios from "hoc/axios";
export const BrandContext = createContext();

function InventoryCRUDContextApi({ children }) {
  const [allBrands, setAllBrands] = useState([]);
  const [change, setChange] = useState(false);

  const postRequest = () => {
    try {
      setLoading(true);
      const formdata = new FormData();
      formdata.append("image", Image);
      formdata.append("Brand_name", Brand_name);

      axios
        .post("/brand", formdata)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setLoading(false);
            setChange(!change);
            toast(`${Brand_name} successfully added`);
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
  //   Get Table
  const getTable = useCallback(() => {
    try {
      //   setLoading(true);
      axios
        .get("/brand")
        .then((res) => {
          console.log(res);
          setAllBrands([...res.data.Brand]);
          //   setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
    return allBrands;
  }, [change]);
  useMemo(() => getTable(), [change]);

  return (
    <BrandContext.Provider value={{ brand: allBrands }}>
      {children}
    </BrandContext.Provider>
  );
}

export default InventoryCRUDContextApi;
