import React from "react";
import "./App.css";
import Layout from "hoc/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "pages/Dashboard/Dashboard";
import Customers from "pages/Customers/Customers";
import Inventory from "pages/Inventory/Inventory";
import Purchase from "pages/Purchase/Purchase";
import Reports from "pages/Reports/Reports";
import Sales from "pages/Sales/Sales";
import Settings from "pages/Settings/Settings";
import Suppliers from "pages/Suppliers/Suppliers";
import AddInventory from "pages/Inventory/AddInventory";
import AddCustomer from "pages/Customers/AddCustomers";
import NotFound from "pages/NotFound/NotFound";
import Login from "pages/Login/Login";
import ViewCustomer from "pages/Customers/ViewCustomer";

function App() {
  return (
    <div className="App ">
      <Layout>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/customers"} element={<Customers />} />
          <Route path={"/customer/add"} element={<AddCustomer />} />
          <Route path={"/customer/view"} element={<ViewCustomer />} />

          <Route path={"/inventory"} element={<Inventory />} />
          <Route path={"/inventory/add"} element={<AddInventory />} />
          <Route path={"/purchase"} element={<Purchase />} />
          <Route path={"/reports"} element={<Reports />} />
          <Route path={"/sales"} element={<Sales />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path={"/suppliers"} element={<Suppliers />} />
          <Route path={"/supplier/add"} element={<Suppliers />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/404"} element={<NotFound />} />
          <Route path={"*"} element={<Navigate to="/404" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
