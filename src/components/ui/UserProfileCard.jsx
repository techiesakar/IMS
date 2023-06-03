import React from "react";

const UserProfileCard = ({ name, image, phone, email, address }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-white"
      />
      <h1 className="font-bold text-3xl text-center">{name}</h1>
      <ul>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{address}</li>
      </ul>
    </div>
  );
};

export default UserProfileCard;
