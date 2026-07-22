import React from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="w-full h-full px-[2%] sm:px[4%] md:px-[6%] lg:px-[9%] xl:px-[11%] 2xl:px-[15%] pt-35 pb-20">
      <Hero />
      <div className="seperator" />
      <AboutMe />
      <div className="seperator" />
      <TechStack />
      <div className="seperator" />
      <Projects />
      <div className="seperator" />
      <Journey />
      <div className="seperator" />
      <Contact />
    </div>
  );
};

export default App;
