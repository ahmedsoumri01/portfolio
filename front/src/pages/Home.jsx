import React from "react";
import Main from "../components/homePage/Main";
import Contact from "../components/homePage/Contact";
import Experiences from "../components/homePage/Experiences";
import Navbar from "../components/Navbar";
import Projects from "../components/homePage/Projects";
import BackgroundView from "../Layout/BackgroundView";
import Skills from "../components/homePage/Skills";
import ScrollToTopButton from "../components/ScrollToTopButton";
export default function Home() {
  return (
    <>
      <BackgroundView>
        <div className="font-poppins select-none text-black bg-white dark:bg-[#20262E] dark:text-white  transition duration-500">
          <Navbar />
          <Main />
          <Projects />
          <Skills />

          <Experiences />
          <Contact />
        </div>
      </BackgroundView>
      <ScrollToTopButton />
    </>
  );
}
