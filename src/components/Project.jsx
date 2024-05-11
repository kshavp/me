// import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16 text-neutral-200">
        <h2 className='my-12 text-center text-4xl '>Projects</h2>
        <div className="m-8 md:m-2 flex flex-col items-center">
            {PROJECTS.map((project,index)=>(
                <div key={index} className="mb-12 md:px-12 md:w-1/2">
                    <p className="text-2xl font-bold">{project.title}</p>
                    <p className="opacity-80">{project.description}</p>
                    <div className="flex flex-wrap gap-4">
                        {project.technologies.map((tech,index)=>(
                            <span key={index} className="m-0 md:m-2 md:ml-0 bg-neutral-800 hover:bg-neutral-700 p-2 rounded-md text-sm font-medium md:font-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <FaExternalLinkAlt title={`Link to ${project.title}`} className="my-2"/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project