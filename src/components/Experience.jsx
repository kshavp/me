// import React from 'react'
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16 text-neutral-200 md:h-full">
      <h2 className="my-12 text-center text-4xl ">Experience</h2>
      <div className="m-8 md:m-2">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-20 flex flex-wrap justify-center">
            <motion.div className="w-full lg:w-1/4 text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index / 2 }}
            viewport={{ once: true }}
            >
              <p className="mb-2">{exp.year} </p>
              <img
                src={exp.image}
                alt={exp.company}
                className="h-36 w-36 rounded-full mx-auto my-2"
              />
            </motion.div>
            <motion.div
              className="w-full max-w-xl md:w-3/4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index / 2 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 hidden md:block">
                {exp.role}, <b>{exp.company}</b> | <i>{exp.location}</i>
              </p>
              <p className="mb-2 md:hidden flex flex-col">
                <p>{exp.role}</p>
                <p className="font-bold">{exp.company}</p>
                <p className="italic">{exp.location}</p>
              </p>

              <p className="font-light mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-4">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="m-0 md:m-2 md:ml-0 bg-green-700 p-2 rounded-md text-sm font-medium md:font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
