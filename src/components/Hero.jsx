// import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  const imgURL = `https://media.licdn.com/dms/image/D5603AQHsVkTlJXP_mw/profile-displayphoto-shrink_800_800/0/1705930018734?e=1720656000&v=beta&t=KbUkuH3BGfdhjed63wlSKH54QHMAC8I__FQXhg-eWBo`;
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16">
      <div className="flex flex-wrap">
        <div className="w-full">
          <motion.div
            initial={{ y: 100, opacity:0 }}
            whileInView={{ y: 0, opacity:1 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="md:pb-6 text-neutral-200 text-7xl tracking-tight font-medium text-center md:pl-6">
              Keshav Priyam
            </h1>
            <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:1, delay:2}}
              viewport={{ once: true }}
            ><img
              className="p-8 h-72 w-72 md:h-96 md:w-96 rounded-full"
              src={imgURL}
              alt="Keshav Priyam"
            />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
