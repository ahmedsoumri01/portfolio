import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import skillsData from "../../data/skillsData";
export default function Skills() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skills" className="mx-auto container">
      <div className="my-8 p-2">
        <h1 className="w-72  px-4mb-4 inline border-b-4 border-[#C23B22] tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl sm:mb-4 sm:w-full">
          {t("SKILLS_SECTION_TITLE")}
        </h1>
      </div>

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-4">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 rounded-md p-1"
            >
              <img
                src={skill.logo}
                className="w-20 p-1 mx-auto"
                alt={skill.skill}
              />
              <p className="my-4">{skill.skill}L</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
