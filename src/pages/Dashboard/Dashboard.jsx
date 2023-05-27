import React, { useEffect } from "react";
import CardData from "./CardData";
import Card from "./components/Card";
import { Donut } from "./components/Donut";
import SalesData from "./data/SalesData";
import InventoryData from "./data/InventoryData";
import inventoryItems from "data/Inventory";
const Dashboard = () => {
  useEffect(() => {
    document.title = "SA - Dashboard"; // Set the desired title of your page
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <h1 className="text-left font-bold text-xl text-gray-800">
        Inventory Management KPIs
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 grid-cols-2">
        {CardData.map((item, val) => (
          <Card key={val} name={item.name} value={item.value} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 justify-between">
        {/* Card Start */}
        <div className="flex flex-col gap-6">
          <h1 className="text-left font-bold text-lg  text-gray-800">
            Sales Order
          </h1>
          <div className="bg-white rounded-md p-6 h-60">
            <Donut data={SalesData} />
          </div>
        </div>
        {/* Card Ends */}

        {/* Card Start */}
        <div className="flex flex-col gap-6">
          <h1 className="text-left font-bold text-lg  text-gray-800">
            Inventory
          </h1>
          <div className="bg-white rounded-md p-6 h-60">
            <Donut data={InventoryData} />
          </div>
        </div>
        {/* Card Ends */}
      </div>

      {/* Table Area */}
      <div className=" rounded-md  lg:grid md:grid-cols-2 gap-8">
        <div className="w-full h-full flex flex-col gap-4">
          <h1 className="text-left font-bold text-lg  text-gray-800">
            Top Selling Items
          </h1>
          <table className="w-full  text-left text-gray-800 bg-white">
            <thead className="text-gray-900 uppercase ">
              <tr>
                <th scope="col" className="p-5">
                  Photo
                </th>
                <th scope="col" className="p-5">
                  Item
                </th>
                <th scope="col" className="p-5">
                  Sold
                </th>
                <th scope="col" className="p-5">
                  On-Hand
                </th>
                <th scope="col" className="p-5">
                  Units
                </th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item, index) => {
                return (
                  <tr key={index} className="border-b bg-white">
                    <td class="px-5 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 rounded-lg"
                      />
                    </td>
                    <td class="px-5 py-2">{item.name}</td>
                    <td class="px-5 py-2">{item.sold}</td>
                    <td class="px-5 py-2">{item.onHand}</td>
                    <td class="px-5 py-2">{item.units}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="w-full h-full flex flex-col gap-4">
          <h1 className="text-left font-bold text-lg  text-gray-800">
            High Demand is Expected
          </h1>
          <table className="w-full  text-left text-gray-800 bg-white">
            <thead className="text-gray-900 uppercase ">
              <tr>
                <th scope="col" className="p-5">
                  Photo
                </th>
                <th scope="col" className="p-5">
                  Item
                </th>
                <th scope="col" className="p-5">
                  Sold
                </th>
                <th scope="col" className="p-5">
                  On-Hand
                </th>
                <th scope="col" className="p-5">
                  Units
                </th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item, index) => {
                return (
                  <tr key={index} className="border-b bg-white">
                    <td class="px-5 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 rounded-lg"
                      />
                    </td>
                    <td class="px-5 py-2">{item.name}</td>
                    <td class="px-5 py-2">{item.sold}</td>
                    <td class="px-5 py-2">{item.onHand}</td>
                    <td class="px-5 py-2">{item.units}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* Table Area */}
    </div>
  );
};

export default Dashboard;
