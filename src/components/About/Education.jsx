import React from "react";
import { motion } from "framer-motion";
import { Edu } from "../../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16 text-neutral-200">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, delay:0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-thin text-3xl "
      >
        Education
      </motion.h2>

      <motion.div 
        className="md:flex justify-around items-center"
        initial={{opacity:0, x:100}}
        whileInView={{ opacity: 1, x:0 }}
        transition={{ duration: 2, delay:2 }}
        viewport={{ once: true }}
        >
        {Edu.map((edu, index) => (
          <div key={index} className="">
            <div className="bg-neutral-400 rounded-xl p-6 text-center backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              <p className="font-bold text-sm">{edu.duration}</p>
              <p className="mb-4 font-thin text-xl">{edu.institute}</p>
              <img
                src={edu.image}
                alt=""
                className={`w-32 mb-4 mx-auto ${
                  index === 0 ? "rounded-full" : ""
                }`}
              />
              <p className="font-medium text-2xl">{edu.course}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
