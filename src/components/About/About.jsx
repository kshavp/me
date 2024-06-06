// import React from 'react'
import { ABOUT_DEV_SEC } from "../../constants";
import { motion } from "framer-motion";
import Card from './Card';
import Education from "./Education";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16 text-neutral-200 md:h-screen">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="my-12 text-center text-4xl "
      >
        Me ?
      </motion.h2>

      {/* About and Description */}
      <div className="m-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          viewport={{ once: true }}
          className="mb-12 font-thin md:text-2xl text-center"
        >
          {ABOUT_DEV_SEC}
        </motion.p>
        <div className="">
          <Card />
        </div>
      </div>

    {/* Education */}
    <Education />

    </div>
  );
};

export default About;
