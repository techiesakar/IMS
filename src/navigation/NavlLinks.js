import { MdDashboard, MdInventory, MdFireTruck } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { SiGoogleanalytics, SiSalesforce } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
const NavLinks = [
  { id: 0, title: "Dashboard", link: "/", icon: <MdDashboard /> },
  {
    id: 1,
    title: "Inventory",
    link: "/inventory",
    icon: <MdInventory />,
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
  { id: 5, title: "Customers", link: "/customers", icon: <IoIosPeople /> },
  { id: 6, title: "Reports", link: "/reports", icon: <SiGoogleanalytics /> },
  { id: 7, title: "Settings", link: "/settings", icon: <CiSettings /> },
];
export default NavLinks;
