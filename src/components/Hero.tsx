import React from "react";
import img from "../assets/images/Goody.jpg";
import { TbMinusVertical } from "react-icons/tb";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 sm:px-5 md:px-10 lg:px-15">
      <div className="relative">
        <div className="absolute w-56 h-56 bg-blue-500/15 blur-3xl rounded-full -left-12 -top-12 -z-10" />
        <h4 className="text-xl font-semibold text-blue-400">
          Hi, I'm Goodness
        </h4>
        <hr className="h-px bg-blue-400 mb-10" />
        <h3 className="text-4xl lg:text-5xl xl:text-7xl font-medium tracking-wide xl:tracking-normal leading-tight mb-5 lg:mb-15 text-text">
          Software Developer <br /> building <span className="text-primary">modern</span> <br /> web experiences
        </h3>
        <p className="font-light text-lg tracking-wide text-secondary">
          I build fast, responsive, and scalable web applications using{" "}
          <br className="hidden lg:block" />
          React, TypeScript, Supabase and modern software development
          <br className="hidden lg:block" />
          technologies. I turn designs into clean, functional interfaces that{" "}
          <br className="hidden lg:block" />
          users enjoy.
        </p>
        <div className="flex items-center font-bold mt-7 text-slate-400 text-xl">
          <TbMinusVertical className="text-4xl" /> Available for Frelance
          Projects
        </div>
      </div>
      <img
        src={img}
        alt="Profile Pic"
        className="h-60 w-60 rounded-full shadow-[0_0_50px_rgba(59,130,246,.18)]"
      />
    </section>
  );
};

export default Hero;
