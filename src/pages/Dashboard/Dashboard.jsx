import React, { useEffect } from "react";
import CardData from "./CardData";
import Card from "./components/Card";
import { Donut } from "./components/Donut";
import SalesData from "./data/SalesData";
import InventoryData from "./data/InventoryData";

const Dashboard = () => {
  useEffect(() => {
    document.title = "SA - Dashboard"; // Set the desired title of your page
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="text-left font-bold text-xl">
        Inventory Management KPIs
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 grid-cols-2">
        {CardData.map((item, val) => (
          <Card key={val} name={item.name} value={item.value} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 justify-between">
        {/* Card Start */}
        <div className="flex flex-col gap-6">
          <h1 className="text-left font-extrabold text-xl w-1/2">
            Sales Order
          </h1>
          <div className="bg-white rounded-md p-6 h-60">
            <Donut data={SalesData} />
          </div>
        </div>
        {/* Card Ends */}

        {/* Card Start */}
        <div className="flex flex-col gap-6">
          <h1 className="text-left font-extrabold text-xl w-1/2">Inventory</h1>
          <div className="bg-white rounded-md p-6 h-60">
            <Donut data={InventoryData} />
          </div>
        </div>
        {/* Card Ends */}
      </div>
    </div>
  );
};

export default Dashboard;
