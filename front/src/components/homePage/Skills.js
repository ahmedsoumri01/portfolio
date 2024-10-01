import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skills" className="">
      <div className="mx-auto container">
        <h1 className="w-72 mb-4 inline border-b-4 border-[#C23B22] tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl sm:mb-4 sm:w-full">
          {t("PROJECTS_TITLE")}
        </h1>
      </div>

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-4">
          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md">
            <div data-aos="zoom-in-up" data-aos-duration="1000">
              <img src={"HTML"} className="w-20 mx-auto" alt="html icon" />
              <p className="my-4">HTML</p>
            </div>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md">
            <div data-aos="zoom-in-up" data-aos-duration="1500">
              <img src={"CSS"} className="w-20 mx-auto" alt="css icon" />
              <p className="my-4">CSS</p>
            </div>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md">
            <div data-aos="zoom-in-up" data-aos-duration="2000">
              <img
                src={"JavaScript"}
                className="w-20 mx-auto"
                alt="javascript icon"
              />
              <p className="my-4">JavaScript</p>
            </div>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md">
            <div data-aos="zoom-in-up" data-aos-duration="2500">
              <img
                src={"ReactLogo"}
                className="w-20 mx-auto"
                alt="react icon"
              />
              <p className="my-4">ReactJs</p>
            </div>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md">
            <div data-aos="zoom-in-up" data-aos-duration="3000">
              <img
                src={"GithubLogo"}
                className="w-20 mx-auto"
                alt="github icon"
              />
              <p className="my-4">Github</p>
            </div>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md">
            <div data-aos="zoom-in-up" data-aos-duration="3500">
              <img
                src={"FirebaseLogo"}
                className="w-20 mx-auto"
                alt="firebase icon"
              />
              <p className="my-4">Firebase</p>
            </div>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md">
            <div data-aos="zoom-in-up" data-aos-duration="4000">
              <img
                src={"TailwindLogo"}
                className="w-20 mx-auto"
                alt="tailwind icon"
              />
              <p className="my-4">Tailwind CSS</p>
            </div>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md">
            <div data-aos="zoom-in-up" data-aos-duration="4500">
              <img
                src={"NodeJsLogo"}
                className="w-20 mx-auto"
                alt="nodejs icon"
              />
              <p className="my-4">Nodejs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
