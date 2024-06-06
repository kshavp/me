// import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import GithubProfile from "./GithubProfile";
import { motion } from "framer-motion";

const Project = () => {
  const initData = {
    avatar_url: "",
    bio: "",
    followers: 0,
    following: 0,
    public_repos: 0,
  };

  const [gitData, setGitData] = useState(initData);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/kshavp")
      .then((res) => {
        const result = res.data;
        setGitData({
          avatar_url: result.avatar_url,
          bio: result.bio,
          followers: result.followers,
          following: result.following,
          public_repos: result.public_repos,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16 text-neutral-200 md:h-full">
      <h2 className="my-12 text-center text-4xl ">Projects</h2>
      <div className="md:flex flex-row justify-around">
        <div className="m-8 md:m-2 flex flex-col md:w-1/2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="mb-12 md:px-12 md:w-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index / 2 }}
              viewport={{ once: true }}
            >
              {index === 0 ? (
                <p className="text-2xl font-bold">
                  {project.title}{" "}
                  <p className="font-thin text-white text-lg mb-4">
                    2nd Position, Inter-Department Hackathon
                  </p>
                </p>
              ) : (
                <p className="text-2xl font-bold">{project.title}</p>
              )}
              <p className="opacity-80">{project.description}</p>
              <div className="flex flex-wrap gap-4 ">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="m-0 md:m-2 md:ml-0 bg-neutral-800 hover:bg-neutral-700 p-2
                                                    rounded-md text-sm font-medium md:font-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <FaExternalLinkAlt
                title={`Link to ${project.title}`}
                className="my-2"
              />
            </motion.div>
          ))}
        </div>
         <GithubProfile className="w-1/2" data={gitData}  />
      </div>
    </div>
  );
};

export default Project;
