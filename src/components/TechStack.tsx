import React from "react";

const TechStack: React.FC = () => {
  return (
    <section className="mt-20 sm:px-5 md:px-10">
      <div>
        <h3 className="heading-style">Tech Stack</h3>
        <div className="heading-line" />
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="stack-card">
          <h5 className="text-sm tracking-widest font-bold w-fit uppercase text-white">
            Frontend
          </h5>
          <hr className="border border-primary/80 w-35 mt-1 mb-4" />
          <div className="flex flex-wrap gap-3">
            <div className="stack">
              <img src='https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/reactjs.svg' alt="" className="w-5" /> React
            </div>
            <div className="stack">
              <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/typescript.svg" alt="" className="w-5" /> Typscript
            </div>
            <div className="stack">
              <img src='https://cdn.jsdelivr.net/gh/selfhst/icons/svg/javascript.svg' alt="" className="w-5" /> Javascript
            </div>
            <div className="stack">
              <img src='https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/tailwind.svg' alt="" className="w-5" /> Tailwind CSS
            </div>
          </div>
        </div>

        <div className="stack-card">
          <h5 className="text-sm tracking-widest font-bold w-fit uppercase text-white">
            Backend
          </h5>
          <hr className="border border-primary/80 w-35 mt-1 mb-4" />
          <div className="flex flex-wrap gap-3">
            <div className="stack">
              <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/supabase.svg" alt="" className="w-5" /> Superbase
            </div>
            <div className="stack">
              <img src='https://cdn.jsdelivr.net/gh/selfhst/icons/svg/python.svg' alt="" className="w-5" /> Python
            </div>
          </div>
        </div>

        <div className="stack-card">
          <h5 className="text-sm tracking-widest font-bold w-fit uppercase text-white">
            Tools
          </h5>
          <hr className="border border-primary/80 w-35 mt-1 mb-4" />
          <div className="flex flex-wrap gap-3">
            <div className="stack">
              <img src='https://cdn.jsdelivr.net/gh/selfhst/icons/svg/git.svg' alt="" className="w-5" /> Git
            </div>
            <div className="stack">
              <img src='https://cdn.jsdelivr.net/gh/selfhst/icons/svg/docker.svg' alt="" className="w-5" /> Docker
            </div>
            <div className="stack">
              <img src='https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/figma-color.svg' alt="" className="h-5" /> Figma
            </div>
            <div className="stack">
              <img src='https://cdn.jsdelivr.net/gh/selfhst/icons/svg/linux.svg' alt="" className="w-5" /> Linux
            </div>
            <div className="stack">
              <img src='https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vscode.svg' alt="" className="w-5" /> VS Code
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
