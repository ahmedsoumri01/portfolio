import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LOGO from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useDarkMode } from "./DarkModeProvider";
import DarkModeToggle from "react-dark-mode-toggle";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from 'react-i18next';

 function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({
        behavior: "smooth",
        duration: 2000,
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 640 && showMenu) {
      setShowMenu(false);
    }
  };
  // to handle window resize for mobile view
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [showMenu]);

  return (
    <>
      <div className="flex mt-[-2px] justify-between py-[2rem] pl-[3.5rem] pr-[3.5rem] sm:px-[1.5rem] items-center relative">
        {/* {colorTheme === 'dark' ? (
                     <TbWorldCode alt="logo" className="h-[2vw] min-h-[35px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]" />  
                    <img src={LOGO} alt="logo" className="h-[2vw] min-h-[35px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]" />
                ) : (
                    <TbWorldCode className="h-[2w] min-h-[35px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]" />
                )} */}
                
        <div>
          <Link to="/">
            <img
              src={LOGO}
              alt="logo"
              className="h-[2vw] min-h-[60px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]"
            />
          </Link>
        </div>
        {!showMenu && (
          <ul className="hidden  md:flex font-[400] text-black dark:text-white dark:font-[300] text-custom-20 gap-[5rem] md:gap-[3rem] lg:gap-4rem">
            <Link
              className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] hover:text-[#ff9582]"
              onClick={() => scrollToComponent("experience")}
            >
             { t("NAV_ITEM_EXPeRIence") }
            </Link>
            <Link
              className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] hover:text-[#ff9582]"
              onClick={() => scrollToComponent("projects")}
            >
            { t("NAV_ITEM_PROJECTS") }
            </Link>
            <Link
              className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] hover:text-[#ff9582]"
              onClick={() => scrollToComponent("skills")}
            >
              { t("NAV_ITEM_SKILLS") }
            </Link>

            <Link
              className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] hover:text-[#ff9582]"
              onClick={() => scrollToComponent("projects")}
            >
              { t("NAV_ITEM_RESUME") }
            </Link>
            <Link
              className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] hover:text-[#ff9582]"
              onClick={() => scrollToComponent("contact")}
            >
              { t("NAV_ITEM_CONTACT") }
            </Link>
          </ul>
        )}
        <div className="flex">
          <div className="md:hidden absolute top-[2rem] right-[3.5rem]">
            <GiHamburgerMenu
              className="h-6 w-6 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          {showMenu && (
            <ul className="flex flex-col font-[400] text-black dark:font-[300] text-custom-20 gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-[#fdd6cf] p-4 shadow-md rounded">
              <Link
                className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                onClick={() => scrollToComponent("experience")}
              >
                
                {
                  t("NAV_ITEM_EXPeRIence")
                }
              </Link>
              <Link
                className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                onClick={() => scrollToComponent("projects")}
              >
                 
                { t("NAV_ITEM_PROJECTS") }
              </Link>
              <Link
                className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                onClick={() => scrollToComponent("projects")}
              >
                 { t("NAV_ITEM_SKILLS") }
              </Link>

              <Link
                className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                onClick={() => scrollToComponent("projects")}
              >
                { t("NAV_ITEM_RESUME") }
              </Link>
              <Link
                className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                onClick={() => scrollToComponent("contact")}
              >
                { t("NAV_ITEM_CONTACT") }
              </Link>
            </ul>
          )}
        </div>
        <div className="flex items-center">
        <LanguageChanger />

          <DarkModeToggle
            onChange={toggleDarkMode}
            className="ml-2"
            checked={isDarkMode}
            size={60}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
