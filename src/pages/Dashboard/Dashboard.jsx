import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "SA - Dashboard"; // Set the desired title of your page
  }, []);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
