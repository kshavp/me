// import React from 'react'
import { FaNodeJs, FaPhp, FaDocker, FaLinux, FaPython, FaAws, FaEye } from "react-icons/fa";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiTypescript, SiFirebase, SiKalilinux, SiWireshark, SiMysql, SiGnubash, SiCsharp, SiMui, SiNextdotjs, SiMetasploit } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-32 text-neutral-200 md:h-full">
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5, delay:1}} className='my-12 text-center text-4xl '>Skills</motion.h2>
        <motion.div 
          initial={{opacity:0, y:-50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:1}}
          viewport={{ once: true }}
          // className="flex md:w-2/3 flex-wrap text-5xl gap-8 justify-center mx-auto">
          className="grid grid-cols-4 text-5xl gap-x-0.5 gap-y-8 mx-auto justify-items-center md:w-3/4">
            <FaNodeJs title="NodeJS" className="text-green-400" />
            <RiReactjsLine title="ReactJS" className="text-blue-400" />
            <SiNextdotjs title="NextJS" className="" />
            <SiMongodb title="MongoDB" className="text-green-500" />
            <SiFirebase title="Firebase" className="text-yellow-500" />
            <SiTypescript title="TypeScript" className="text-blue-600" />
            <RiTailwindCssFill title="TailwindCSS" className="text-teal-400"/>
            <SiMui title="MaterialUI" className="text-blue-600" />
            <SiMysql title="MySQL" className="text--300" />
            <BiLogoPostgresql title="PostgreSQL"className="text-blue-400" />
            <FaJava title="Java"/>
            <TbBrandCpp title="C++"/>
            <SiCsharp title="C#" className="text-purple-500" />
            <FaPython title="Python" className="text-yellow-200" />
            <FaPhp title="PHP" className="text-violet-400" />
            <FaDocker title="Docker" className="text-blue-600" />
            <FaAws title="AWS" className="text-orange-400" />
            <SiGnubash title="Bash"/>
            <FaLinux title="Linux"/>
            <SiKalilinux title="Kali" />
            <SiWireshark title="WireShark" className="text-blue-300" />
            <SiMetasploit title="Metasploit" className="text-blue-400"/>
            <h1 className="text-2xl text-blue-200" title="Nmap">Nmap</h1>
            <h1 className="text-2xl text-yellow-500" title="Maltego">Maltego</h1>
        </motion.div>
    </div>
  )
}

export default Skills