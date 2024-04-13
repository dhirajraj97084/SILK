import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
  Collapse,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
 
const menuItems = [
  {
    title: "FAQ",
    src:"/faq"
    // description:
    //   "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "FINE ART PRINTS",
    src:"/family"
    // description:
    //   "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "FOR COUPLES",
    src:"/forcouples"
    // description:
    //   "A complete set of UI Elements for building faster websites in less time.",
  },
];
 
export default function ResouceDropDown() {
  const [openMenu, setOpenMenu] = React.useState(false);
  
 
  return (
 
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex gap-x-2 text-[1em] outline-none hover:underline decoration-blue-200 underline-offset-8 items-center text-start font-medium  "
        >
          RESOURCES{" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="hidden grid-cols-7 lg:grid">
        <ul className="col-span-4 grid grid-cols-1 gap-y-2 outline-none ">
          {menuItems.map(({ title, src}) => (
            <Link to={src} key={title}>
              <MenuItem>
                <Typography variant="h6" color="blue-gray" className="font-medium">
                  {title}
                </Typography>                
              </MenuItem>
            </Link>
          ))}
        </ul>
      </MenuList>     
    </Menu>
  );
}