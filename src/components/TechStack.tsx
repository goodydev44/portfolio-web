import React from "react";
import reactIcon from "../assets/icons/react.svg";
import typescriptLogo from "../assets/icons/typescript.svg";
import supabaseLogo from "../assets/icons/supabase.svg";
import javascriptLogo from "../assets/icons/javascript.svg";
import tailwindLogo from "../assets/icons/tailwindcss.svg";
import pythonLogo from "../assets/icons/python.svg";
import gitLogo from "../assets/icons/git.svg";
import dockerLogo from "../assets/icons/docker.svg";
import insomniaLogo from "../assets/icons/insomnia.svg";
import figmaLogo from "../assets/icons/figma.svg";
import linuxLogo from "../assets/icons/linux.svg";
import vscodeLogo from "../assets/icons/vscode.svg";

const TechStack: React.FC = () => {
  return (
    <section className="mt-20 sm:px-5 md:px-10">
      <h3 className="heading-style">Tech Stack</h3>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="stack-card">
          <h5 className="text-sm tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
            Frontend
          </h5>
          <hr className="border border-[#22C55E]/80 w-35 mt-1 mb-4" />
          <div className="flex flex-wrap gap-3">
            <div className="stack">
              <img src={reactIcon} alt="" className="w-5" /> React
            </div>
            <div className="stack">
              <img src={typescriptLogo} alt="" className="w-5" /> Typscript
            </div>
            <div className="stack">
              <img src={javascriptLogo} alt="" className="w-5" /> Javascript
            </div>
            <div className="stack">
              <img src={tailwindLogo} alt="" className="w-5" /> Tailwind CSS
            </div>
          </div>
        </div>

        <div className="stack-card">
          <h5 className="text-sm tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
            Backend
          </h5>
          <hr className="border border-[#22C55E]/80 w-35 mt-1 mb-4" />
          <div className="flex flex-wrap gap-3">
            <div className="stack">
              <img src={supabaseLogo} alt="" className="w-5" /> Superbase
            </div>
            <div className="stack">
              <img src={pythonLogo} alt="" className="w-5" /> Python
            </div>
          </div>
        </div>

        <div className="stack-card">
          <h5 className="text-sm tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
            Tools
          </h5>
          <hr className="border border-[#22C55E]/80 w-35 mt-1 mb-4" />
          <div className="flex flex-wrap gap-3">
            <div className="stack">
              <img src={gitLogo} alt="" className="w-5" /> Git
            </div>
            <div className="stack">
              <img src={dockerLogo} alt="" className="w-5" /> Docker
            </div>
            <div className="stack">
              <img src={insomniaLogo} alt="" className="w-5" /> Insomnia
            </div>
            <div className="stack">
              <img src={figmaLogo} alt="" className="h-5" /> Figma
            </div>
            <div className="stack">
              <img src={linuxLogo} alt="" className="w-5" /> Linux
            </div>
            <div className="stack">
              <img src={vscodeLogo} alt="" className="w-5" /> VS Code
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
