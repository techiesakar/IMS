import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="h-full  bg-gray-50 flex items-center justify-center">
      <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div class="max-w-md flex flex-col gap-2">
          <div class="text-5xl font-dark font-bold">404</div>
          <p class="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to="/">
            <button className="border border-gray-300 bg-blue-600 text-white rounded-md py-3 px-4">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
