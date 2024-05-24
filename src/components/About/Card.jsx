// import React from "react";
import { PiStackFill } from "react-icons/pi";
import { SiCyberdefenders } from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";
import { motion } from "framer-motion";

const interestContext = [
  {
    context: "Cyber Security",
    icon: <SiCyberdefenders />,
    style: "text-red-300",
  },
  {
    context: "Full Stack Development",
    icon: <PiStackFill />,
    style: "text-green-300",
  },
  {
    context: "Cloud Infra-Architecture",
    icon: <TbCloudComputing />,
    style: "text-blue-300",
  },
];

const Card = () => {
  return (
    <div className="md:mt-12 my-12 flex md:flex-row flex-col items-center gap-4 justify-around">
      {interestContext.map((interest, index) => (
        <div key={index}>
          <motion.div
            className={`flex items-center gap-4 font-medium md:text-3xl mx-auto ${interest.style}`}
            initial={{opacity:0, y:-100}}
            whileInView={{opacity:1, y:0}}
            transition={{delay:1, duration:1}}
          >
            <span className="">{interest.icon}</span>
            <p>{interest.context}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Card;
