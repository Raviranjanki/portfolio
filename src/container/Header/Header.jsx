import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <section
      id="home"
      className="flex pt-8 pb-8 justify-center w-full lg:w-5/6 flex-col lg:flex-row"
    >
      <div className="relative lg:pl-14 lg:pt-14">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="absolute h-full top-0 right-0 left-0 flex flex-col z-10 justify-center items-center"
        >
          <div>
            <div>
              <div className="flex justify-center">
                <span className="text-3xl my-auto">👋</span>
                <div className="ml-4">
                  <p className="text-sm">Hello, I am</p>
                  <h1 className="text-3xl lg:text-4xl font-bold font-dm antialiased text-slate-800">
                    Ravi Ranjan Kumar
                  </h1>
                </div>
              </div>
              <p className="uppercase text-right mt-6 text-md">
                Web Developer
              </p>
              <div className="mt-8">
                <button className="animate-bounce bg-slate-800 text-yellow-50 hover:animate-none shadow-lg text-sm px-8 py-3 rounded-full">
                  Hire me
                </button>
                <button className="bg-yellow-50 text-slate-500 text-sm px-8 py-3 rounded-full ml-8 shadow-lg">
                  Download Resume
                </button>
              </div>
              
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex justify-center lg:mt-8"
        >
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="portfolio_circle"
          />
        </motion.div>
      </div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="self-end mx-auto lg:mx-0 lg:center lg:my-auto flex flex-row lg:flex-col"
      >
        {[images.javascript, images.react, images.git].map((circle, index) => (
          <div
            key={`circle-${index}`}
            className="first:w-16 lg:first:ml-2 h-fit [&:nth-of-type(2)]:w-20 [&:nth-of-type(2)]:m-8 last:w-14 rounded-full lg:my-auto p-2 bg-gradient-to-tl from-slate-300"
          >
            <img src={circle} alt="circle" className="w-full h-full object-cover"/>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Header;
