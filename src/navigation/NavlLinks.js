import { MdDashboard, MdInventory, MdFireTruck } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { RiGalleryFill, RiSlideshow2Fill } from "react-icons/ri";
import { TbBrandBlogger } from "react-icons/tb";

import { SiGoogleanalytics, SiSalesforce, SiMercurial } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { BsPeopleFill } from "react-icons/bs";
import { FaChalkboardTeacher, FaTools } from "react-icons/fa";
const NavLinks = [
  { id: 0, title: "Dashboard", link: "/", icon: <MdDashboard /> },
  {
    id: 1,
    title: "Home Reason",
    link: "/homereason",
    icon: <MdInventory />,
  },
  {
    id: 2,
    title: "Bannner",
    link: "/banner",
    icon: <BiPurchaseTagAlt />,
  },
  {
    id: 3,
    title: "Students",
    link: "/students",
    icon: <SiSalesforce />,
    // children: [
    //   {
    //     id: 0,
    //     title: "Add Sale",
    //     link: "/students/add",
    //   },
    //   {
    //     id: 1,
    //     title: "View Sales",
    //     link: "/students",
    //   },
    // ],
  },
  {
    id: 4,
    title: "Reasons",
    link: "/reasons",
    icon: <MdFireTruck />,
    // children: [
    //   {
    //     id: 0,
    //     title: "Add Supplier",
    //     link: "/supplier/add",
    //   },
    //   {
    //     id: 1,
    //     title: "View Suppliers",
    //     link: "/suppliers",
    //   },
    // ],
  },
  {
    id: 5,
    title: "Instructor",
    link: "/instructor",
    icon: <FaChalkboardTeacher />,
    children: [
      {
        id: 0,
        title: "Add Instructor",
        link: "/instructor/add",
      },
      {
        id: 1,
        title: "View Instructor",
        link: "/instructor",
      },
    ],
  },
  {
    id: 6,
    title: "Course",
    link: "/course",
    icon: <SiBookstack />,
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
    id: 7,
    title: "Contact",
    link: "/contact",
    icon: <MdContactPhone />,
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
    id: 8,
    title: "About",
    link: "/staffs",
    icon: <SiMercurial />,
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
    id: 9,
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
    id: 10,
    title: "Testonomials",
    link: "/testonomials",
    icon: <RiSlideshow2Fill />,
  },
  {
    id: 12,
    title: "concept",
    link: "/concept",
    icon: <BsPeopleFill />,
  },

  { id: 11, title: "Reports", link: "/reports", icon: <SiGoogleanalytics /> },
  {
    id: 12,
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
    id: 13,
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
    id: 14,
    title: "Tools",
    link: "/tools/add",
    icon: <FaTools />,
  },
  {
    id: 15,
    title: "Gallery",
    link: "/gallery",
    icon: <RiGalleryFill />,
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
    id: 16,
    title: "Portfolio",
    link: "/portfolio",
    icon: <TbBrandBlogger />,
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
