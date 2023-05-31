import React from "react";

const Card = ({ name, value }) => {
  return (
    <div className="bg-white rounded-md p-4 md:p-8 shadow-sm">
      <p className="text-gray-500">{name}</p>
      <p className="font-bold text-xl md:text-2xl text-gray-600">{value}</p>
    </div>
  );
};

export default Card;
