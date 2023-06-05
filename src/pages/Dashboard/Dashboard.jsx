import React, { useEffect, useState } from "react";
import CardData from "./data/CardData";
import Card from "./components/Card";
import inventory from "data/inventory.json";
import { Donut } from "./components/Donut";
import InventoryStats from "./data/InventoryStats";
import SalesStats from "./data/SalesStats";
import SalesData from "./data/SalesData";
import SalesCard from "./components/SalesCard";
const Dashboard = () => {
  document.title = "SA - Dashboard"; // Set the desired title of your page
  const productsList = inventory.products;
  const currentProducts = productsList.slice(0, 6);

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const winWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", winWidth);
    return () => {
      window.removeEventListener("resize", winWidth);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* KPIs Start */}
      <h1 className="text-left font-bold text-xl text-gray-800">
        Inventory Management KPIs
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 grid-cols-2">
        {CardData.map((item, val) => (
          <Card key={val} name={item.name} value={item.value} />
        ))}
      </div>
      {/* Sales Activity */}
      <h1 className="text-left font-bold text-xl text-gray-800">
        Sales Activity
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 grid-cols-2">
        {SalesData.map((item, val) => (
          <SalesCard
            key={val}
            name={item.name}
            type={item.type}
            number={item.value}
            status={item.status}
            color={item.color}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between gap-6">
        {/* Card Start */}
        <div className="flex flex-col gap-6">
          <h1 className="text-left font-bold text-lg  text-gray-800">
            Sales Order
          </h1>
          <div className=" rounded-md lg:p-6  ">
            <Donut width={width} data={SalesStats} />
          </div>
        </div>
        {/* Card Ends */}

        {/* Card Start */}
        <div className="flex flex-col gap-6">
          <h1 className="text-left font-bold text-lg  text-gray-800">
            Inventory
          </h1>
          <div className=" rounded-md lg:p-6 ">
            <Donut width={width} data={InventoryStats} />
          </div>
        </div>
        {/* Card Ends */}
      </div>

      {/* Table Area */}
      <div className=" rounded-md  grid  lg:grid-cols-2 gap-8">
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
              {currentProducts.map((item, index) => {
                return (
                  <tr key={index} className="border-b bg-white">
                    <td className="px-5 py-2">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-8 w-8 rounded-lg"
                      />
                    </td>
                    <td className="px-5 py-2">{item.title}</td>
                    <td className="px-5 py-2">20</td>
                    <td className="px-5 py-2">{item.stock}</td>
                    <td className="px-6 py-4">{item.price}</td>
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
              {currentProducts.map((item, index) => {
                return (
                  <tr key={index} className="border-b bg-white">
                    <td className="px-5 py-2">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-8 w-8 rounded-lg"
                      />
                    </td>
                    <td className="px-5 py-2">{item.title}</td>
                    <td className="px-5 py-2">20</td>
                    <td className="px-5 py-2">{item.stock}</td>
                    <td className="px-6 py-4">{item.price}</td>
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
