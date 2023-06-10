/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useCallback, useMemo, useState } from "react";
import axios from "hoc/axios";
import { toast } from "react-toastify";

export const BrandContext = createContext();

function BrandContextAPI({ children }) {
  const [allBrands, setAllBrands] = useState([]);
  const [change, setChange] = useState(false);
  const [currentBrand, setCurrentBrand] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  // const [changetwo, setChangetwo] = useState(false);
  // const [changethree, setChangethree] = useState(false);

  const postRequest = (Brand_name, Image, resetForm, setLoading) => {
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
            resetForm();
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

  const patchRequest = (Brand_name, Image, resetForm, setLoading) => {
    try {
      setLoading(true);
      const formdata = new FormData();
      formdata.append("image", Image);
      formdata.append("Brand_name", Brand_name);

      axios
        .patch(`brand/${currentBrand[0].id}`, formdata)
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            setChange(!change);
            resetForm();
            setCurrentBrand([]);
            toast(`${Brand_name} updated successfully`);
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

  const deleteRequest = (id, setIsDeleting) => {
    try {
      setIsDeleting(true);
      axios
        .delete(`/brand/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setChange(!change);
            setIsDeleting(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsDeleting(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getTable = useCallback(() => {
    try {
      // setChangetwo(true);
      axios
        // .get("/brand", {
        //   onDownloadProgress: (progress) => {
        //     console.log(progress);
        //     if (progress.bytes / progress.total === 1) {
        //       setChangethree(!changethree);
        //     }
        //   },
        // })

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
  // useEffect(() => {
  //   if (changethree) {
  //     let interval = setTimeout(() => {
  //       setChangetwo(false);
  //     }, 2000);

  //     return () => {
  //       clearTimeout(interval);
  //     };
  //   }
  // }, [changethree]);

  const viewBrand = (slug) => {
    try {
      axios
        .get(`/brand/${slug}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {}
  };

  return (
    <BrandContext.Provider
      value={{
        brand: allBrands,
        // changetwo: changetwo,
        deleteRequest: deleteRequest,
        postRequest: postRequest,
        patchRequest: patchRequest,
        currentBrand: currentBrand,
        setCurrentBrand: setCurrentBrand,
        viewBrand: viewBrand,
        isDeleting: isDeleting,
        setIsDeleting: setIsDeleting,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export default BrandContextAPI;
