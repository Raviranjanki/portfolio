import React, { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineFile,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [active, setActive] = useState();

  useEffect(() => {
    if (active) {
      active.style.color = "white";
      active.firstElementChild.style.color = "#f08080";
    }
  }, [active]);

  const handleClick = (e) => {
    if (active != undefined && e.currentTarget != active) {
      active.style.color = "#D1D5DB";
      active.firstElementChild.style.color = "#D1D5DB";
    }
    setActive(e.currentTarget);
  };

  const links = [
    { title: "home", icon: <AiOutlineHome /> },
    { title: "about", icon: <AiOutlineUser /> },
    { title: "projects", icon: <AiOutlineFile /> },
    { title: "skills", icon: <BiBookContent /> },
    { title: "contact", icon: <AiOutlineMail /> },
  ];

  return (
    <nav>
      <div className="z-50 h-screen fixed hidden justify-start lg:flex flex-col lg:w-1/6 text-gray-700" style={{ backgroundColor: "#336699" }}>
        <div>
          <div className="border-2 rounded-full overflow-hidden mx-12 mt-12">
            <img src={images.mobile} alt="" className="" />
          </div>
          <h3 className="text-center text-lg text-white mt-4">
            Ravi Ranjan Kumar
          </h3>
        </div>

        <ul className="mt-4">
          {links.map((item) => (
            <li
              className="flex mx-2 mt-4 w-full h-11"
              key={`link-${item.title}`}
            >
              <a
                href={`#${item.title}`}
                className="group flex text-center h-full items-center rounded-full w-full text-gray-300 focus:text-blue-500"
                onClick={handleClick}
              >
                <span className="text-xl text-center ml-2 group-[:hover]:text-red-300">
                  {item.icon}
                </span>
                <span className="capitalize ml-2 group-[:hover]:text-white">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex border fixed z-50 left-0 right-0 lg:hidden flex-row" style={{ backgroundColor: "#336699" }}>
        <HiMenuAlt4
          className="h-8 w-8 ml-auto m-1 border-2 rounded-full p-1 text-white"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            className="bg-gray-100 text-left uppercase fixed top-0 right-0 z-50 h-screen"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX className="m-1" onClick={() => setToggle(false)} />
            <ul className="pl-6 w-80">
              {links.map((item) => (
                <li
                  className="my-8 hover:text-blue-800 font-medium text-sm"
                  key={item.title}
                >
                  <a href={`#${item.title}`} onClick={() => setToggle(false)}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
