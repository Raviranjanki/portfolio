import React from "react";
import Form from "./Form";
import { motion } from "framer-motion";

const Footer = () => {
  return (
      <section
        id="contact"
        className="lg:w-5/6 min-h-full overflow-hidden bg-white"
      >
        <div className="flex flex-wrap lg:justify-between bg-gradient-to-r from-indigo-300 pt-24">
          <div className="w-full pl-4 lg:w-1/2 xl:w-6/12 flex flex-col justify-center items-center">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.85 }}
            >
              <h3 className="text-4xl font-bold text-slate-900">Let's chat.</h3>
              <h3 className="text-4xl font-bold text-slate-900">
                Tell us about your project.
              </h3>
              <p className="font-medium text-gray-600 mt-8">
                Let's create something together
              </p>
            </motion.div>
          </div>
          <div className="w-full px-4 lg:w-2/4 my-8">
            <motion.div
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.85 }}
            >
              <div className="relative rounded-lg p-8 shadow-lg sm:p-12 bg-blue-600">
                <Form />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Footer;
