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
        id: 1,
        title: "Categories",
        link: "/categories",
      },
      {
        id: 2,
        title: "Brands",
        link: "/brands",
      },
      {
        id: 2,
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
    title: "Students",
    link: "/students",
    icon: <SiSalesforce />,
    children: [
      {
        id: 0,
        title: "Add Sale",
        link: "/students/add",
      },
      {
        id: 1,
        title: "View Sales",
        link: "/students",
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
    id: 15,
    title: "Course",
    link: "/course",
    icon: <MdFireTruck />,
    children: [
      {
        id: 0,
        title: "Add Course",
        link: "/course/add",
      },
      {
        id: 1,
        title: "View Course",
        link: "/course",
      },
    ],
  },

  {
    id: 5,
    title: "Contact",
    link: "/contact",
    icon: <IoIosPeople />,
    children: [
      {
        id: 0,
        title: "Add Contact Info",
        link: "/contact/add",
      },
      {
        id: 0,
        title: "View Messages",
        link: "/contact/view",
      },
    ],
  },

  {
    id: 7,
    title: "About",
    link: "/staffs",
    icon: <BsPeopleFill />,
    children: [
      {
        id: 0,
        title: "Company Info",
        link: "/about/add-info",
      },
      {
        id: 1,
        title: "How We Work ?",
        link: "/about/add-hwk",
      },
      {
        id: 2,
        title: "Our Achivements",
        link: "/about/achivements",
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
    title: "Team",
    link: "/team",
    icon: <BsPeopleFill />,
    children: [
      {
        id: 0,
        title: "Add Team Members",
        link: "/team/add",
      },
      {
        id: 1,
        title: "View Team Members",
        link: "/team/view",
      },
    ],
  },
  {
    id: 9,
    title: "Testonomials",
    link: "/testonomials",
    icon: <BsPeopleFill />,
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
  {
    id: 12,
    title: "Category",
    link: "/category",
    icon: <MdFireTruck />,
    // children: [
    //   {
    //     id: 0,
    //     title: "Add Category",
    //     link: "/category/add",
    //   },
    //   {
    //     id: 1,
    //     title: "View category",
    //     link: "/category",
    //   },
    // ],
  },
  {
    id: 16,
    title: "Tools",
    link: "/tools/add",
    icon: <MdFireTruck />,
  },
  {
    id: 13,
    title: "Gallery",
    link: "/gallery",
    icon: <MdFireTruck />,
    // children: [
    //   {
    //     id: 0,
    //     title: "Add Gallery",
    //     link: "/gallery/add",
    //   },
    //   {
    //     id: 1,
    //     title: "View gallery",
    //     link: "/gallery",
    //   },
    // ],
  },
  {
    id: 14,
    title: "Portfolio",
    link: "/portfolio",
    icon: <MdFireTruck />,
    // children: [
    //   {
    //     id: 0,
    //     title: "Add Portfolio",
    //     link: "/portfolio/add",
    //   },
    //   {
    //     id: 1,
    //     title: "View Portfolio",
    //     link: "/portfolio",
    //   },
    // ],
  },
];
export default NavLinks;
