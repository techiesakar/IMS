import React from "react";
import "./App.css";
import Layout from "hoc/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "pages/Dashboard/Dashboard";
import Customers from "pages/Customers/Customers";
import Inventory from "pages/Inventory/Inventory";
import Purchase from "pages/Purchase/Purchase";
import Reports from "pages/Reports/Reports";
import Sales from "pages/Sales/Sales";
import Settings from "pages/Settings/Settings";
import Suppliers from "pages/Suppliers/Suppliers";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/customers"} element={<Customers />} />
          <Route path={"/inventory"} element={<Inventory />} />
          <Route path={"/purchase"} element={<Purchase />} />
          <Route path={"/report"} element={<Reports />} />
          <Route path={"/sales"} element={<Sales />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path={"/suppliers"} element={<Suppliers />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
