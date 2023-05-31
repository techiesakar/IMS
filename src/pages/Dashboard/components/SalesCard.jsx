import React from "react";

const SalesCard = ({ number, status, type, color }) => {
  return (
    <div className="bg-white rounded-md p-4 md:p-8 shadow-sm">
      <p className={`font-bold text-xl md:text-3xl ${color}`}>{number}</p>
      <p className="text-gray-400">{type}</p>
      <p className="text-gray-700 text-sm font-extrabold uppercase">{status}</p>
    </div>
  );
};

export default SalesCard;
