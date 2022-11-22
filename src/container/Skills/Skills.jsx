import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

const skills = [
  { name: "JavaScript", imageUrl: images.javascript },
  { name: "Tailwind", imageUrl: images.tailwind },
  { name: "CSS", imageUrl: images.css },
  { name: "HTML", imageUrl: images.html },
  { name: "React Js", imageUrl: images.react },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="lg:w-5/6 py-14 lg:min-h-screen overflow-hidden"
    >
      <motion.h2
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-3xl font-semibold text-slate-700 pt-4 [&>span]:text-blue-800 text-center"
      >
        Skills & Exprience
      </motion.h2>

      <div className="lg:w-3/4 mx-auto flex flex-wrap lg:flex-nowrap justify-between mt-14">
        <motion.div className="flex flex-wrap w-max mx-auto">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              key={skill.name}
              className="m-3 lg:m-4 text-center"
            >
              <motion.div
                whileHover={{ scale: [0.9, 1.1] }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gray-200 rounded-full cursor-pointer w-16 h-16 shadow-xl"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-full h-full object-cover p-4"
                />
              </motion.div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="lg:w-1/2 overflow-hidden"
        >
          <div className="flex mx-8">
            <span className="text-blue-700 font-medium">2022</span>
            <div className="mx-10">
              <h2 className="font-medium text-md">Frontend Developer</h2>
              <p className=" text-xs">UcodeSoft Private Ltd.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
