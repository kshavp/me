// import React from 'react'
import { FaNodeJs, FaPhp, FaDocker, FaLinux } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTypescript, SiFirebase, SiKalilinux, SiWireshark, SiMysql, SiGnubash, SiCsharp } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16 text-neutral-200">
        <h2 className='my-12 text-center text-4xl '>Skills</h2>
        <div className="flex flex-wrap text-5xl gap-8 justify-center">
            <FaNodeJs />
            <RiReactjsLine />
            <SiMongodb /> 
            <SiFirebase /> 
            <SiTypescript />
            <SiMysql />
            <FaJava />
            <TbBrandCpp />
            <SiCsharp />
            <FaPhp />
            <FaDocker />
            <SiGnubash />
            <FaLinux />
            <SiKalilinux /> 
            <SiWireshark /> 
        </div>
    </div>
  )
}

export default Skills