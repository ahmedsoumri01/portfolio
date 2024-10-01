import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

function Projects({ image, name, live, source, desc }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDescription = () => {
    setShowFullDesc(!showFullDesc);
  };

  return (
    <div className="m-4 rounded-lg border-2 border-gray-200/30 flex flex-col h-full md:my-6">
      <div className="relative">
      <img
        alt="project"
        src={image}
        className="rounded-lg w-full h-[350px] xl:h-[390px]"
      />
      <div className="absolute top-0">
        more details
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
            className="flex items-center bg-[#ec6e59] text-white px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-[#ec6e59] hover:text-[#ec6e59] "
          >
            Demo
          </a>
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-4 py-2 border border-black rounded-md text-sm bg-white dark:bg-[#20262E] transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-black hover:text-black hover:bg-white"
          >
            <AiFillGithub className="w-6 h-6" /> Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
