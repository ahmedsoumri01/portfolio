import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LOGO from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeProvider";
import DarkModeToggle from "react-dark-mode-toggle";
import LanguageChanger from "../LanguageChanger";
import { useTranslation } from "react-i18next";

export default function AdminNavBar() {
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
      <div className="bg-white dark:bg-[#20262E] mb-1 flex justify-between items-center py-2 px-4 text-black">
        <div className="md:hidden lg:block  ">
          <Link to="/">
            <img
              src={LOGO}
              alt="logo"
              className="h-[2vw] min-h-[60px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center">
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
