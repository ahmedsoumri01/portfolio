import React from "react";
import Project from "../Project.js";
import data from "../../data/projectsData.js";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div id="projects" className="mx-auto container ">
      <div className="my-8">
      <h1 className="w-72 mb-4 px-4 inline border-b-4 border-[#C23B22] tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl sm:mb-4 sm:w-full">
      {t("PROJECTS_TITLE")}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 lg:md:grid-cols-3 lg:p-12">
        {data.ProjectsData.map((project) => {
          return (
            <Project
              key={project.id}
              image={project.img}
              name={project.name}
              live={project.live}
              source={project.source}
              desc={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
