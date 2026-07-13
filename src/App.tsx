import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "./assets/images/Goody.jpg";
import reactIcon from "./assets/icons/react.svg";
import typescriptLogo from "./assets/icons/typescript.svg";
import javascriptLogo from "./assets/icons/javascript.svg";
import tailwindLogo from "./assets/icons/tailwindcss.svg";
import supabaseLogo from "./assets/icons/supabase.svg";
import pythonLogo from "./assets/icons/python.svg";
import gitLogo from "./assets/icons/git.svg";
import dockerLogo from "./assets/icons/docker.svg";
import insomniaLogo from "./assets/icons/insomnia.svg";
import figmaLogo from "./assets/icons/figma.svg";
import linuxLogo from "./assets/icons/linux.svg";
import vscodeLogo from "./assets/icons/vscode.svg";
import pockerbaseLogo from "./assets/icons/pocketbase.svg";
import goLogo from "./assets/icons/golang.svg";
import velluxImg from "./assets/images/Vellux.png";
import ludrackImg from "./assets/images/ludrack-img.png";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen px-[10%] pt-5">
      <div className="w-full bg-blue-300/ pt-30 pb-20">
        <section className="flex justify-between items-center gap-10 px-15">
          <div>
            <h4 className="text- font-black mb-3">
              Available for Freelance Projects
            </h4>
            <hr className="opacity-30 border my-2 border-[#F3F4F7]" />
            <h3 className="text-5xl font-semibold tracking-wide leading-13 mb-5 text-[#75D2FA]">
              Frontend Developer <br /> building modern <br /> web experiences
            </h3>
            <p className="font-medium ">
              I build fast, responsive, and scalable web applications using{" "}
              <br />
              React, TypeScript, and modern frontend technologies. <br />
              I turn designs into clean, functional interfaces that <br />
              users enjoy.
            </p>
          </div>
          <img src={img} alt="" className="h-60 w-60 rounded-full" />
        </section>

        <hr className="opacity-30 border my-7 border-[#F3F4F7]" />

        <section className="mt-10 px-10">
          <h3 className="heading-style">About Me</h3>
          <p>
            I'm a frontend developer passionate about creating clean and
            interactive web experiences. I enjoy transforming ideas and designs
            into real products using modern technologies.
          </p>
        </section>

        <section className="mt-20 px-10">
          <h3 className="heading-style">Tech Stack</h3>
          <div className="grid grid-cols-3 gap-4">
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

        <section className="mt-20 px-10">
          <h3 className="heading-style">Projects</h3>
          <div className="relative">
            <button className="swiper-prev left-1 top-[45%]">
              <IoMdArrowDropleftCircle />
            </button>
            <button className="swiper-next right-1 top-[45%]">
              <IoMdArrowDroprightCircle />
            </button>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
              spaceBetween={20}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
            >
              <SwiperSlide>
                <div className="project-card">
                  <div className="bg-blue-300/ max-w-xl">
                    <h5 className="text-base tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
                      Vellux
                    </h5>
                    <hr className="border border-[#22C55E]/80 w-35 mt-1.5 mb-4" />
                    <p className="text-sm tracking-wide">
                      A simple social media platform with user authentication,
                      profile management, post creation and post interactive
                      features. This project introduced me to newer and more
                      efficient tools like supabase which improved my skills and
                      understanding in web development.
                    </p>
                    <div className="mt-6">
                      <h6 className="text-sm tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
                        Tools
                      </h6>
                      <hr className="border border-[#22C55E]/80 w-25 mt-1.5 mb-4" />
                      <div className="flex flex-wrap gap-4">
                        <div className="stack">
                          <img src={reactIcon} alt="" className="w-5" /> React
                        </div>
                        <div className="stack">
                          <img src={typescriptLogo} alt="" className="w-5" />
                          Typscript
                        </div>
                        <div className="stack">
                          <img src={supabaseLogo} alt="" className="w-5" />
                          Supabase
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src={velluxImg} alt="" className="w-100 rounded-md" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="project-card">
                  <div className="bg-blue-300/ max-w-xl">
                    <h5 className="text-base tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
                      Ludrack
                    </h5>
                    <hr className="border border-[#22C55E]/80 w-35 mt-1.5 mb-4" />
                    <p className="text-sm tracking-wide">
                      A multiplayer music guessing game with real-time gameplay,
                      user profiles, and a gamification system. Being part of
                      the Ludrack team pushed me beyond my comfort zone and
                      helped me grow as a developer by building advanced
                      features with modern tools. Honestl Ludrack has been a
                      very nice experience.
                    </p>
                    <div className="mt-6">
                      <h6 className="text-sm tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
                        Tools
                      </h6>
                      <hr className="border border-[#22C55E]/80 w-25 mt-1.5 mb-4" />
                      <div className="flex flex-wrap gap-4">
                        <div className="stack">
                          <img src={reactIcon} alt="" className="w-5" /> React
                        </div>
                        <div className="stack">
                          <img src={typescriptLogo} alt="" className="w-5" />
                          Typscript
                        </div>
                        <div className="stack">
                          <img src={pockerbaseLogo} alt="" className="w-5" />
                          Pocketbase
                        </div>
                        <div className="stack">
                          <img src={goLogo} alt="" className="w-5" />
                          Golang
                        </div>
                      </div>
                    </div>
                    <div className="uppercase w-fit text-sm font-black tracking-[0.16em] text-[#A855F7] border-2 mt-5 px-4 py-0.5 rounded-full">
                      Featured
                    </div>
                  </div>
                  <img src={ludrackImg} alt="" className="w-100 rounded-md" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="mt-20 px-10">
          <h3 className="heading-style">My Journey</h3>
          <p className="tracking-wide">
            My journey as a developer has been incredibly rewarding. I started
            by building serverless single-page applications to strengthen my
            frontend skills. From there, I progressed to integrating backend
            APIs with my frontend applications before adopting cloud backend
            services like Supabase to build more scalable and efficient
            full-stack applications. Honestly my Journey as a developer has been
            a really wonderfull experience.
          </p>
        </section>
        <section className="mt-20 px-10">
          <h3 className="heading-style">Contact Me</h3>
          <p className="text-xl font-semibold">Got a Project idea?</p>
          <p className="text-sm tracking-wide">
            Let's bring your ideas to life.
          </p>
          <div className="flex gap-4 mt-5">
            <div className="flex gap-2 items-end font-medium">
              <FiMail className="text-2xl" />
              <span>goodyewoma44@gmail.com</span>
            </div>
            <a href="https://www.instagram.com/goodyunitydev/" target="_blank">
              <div className="flex gap-2 items-end font-medium">
                <BsInstagram className="text-2xl" />
                <span>GoodyUnityDev</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/goodness-edward-3ba82232b/"
              target="_blank"
            >
              <div className="flex gap-2 items-end font-medium">
                <FaLinkedin className="text-2xl" />
                <span>Goodness Edward</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
