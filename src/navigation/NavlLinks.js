import { MdDashboard, MdInventory, MdFireTruck } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { SiGoogleanalytics, SiSalesforce } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { BsPeopleFill } from "react-icons/bs";
const NavLinks = [
  { id: 0, title: "Dashboard", link: "/", icon: <MdDashboard /> },
  {
    id: 1,
    title: "Inventory",
    link: "/inventory",
    icon: <MdInventory />,
    children: [
      {
        id: 0,
        title: "Add Item",
        link: "/inventory/add",
      },
      {
        id: 2,
        title: "Categories",
        link: "/categories",
      },
      {
        id: 1,
        title: "View All",
        link: "/inventory",
      },
    ],
  },
  {
    id: 2,
    title: "Purchases",
    link: "/purchases",
    icon: <BiPurchaseTagAlt />,
    children: [
      {
        id: 0,
        title: "Add Purchase",
        link: "/purchase/add",
      },
      {
        id: 1,
        title: "View Purchases",
        link: "/purchases",
      },
    ],
  },
  {
    id: 3,
    title: "Sales",
    link: "/sales",
    icon: <SiSalesforce />,
    children: [
      {
        id: 0,
        title: "Add Sale",
        link: "/sales/add",
      },
      {
        id: 1,
        title: "View Sales",
        link: "/sales",
      },
    ],
  },
  {
    id: 4,
    title: "Suppliers",
    link: "/suppliers",
    icon: <MdFireTruck />,
    children: [
      {
        id: 0,
        title: "Add Supplier",
        link: "/supplier/add",
      },
      {
        id: 1,
        title: "View Suppliers",
        link: "/suppliers",
      },
    ],
  },

  {
    id: 5,
    title: "Customers",
    link: "/customers",
    icon: <IoIosPeople />,
    children: [
      {
        id: 0,
        title: "Add Customer",
        link: "/customer/add",
      },
      {
        id: 0,
        title: "View Customers",
        link: "/customers",
      },
    ],
  },

  {
    id: 7,
    title: "Staffs",
    link: "/staffs",
    icon: <BsPeopleFill />,
    children: [
      {
        id: 0,
        title: "Add Staff",
        link: "/staff/add",
      },
      {
        id: 1,
        title: "View Staffs",
        link: "/staffs",
      },
      {
        id: 2,
        title: "Attendance",
        link: "/staffs/attendance",
      },
      {
        id: 3,
        title: "Salary",
        link: "/staffs/salary",
      },
    ],
  },
  {
    id: 8,
    title: "Sales Return",
    link: "/sales-return",
    icon: <BsPeopleFill />,
    children: [
      {
        id: 0,
        title: "Add Return",
        link: "/sales-return/add",
      },
      {
        id: 1,
        title: "View Returns",
        link: "/sales-return",
      },
    ],
  },
  {
    id: 9,
    title: "Purchase Return",
    // link: "/",
    icon: <BsPeopleFill />,
    children: [
      {
        id: 0,
        title: "Add Returns",
        link: "/purchases-return/add",
      },
      {
        id: 1,
        title: "View Returns",
        link: "/purchases-return",
      },
    ],
  },

  { id: 10, title: "Reports", link: "/reports", icon: <SiGoogleanalytics /> },
  {
    id: 11,
    title: "General Settings",
    link: "/settings",
    icon: <CiSettings />,
    children: [
      {
        id: 0,
        title: "Profile",
        link: "/account",
      },
      {
        id: 1,
        title: "Account Settings",
        link: "/account/settings",
      },
    ],
  },
];
export default NavLinks;
