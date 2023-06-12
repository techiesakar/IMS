import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "hoc/axios";
import Loading from "components/Loading";

const SingleBrand = () => {
  const { slug } = useParams();
  const [currentBrand, setCurrentBrand] = useState([]);
  const [loading, setLoading] = useState(false);

  const singleRequest = (slug) => {
    try {
      axios
        .get(`/brand/${slug}`)
        .then((res) => {
          if (res.status === 200) {
            setLoading(true);
            setCurrentBrand([res.data.Brand]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loading === true) {
      let interval = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => {
        clearTimeout(interval);
      };
    }
  }, [loading]);

  useEffect(() => {
    singleRequest(slug);
  }, [slug]);

  return (
    <>
      {currentBrand.length > 0 && loading === false ? (
        currentBrand.map((brand, index) => {
          return <div key={index}>{brand.Brand_name}</div>;
        })
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SingleBrand;
