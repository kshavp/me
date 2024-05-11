// import React from 'react'
import { FaNodeJs, FaPhp, FaDocker, FaLinux } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiTypescript, SiFirebase, SiKalilinux, SiWireshark, SiMysql, SiGnubash, SiCsharp, SiMui } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16 text-neutral-200">
        <h2 className='my-12 text-center text-4xl '>Skills</h2>
        <div className="flex flex-wrap text-5xl gap-8 justify-center">
            <FaNodeJs title="NodeJS" className="text-green-400" />
            <RiReactjsLine title="ReactJS" className="text-blue-400" />
            <SiMongodb title="MongoDB" className="text-green-500" />
            <SiFirebase title="Firebase" className="text-yellow-500" />
            <SiTypescript title="TypeScript" className="text-blue-600" />
            <RiTailwindCssFill title="TailwindCSS" className="text-teal-400"/>
            <SiMui title="MaterialUI" className="text-blue-600" />
            <SiMysql title="MySQL" className="text--300" />
            <BiLogoPostgresql title="PostgreSQL"className="text-blue-400" />
            <FaJava title="Java"/>
            <TbBrandCpp title="C++"/>
            <SiCsharp title="C#" className="text-purple-500"/>
            <FaPhp title="PHP" className="text-violet-400" />
            <FaDocker title="Docker" className="text-blue-600" />
            <SiGnubash title="Bash"/>
            <FaLinux title="Linux"/>
            <SiKalilinux title="Kali" className="text--300" />
            <SiWireshark title="WireShark" className="text-blue-300" />
        </div>
    </div>
  )
}

export default Skills