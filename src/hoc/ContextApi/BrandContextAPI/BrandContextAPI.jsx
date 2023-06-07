import React, { createContext, useCallback, useMemo, useState } from "react";
import axios from "hoc/axios";
import { toast } from "react-toastify";

export const BrandContext = createContext();

function BrandContextAPI({ children }) {
  const [allBrands, setAllBrands] = useState([]);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const postRequest = (Brand_name, Image) => {
    try {
      setLoading(true);
      const formdata = new FormData();
      formdata.append("image", Image);
      formdata.append("Brand_name", Brand_name);

      axios
        .post("/brand", formdata)
        .then((res) => {
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
      setLoading(true);
      axios
        .delete(`/brand/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            setChange(!change);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getTable = useCallback(() => {
    try {
      axios
        .get("/brand")
        .then((res) => {
          setAllBrands([...res.data.Brand]);
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
    <BrandContext.Provider
      value={{
        brand: allBrands,
        deleteRequest: deleteRequest,
        postRequest: postRequest,
        loading: loading,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export default BrandContextAPI;
