import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import DarkModeToggle from "./Darkmode";

function MobileNav() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const list = [
    {
      id: 1,
      text: "ABOUT",
      path: "/",
    },
    {
      id: 2,
      text: "SKILLS",
      path: "/tools",
    },
    {
      id: 3,
      text: "PROJECTS",
      path: "/projects",
    },
    {
      id: 4,
      text: "CONTACT",
      path: "contact",
    },

  ];

  const sidebar = {
    open: {
      opacity: 3,
    },
    closed: {
      opacity: 0.2,
      transistion: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      opacity: 1,
      transistion: { ease: "easeInOut" },
    },
  };

  return (
    <div className="w-[95%] mx-auto h-[80px] z-10 relative top-0">
      <div className="flex justify-end items-center pt-4 p-2">
        <div className='pr-5'>
                <DarkModeToggle />
        </div>
        

        <div onClick={handleClick}>
          {!nav ? (
            <HiOutlineMenuAlt3 className="text-[38px] cursor-pointer dark:text-white text-secondary" />
          ) : (
            <CgClose className="hidden" />
          )}
        </div>
      </div>

      <motion.ul
        variants={sidebar}
        initial="open"
        exit="exit"
        animate={nav ? "open" : "closed"}
        className={
          !nav
            ? "hidden"
            : "right-[0px] w-[50%] p-2 h-full fixed bg-stone-200 dark:bg-gray-500 top-0 z-10 transition-all duration-300 drop-shadow-lg"
        }
      >
        <div className="ml-auto pt-2 w-[40px]">
          <CgClose
            onClick={handleClose}
            className="text-[38px] cursor-pointer dark:text-gray-300 text-black transition-colors duration-300"
          />
        </div>

        {list.map(({ id, text, path }) => {
          return (
            <motion.li
              key={id}
              className="cursor-pointer font-[500] text-[#292929] dark:text-white mt-16 text-center "
            >
              <NavLink onClick={handleClose} to={path}>
                {text}
              </NavLink>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

export default MobileNav;
