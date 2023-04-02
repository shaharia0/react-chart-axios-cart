import React, { useState } from "react";
import Link from "../Link/Link";
import { FaBars } from 'react-icons/fa';
import { GoX } from "react-icons/go";


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Shop",
      path: "/shop",
    },
  ];

  return (
    <nav className="bg-lime-400 px-4">
      <div onClick={()=>setOpen(!open)} className="md:hidden">
        <span>{open === true ?
         <GoX className="h-6 w-6"></GoX> : 
         <FaBars className="h-6 w-6"></FaBars>}</span>
      </div>
      <ul className={`md:flex absolute md:static duration-500 gap-4 bg-lime-400 px-10 py-4 justify-between ${open ? 'top-6' : '-top-52'}`}>
        {
          routes.map(route => <Link
          key={route.id}
          route={route}
          ></Link>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;
