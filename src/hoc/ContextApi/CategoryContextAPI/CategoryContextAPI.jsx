/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useCallback, useMemo, useState } from "react";
import axios from "hoc/axios";

export const CategoryContext = createContext();

const CategoryContextAPI = ({ children }) => {
  const [allCategory, setAllCategory] = useState([]);
  const [change, setChange] = useState(false);
  const [currentCategory, setCurrentCategory] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  // PostRequest
  const postRequest = (Category_name, resetForm, setLoading) => {
    try {
      setLoading(true);
      const formdata = { Category_name: Category_name };
      axios
        .post("/category", formdata)
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            setChange(!change);
            resetForm();
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
  // Patch or Update Request
  const patchRequest = (Category_name, id, resetForm, setEditLoading) => {
    try {
      setEditLoading(true);
      const formdata = { Category_name: Category_name };
      console.log(formdata);
      axios
        .patch(`/category/${id}`, formdata)
        .then((res) => {
          if (res.status === 200) {
            setEditLoading(false);
            setChange(!change);
            resetForm();
            setCurrentCategory([]);
          }
        })
        .catch((err) => {
          console.log(err);
          setEditLoading(false);
          setChange(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Request
  const deleteRequest = (id, setIsDeleting, setOpenDelete) => {
    try {
      setIsDeleting(true);
      axios
        .delete(`/category/${id}`)
        .then((res) => {
          setIsDeleting(false);
          setChange(!change);
          setOpenDelete(false);
        })
        .catch((err) => {
          console.log(err);
          setIsDeleting(false);
          setOpenDelete(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //   Get Table
  const getTable = useCallback(() => {
    try {
      setTableLoading(true);
      axios
        .get("/category")
        .then((res) => {
          setAllCategory([...res.data.data]);
          setTableLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setTableLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
    return allCategory;
  }, [change]);

  // Memo to call table
  useMemo(() => getTable(), [change]);

  return (
    <CategoryContext.Provider
      value={{
        allCategory: allCategory,
        postRequest: postRequest,
        patchRequest: patchRequest,
        deleteRequest: deleteRequest,
        currentCategory: currentCategory,
        setCurrentCategory: setCurrentCategory,
        tableLoading: tableLoading,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextAPI;
