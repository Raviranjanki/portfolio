import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";

const projects = [
  {
    title: "Cypto Trade",
    description: "This is simply a portfolio page for myself",
    imageUrl: images.crypto,
  },
  {
    title: "Coin Cap",
    description: "Here you can see all the coin and their rates",
    imageUrl: images.about01,
  },
  {
    title: "Raven Store",
    description: "This is an E-commerce Frontend page",
    imageUrl: images.ecommerce,
  },
  {
    title: "Todo List",
    description: "Here you can manage all your tasks",
    imageUrl: images.todos,
  },
  {
    title: "Coin Cap",
    description: "Here you can see all the coin and their rates",
    imageUrl: images.about01,
  },
  {
    title: "Raven Store",
    description: "This is an E-commerce Frontend page",
    imageUrl: images.ecommerce,
  },
  {
    title: "Todo List",
    description: "Here you can manage all your tasks",
    imageUrl: images.todos,
  },
];

const Projects = () => {
  return (
    <section className="lg:w-5/6 min-h-screen bg-gray-200">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        id="projects"
      >
        <h2 className="text-3xl pt-20 font-semibold text-slate-700 [&>span]:text-blue-800 text-center">
          My Creative{" "}
          <span>
            Portfolio
            <br />
          </span>{" "}
          Section
        </h2>
        <motion.div transition={{ duration: 0.5, delayChildren: 0.5 }}>
          <div className="flex justify-center flex-wrap mt-4 ">
            {projects.map((item, index) => (
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: Math.random() }}
                className="w-56 lg:w-52 p-2 flex content-start items-start flex-col m-8 cursor-pointer bg-white rounded"
                key={`item.title-${index}`}
              >
                <div className="relative group w-full">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-full h-full lg:h-44 object-cover rounded"
                  />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="absolute invisible group-hover:visible flex justify-evenly items-center bg-black bg-opacity-60 top-0 left-0 z-40 w-full h-full transition-all"
                  >
                    <a href="">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="text-1xl transition-all bg-black text-white rounded-full p-2 bg-opacity-60"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href="">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="text-1xl transition-all bg-black text-white rounded-full p-2 bg-opacity-60"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>

                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
