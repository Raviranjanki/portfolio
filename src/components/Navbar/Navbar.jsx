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
import { Link } from 'react-scroll'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { title: "home", icon: <AiOutlineHome /> },
    // { title: "about", icon: <AiOutlineUser /> },
    { title: "projects", icon: <AiOutlineFile /> },
    { title: "skills", icon: <BiBookContent /> },
    { title: "contact", icon: <AiOutlineMail /> },
  ];

  return (
      <nav className="sticky top-0 lg:static z-50 py-4 lg:py-0">
        <div className="z-50 h-screen fixed hidden justify-start lg:flex flex-col lg:w-1/6 text-gray-700" style={{ backgroundColor: "#336699" }}>
          <div>
            <div className="border-2 w-32 h-32 rounded-full overflow-hidden mx-12 mt-12">
              <img src={images.about01} alt="" className="w-full h-full" />
            </div>
            <h3 className="text-center text-lg text-white mt-4">
              Ravi Ranjan kumar
            </h3>
          </div>

          <ul className="mt-4">
            {links.map((item) => (
              <li
                className="flex mx-2 mt-4 w-full h-11"
                key={`link-${item.title}`}
              >
                <Link  smooth spy
                  to={`${item.title}`}
                  className="cursor-pointer group flex text-center h-full text-gray-300 items-center rounded-full w-full focus:text-blue-500"
                  activeClass="text-red-400 font-medium"
                >
                  <span className="text-xl text-center ml-2 group-[:hover]:text-red-400">
                    {item.icon}
                  </span>
                  <span className="capitalize ml-2 group-[:hover]:text-white">
                    {item.title}
                  </span>
                </Link>
                
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:hidden">
          <HiMenuAlt4
              className="h-10 w-10 ml-auto mr-4 p-1 border-2 border-[#336699] rounded-full text-[#336699]"
              onClick={() => setToggle(true)}
            />
          {toggle && (
            <motion.div
              className="text-left uppercase fixed top-0 right-0 z-50 h-screen"
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{ backgroundColor: "#336699" }}
            >
              <HiX className="m-1" onClick={() => setToggle(false)} />
              <ul className="pl-6 w-80">
                {links.map((item) => (
                  <li
                    className="my-8 hover:text-blue-800 font-medium text-sm cursor-pointer"
                    key={item.title}
                  >
                    <Link activeClass="active" smooth spy to={`${item.title}`} onClick={() => setToggle(false)}>
                      {item.title}
                    </Link>
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
