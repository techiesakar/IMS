import React from "react";
import { useParams } from "react-router-dom";
import { BrandContext } from "hoc/ContextApi/BrandContextAPI/BrandContextAPI";

const ViewBrand = () => {
  const { slug } = useParams();

  return <>{slug}</>;
};

export default ViewBrand;
