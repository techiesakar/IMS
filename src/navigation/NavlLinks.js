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
    title: "Purchase Order",
    link: "/purchase",
    icon: <BiPurchaseTagAlt />,
  },
  {
    id: 3,
    title: "Suppliers",
    link: "/suppliers",
    icon: <MdFireTruck />,
    children: [
      {
        id: 0,
        title: "Add Supplier",
        link: "/suppliers/add",
      },
      {
        id: 1,
        title: "View All",
        link: "/suppliers",
      },
    ],
  },
  { id: 4, title: "Sales Orders", link: "/sales", icon: <SiSalesforce /> },
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
        title: "View All",
        link: "/customers",
      },
    ],
  },

  {
    id: 6,
    title: "Transactions",
    link: "/transation",
    icon: <AiOutlineTransaction />,
    children: [
      {
        id: 0,
        title: "Sales",
        link: "/suppliers/add",
      },
      {
        id: 1,
        title: "Purchases",
        link: "/suppliers",
      },
    ],
  },
  {
    id: 6,
    title: "Staffs",
    link: "/staffs",
    icon: <BsPeopleFill />,
  },
  { id: 7, title: "Reports", link: "/reports", icon: <SiGoogleanalytics /> },
  { id: 8, title: "Settings", link: "/settings", icon: <CiSettings /> },
];
export default NavLinks;
