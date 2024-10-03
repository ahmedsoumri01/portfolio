import React from "react";
// import Typed from 'react-typed';
import myImage from "../../assets/main_image.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Typewriter from "../Typewriter";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

  return (
    <div id="main" className="container mx-auto my-6 p-2">
      <div className="grid grid-cols-1 p-2 gap-4 md:grid-cols-2">
        <div>
          <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
            {t("MAIN_TITLE_P1")}
          </h1>
          <blockquote className="font-[800] text-[2rem] text-[#ec6e59;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
            {t("MAIN_TITLE_P2")}
            <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#ec6e59;] relative inline-block">
              <span className="relative text-[#fffffff0] dark:text-[#20262E]">
                {t("MAIN_TITLE_FULL_NAME")}
              </span>
            </span>
          </blockquote>
          <div className="h-10 mt-4">
            <Typewriter />
          </div>
          <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
            {t("MAIN_DESCRIPTION")}
          </p>
        </div>
        <div>
          <div className="flex py-[10px] tm:mt-[40px] items-start mt-[-30px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col">
            <div className="box">
              <div className="h-full justify-end flex items-center sm:justify-center">
                <img
                  src={myImage}
                  alt="main"
                  className="h-[80%] min-h-[100px] min-w-[100px] tm:h-[36px] tm:mt-[200px] sm:min-h-[100px] sm:min-w-[100px] sm:ml-[30px]"
                />
              </div>
            </div>
          </div>

          <div className="fixed right-2 bottom-20 z-30 bg-black p-2 py-4 rounded-t-full rounded-b-full ">
            <div className="flex flex-row sm:flex-col gap-4">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/ahmed-soumri/"
                target="_blank"
                className="transition-all ease-in-out hover:text-blue-600"
              >
                <AiFillLinkedin size={40} className="cursor-pointer" />
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/ahmedsoumri01"
                target="_blank"
                className="transition-all ease-in-out hover:text-gray-500"
              >
                <AiFillGithub size={40} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
