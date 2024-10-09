import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

function Project({ image, name, live, source, desc }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDescription = () => {
    setShowFullDesc(!showFullDesc);
  };

  return (
    <div className="m-4 rounded-lg border-2 h-fit  border-gray-200/70 flex flex-col min-h-[650px] md:my-6 dark:border-gray-200/30">
      <div className="relative group">
        <img
          alt="project"
          src={image}
          className="rounded-lg w-full h-[350px] xl:h-[390px] transition duration-300 ease-in-out group-hover:blur-sm"
        />
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 mb-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <button className="bg-[#ec6e59] text-white px-4 py-2 rounded-md hover:bg-white hover:border-2 hover:text-black hover:border-[#ec6e59]">
            More Details
          </button>
        </div>
      </div>

      <div className="p-2 py-3 flex-1 flex flex-col justify-between">
        <h1 className="text-xl font-bold text-[#ec6e59]">{name}</h1>
        <p
          className={`my-3 transition-all duration-300 ${
            showFullDesc
              ? "max-h-full"
              : "max-h-20 overflow-hidden text-ellipsis"
          }`}
        >
          {desc}
        </p>
        {desc.length > 200 && (
          <button
            onClick={toggleDescription}
            className="text-blue-500 underline"
          >
            {showFullDesc ? "Show Less" : "Read More"}
          </button>
        )}

        <div className="flex justify-around items-center mt-auto">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex border-2 border-transparent items-center bg-[#ec6e59] text-white px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-white hover:text-[#ec6e59] hover:border-[#ec6e59]"
          >
            Demo
          </a>
          <a
            href={source}
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

export default Project;
