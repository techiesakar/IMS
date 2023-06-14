import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "hoc/axios";
import SingleBrandSkeleton from "./skeleton/SingleBrandSkeleton";

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
    <div>
      {currentBrand.length > 0 && loading === false ? (
        currentBrand.map((brand, index) => {
          return (
            <div key={index} className="flex flex-col gap-6">
              <h1 className="text-left font-semibold text-2xl">
                Brand Name: {brand.Brand_name}
                {console.log(process.env.REACT_APP_IMAGE_URL)}
              </h1>
              <div>
                {brand.image && (
                  <img
                    className="h-20"
                    src={`${process.env.REACT_APP_IMAGE_URL}/${brand.image}`}
                    alt={brand.Brand_name}
                  />
                )}
              </div>

              <div className="grid grid-cols-12 gap-8">
                <h1 className="text-left font-semibold text-xl col-span-12">
                  Products
                </h1>
                {Array.from({ length: 6 }, (_, i) => i + 1).map((id) => {
                  return (
                    <div
                      key={id}
                      className="max-w-sm col-span-2 bg-white border border-gray-200 rounded-lg shadow "
                    >
                      <img
                        className="rounded-t-lg"
                        src={`http://localhost:4002/public/placeholder.jpg`}
                        alt=""
                      />

                      <div className="p-5">
                        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 ">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <SingleBrandSkeleton />
      )}
    </div>
  );
};

export default SingleBrand;
