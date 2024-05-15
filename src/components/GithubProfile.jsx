import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoRepo } from "react-icons/go";
import { RiUserFollowFill } from "react-icons/ri";
import { SlUserFollowing } from "react-icons/sl";

const GithubProfile = (props) => {
  const data = props.data;
  return (
    <div className="bg-neutral-800 md:w-1/5 h-1/2 flex flex-col items-center m-4 p-8 gap-4 rounded-lg group">
      <h1 className="text-3xl font-thin">{"GitHub Stats"}</h1>
      <FaExternalLinkAlt
        title={`Link to github/kshavp`}
        className="relative top-20 opacity-0 group-hover:opacity-100 group-hover:brightness-200 transition"
      />
      <a href="https://github.com/kshavp" className="w-1/2 group-hover:opacity-50 group-hover:brightness-20 transition" target="_blank">
        <img
            className="rounded-full p-2 outline outline-1 outline-offset-2 outline-green-300"
            src={data.avatar_url}
            alt="Keshav Priyam"
        />
      </a>
      <h1 className="text-3xl font-bold">{"kshavp"}</h1>
      <div className="grid grid-cols-3 font-semibold text-lg items-center">
        <RiUserFollowFill /> <p className="font-thin">Followers </p>{" "}
        <p className="text-right">{data.followers}</p>
        <SlUserFollowing /> <p className="font-thin">Following </p>{" "}
        <p className="text-right">{data.following}</p>
        <GoRepo /> <p className="font-thin">Repositories </p>{" "}
        <p className="text-right"> {data.public_repos}</p>
      </div>
    </div>
  );
};

export default GithubProfile;
