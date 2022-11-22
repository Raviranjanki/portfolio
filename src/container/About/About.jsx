import { motion } from "framer-motion";
import React, { state, useEffect } from "react";
import { images } from "../../constants";

const abouts = [
  {
    title: "Web Developer",
    description: "I am a good web developer",
    imageUrl: images.about01,
  },
  {
    title: "UI/UX Designer",
    description: "I am a good web developer",
    imageUrl: images.about02,
  },
  {
    title: "Web Developer",
    description: "I am a good web developer",
    imageUrl: images.about03,
  },
  {
    title: "Web Developer",
    description: "I am a good web developer",
    imageUrl: images.about04,
  },
];

const About = () => {
  return (
    <section id="about" className="lg:w-5/6 min-h-screen">
      <h2 className="text-3xl font-semibold text-slate-700 pt-4 [&>span]:text-blue-800 text-center">
        I Know That{" "}
        <span>
          Good Development
          <br />
        </span>{" "}
        means <span>Good Business</span>
      </h2>

      <div className="flex justify-center items-start flex-wrap mt-4">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{scale: [0, 1], opacity: [0, 1]}}
            transition={{duration: Math.random()}}
            key={`about.title-${index}`}
          >
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="w-44 flex content-start items-start flex-col m-8 cursor-pointer"
            >
              <img
                className="w-full h-44 rounded-md object-cover"
                src={about.imageUrl}
                alt={about.title}
              />
              <h2 className="font-medium">{about.title}</h2>
              <p className="text-sm">{about.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
