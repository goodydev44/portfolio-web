import React from "react";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import reactIcon from "../assets/icons/react.svg";
import typescriptLogo from "../assets/icons/typescript.svg";
import supabaseLogo from "../assets/icons/supabase.svg";
import pockerbaseLogo from "../assets/icons/pocketbase.svg";
import goLogo from "../assets/icons/golang.svg";
import velluxImg from "../assets/images/Vellux.png";
import ludrackImg from "../assets/images/ludrack-img.png";

const Projects: React.FC = () => {
  return (
    <section className="mt-20 sm:px-5 md:px-10">
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
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop
        >
          <SwiperSlide>
            <div className="project-card">
              <div className="gradient-box" />
              <div>
                <h5 className="text-base tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
                  Vellux
                </h5>
                <hr className="border border-[#22C55E]/80 w-35 mt-1.5 mb-4" />
                <p className="text-sm tracking-wide text-slate-400">
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
              <img src={velluxImg} alt="" className="stack-img" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-card">
              <div className="gradient-box" />
              <div>
                <h5 className="text-base tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
                  Ludrack
                </h5>
                <hr className="border border-[#22C55E]/80 w-35 mt-1.5 mb-4" />
                <p className="text-sm tracking-wide text-slate-400">
                  A multiplayer music guessing game with real-time gameplay,
                  user profiles, and a gamification system. Being part of the
                  Ludrack team pushed me beyond my comfort zone and helped me
                  grow as a developer by building advanced features with modern
                  tools. Honestl Ludrack has been a very nice experience.
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
              <img src={ludrackImg} alt="" className="stack-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
