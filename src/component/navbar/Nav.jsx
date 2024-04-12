import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import {Navbar} from "@material-tailwind/react"
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
 
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "WEDDING DOCUMENTARY",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    src:"/weddingduct",
  },
  {
    title: "COUPLES & PORTRAITS",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    src:"/coupleport",
  },
  {
    title: "INDIAN WEDDING",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    src:"/gallery",
  },

  {
    title: "FAIMLY PORTRAITS",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
    src:"/family",
  },
  {
    title: "BEHINDI THE INDIAN VEIL(BOOK)",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
    src:"/learn",
  },
];


function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title,src }, key) => (
    <div key={key} className="div">
      <MenuItem className="flex  items-center rounded-lg">
        <div>
          <Link to={src}>
          <Typography
            // variant="small"
            color="blue-gray"
            className=" text-sm font-bold"
          >
            {title}
          </Typography>
          </Link>
        </div>
      </MenuItem>
      </div>
  ));


  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div"  className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              PORTFOLIO
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={'/'}>
        <ListItem className="flex items-center gap-2 py-2 pr-4 underline-offset-8 underline ">HOME</ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={'/goa'}>
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:underline underline-offset-8 ">
         WEDDING
        </ListItem>
        </Link>
        
      </Typography>
       {/* <NavListMenu />  */}
     
      <Typography
        as="a"
        href="#"
        color="blue-gray"
        className="font-medium"
      >
       <Link to={'/about'}>
       <ListItem className="flex items-center gap-2 py-2 pr-4 hover:underline underline-offset-8">
        ABOUT
        </ListItem>
       </Link>
        
      </Typography>

      <Typography
        as="a"
        href="#"
        color="blue-gray"
        className="font-medium"
      >
     <Link to={'/contact'}>
       <ListItem className="flex items-center gap-2 py-2 pr-4 hover:underline underline-offset-8">
          CONTACT
        </ListItem>
     </Link>
        
      </Typography>
    </List>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [color, setColor] = useState(true);

  const changeColor = () => {
    if(window.scrollY <= 0){
      setColor(true);
    }
    else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor, true);

  return (
    <Navbar className={` rounded-none max-w-full container py-2 shadow-md top-0 sticky z-20 border-none 
    ${color ? "navbarComp" : "navbarScrolled"}`}>
      <div className="flex items-center  justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
         
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <Link to={'/'}>
          <div className="logo flex items-center gap-1">
            <h1 className="bg-black/45 p-3 text-white ">SILK</h1>
            <h2 className="text-sm">By <span className="md:text-xl">SEPHI BERGERSON</span> </h2>
          </div>
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {/* mobile */}
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
