import React from "react";
import img from "../assets/images/Goody.jpg";
import { TbMinusVertical } from "react-icons/tb";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 sm:px-5 md:px-10 lg:px-15">
      <div className="relative">
        <div className="absolute size-45 bg-cyan-600/20 opacity-40 blur-xl rounded-full -left-5 -top-5" />
        <h4 className="text-lg font-black mb-3">Hi, I'm Goodness</h4>
        <hr className="opacity-30 border my-2 border-[#F3F4F7]" />
        <h3 className="text-4xl lg:text-5xl font-semibold tracking-wide leading-13 mb-5 text-[#75D2FA]">
          Frontend Developer <br /> building modern <br /> web experiences
        </h3>
        <p className="font-medium">
          I build fast, responsive, and scalable web applications using{" "}
          <br className="hidden lg:block" />
          React, TypeScript, and modern frontend technologies.{" "}
          <br className="hidden lg:block" />I turn designs into clean,
          functional interfaces that <br className="hidden lg:block" />
          users enjoy.
        </p>
        <div className="flex items-end font-bold mt-7 text-slate-400">
          <TbMinusVertical className="text-3xl" /> Available for Frelance
          Projects
        </div>
      </div>
      <img
        src={img}
        alt="Profile Pic"
        className="h-60 w-60 rounded-full shadow-2xl"
      />
    </section>
  );
};

export default Hero;
