import React from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="w-full h-full px-[2%] sm:px[4%] md:px-[6%] lg:px-[9%] xl:px-[11%] 2xl:px-[15%] pt-5">
      <div className="w-full pt-30 pb-20">
        <Hero />
        <hr className="opacity-30 border mt-10 mb-15 border-[#F3F4F7]" />
        <AboutMe />
        <TechStack />
        <Projects />
        <Journey />
        <Contact />
      </div>
    </div>
  );
};

export default App;
