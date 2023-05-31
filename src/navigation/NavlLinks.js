import { MdDashboard, MdInventory, MdFireTruck } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { SiGoogleanalytics, SiSalesforce } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { AiOutlineTransaction } from "react-icons/ai";
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
        id: 1,
        title: "View All",
        link: "/inventory",
      },
    ],
  },
  {
    id: 2,
    title: "Purchases",
    link: "/purchase",
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
        link: "/purchase",
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
        link: "/sale/add",
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
    id: 6,
    title: "Transactions",
    link: "/transations",
    icon: <AiOutlineTransaction />,
    children: [
      {
        id: 0,
        title: "Sales",
        link: "/transactions/sales",
      },
      {
        id: 1,
        title: "Purchases",
        link: "/transactions/purchases",
      },
    ],
  },
  {
    id: 6,
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
    ],
  },
  { id: 7, title: "Reports", link: "/reports", icon: <SiGoogleanalytics /> },
  { id: 8, title: "Settings", link: "/settings", icon: <CiSettings /> },
];
export default NavLinks;
