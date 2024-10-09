import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { Tooltip } from "flowbite-react";
export default function ProjectCard({
  project,
  setCurrentProject,
  setIsDeleteModalOpen,
  setIsAddEditModalOpen,
  setIsEditing,
}) {
  const [showFullDesc, setShowFullDesc] = useState(false);
  /*  console.log(project); */
  const toggleDescription = () => {
    setShowFullDesc(!showFullDesc);
  };
  return (
    <div className="m-2 rounded-lg border-2 h-fit  border-gray-200/70 flex flex-col min-h-[520px] md:my-6 dark:border-gray-200/30">
      <div className="flex justify-between p-2 px-4 items-center gap-2 bg-blue-700 rounded-t-md">
        <div>
          <p className="text-white font-bold text-lg">
            {project.project?.status}
          </p>
        </div>
        <div className="flex">
          <Tooltip content="Delete Project">
            <div
              onClick={() => {
                setCurrentProject(project);
                setIsDeleteModalOpen(true);
              }}
              className="flex justify-center items-center bg-red-600 p-2 rounded-full text-white mx-1 cursor-pointer text-xl font-black"
            >
              <MdDelete />
            </div>
          </Tooltip>
          <Tooltip content="Edit Project">
            <div
              onClick={() => {
                setCurrentProject(project);
                setIsEditing(true);
                setIsAddEditModalOpen(true);
              }}
              className="flex justify-center items-center bg-green-600 p-2 rounded-full text-white mx-1 cursor-pointer text-xl font-black"
            >
              <FaEdit />
            </div>
          </Tooltip>
          <Tooltip content="Show Project">
            <div className="flex justify-center items-center bg-yellow-600 p-2 rounded-full text-white mx-1 cursor-pointer text-xl font-black">
              <BiShow />
            </div>
          </Tooltip>
        </div>
      </div>
      <div>
        <img
          alt="project"
          src={project.project?.coverImage}
          className="rounded-b-lg w-full h-[260px] xl:h-[260px] transition duration-300 ease-in-out"
        />
      </div>

      <div className="p-2 py-3 flex-1 flex flex-col justify-between">
        <h1 className="text-xl font-bold text-[#ec6e59]">
          {project.project?.name}
        </h1>
        <p
          className={`my-3 transition-all duration-300 ${
            showFullDesc
              ? "max-h-full"
              : "max-h-20 overflow-hidden text-ellipsis"
          }`}
        >
          {project.project?.description}
        </p>
        {project.project?.description?.length > 200 && (
          <button
            onClick={toggleDescription}
            className="text-blue-500 underline"
          >
            {showFullDesc ? "Show Less" : "Read More"}
          </button>
        )}

        <div className="flex justify-around items-center mt-auto">
          <a
            href={project.project?.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="flex border-2 border-transparent items-center bg-[#ec6e59] text-white px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-white hover:text-[#ec6e59] hover:border-[#ec6e59]"
          >
            Demo
          </a>
          <a
            href={project.project?.sourceCode}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-4 py-2 border rounded-md border-black text-sm hover:bg-black hover:text-white transition-all duration-300 dark:hover:bg-white dark:hover:text-black dark:border-white"
          >
            <AiFillGithub className="w-6 h-6" /> Code
          </a>
        </div>
      </div>
    </div>
  );
}
