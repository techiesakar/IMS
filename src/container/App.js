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
import Suppliers from "pages/Suppliers/Suppliers";
import AddInventory from "pages/Inventory/AddInventory";
import AddCustomer from "pages/Customers/AddCustomers";
import NotFound from "pages/NotFound/NotFound";
import Login from "pages/Login/Login";
import ViewCustomer from "pages/Customers/ViewCustomer";
import Staffs from "pages/Staffs/Staffs";
import AddStaff from "pages/Staffs/AddStaff";

import AddSupplier from "pages/Suppliers/AddSupplier";
import Account from "pages/Account/Account";
import Settings from "pages/Account/Settings";
import Attendance from "pages/Staffs/Attendance";
import Salary from "pages/Staffs/HowWeWork";
import AddPurchase from "pages/Purchase/AddPurchase";
import AddSales from "pages/Sales/AddSales";
import Category from "pages/Inventory/Category";
import Brand from "pages/Inventory/Brand";
import AddStudent from "pages/Student/AddStuden";
import Add from "pages/Team/Add";
import ViewTeam from "pages/Team/ViewTeam";
import HowWeWork from "pages/Staffs/HowWeWork";
import OurAchivements from "pages/Staffs/OurAchivements";
import Testonomials from "pages/Testonomials/Testonomials";

function App() {
  return (
    <div className="App ">
      <Layout>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/dashboard"} element={<Dashboard />} />

          {/* <Route path={"/customers"} element={<Customers />} /> */}
          <Route path={"/contact/add"} element={<AddCustomer />} />
          <Route path={"/contact/view"} element={<ViewCustomer />} />

          <Route path={"/inventory"} element={<Inventory />} />
          <Route path={"/inventory/add"} element={<AddInventory />} />
          <Route path={"/categories"} element={<Category />} />

          <Route path={"/brands"} element={<Brand />} />

          <Route path={"/purchases"} element={<Purchase />} />
          <Route path={"/purchase/add"} element={<AddPurchase />} />

          <Route path={"/reports"} element={<Reports />} />
          <Route path={"/students"} element={<Sales />}  />

          <Route path={"/students/add"} element={<AddStudent />} />

          <Route path={"/suppliers"} element={<Suppliers />} />
          <Route path={"/supplier/add"} element={<AddSupplier />} />

          <Route path={"/staffs"} element={<Staffs />} />
          <Route path={"/about/add-info"} element={<AddStaff />} />
          <Route path={"/about/achivements"} element={<OurAchivements />} />
          <Route path={"/about/add-hwk"} element={<HowWeWork />} />
          <Route path={"/testonomials"} element={<Testonomials />} />


          <Route path={"/team/add"} element={<Add />} />
          <Route path={"/team/view"} element={<ViewTeam />} />



          <Route path={"/login"} element={<Login />} />
          <Route path={"/account"} element={<Account />} />
          <Route path={"/account/settings"} element={<Settings />} />

          <Route path={"/404"} element={<NotFound />} />
          <Route path={"*"} element={<Navigate to="/404" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
