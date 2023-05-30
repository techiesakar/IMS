import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center h-full flex-col">
      <div className="flex flex-col gap-10  w-full h-full justify-center items-center">
        <h1 className="relative">
          <div className="text-9xl font-extrabold text-white tracking-widest drop-shadow-lg shadow-red-500">
            404
          </div>
          <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12  left-0 right-0 mx-auto top-1/2 absolute w-fit ">
            Page Not Found
          </div>
        </h1>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
