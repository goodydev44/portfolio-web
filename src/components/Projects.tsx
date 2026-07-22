import React from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects: React.FC = () => {
  const projectsData = [
    {
      name: "Vellux",
      description:
        "A simple social media platform with user authentication, profile management, post creation and post interactive features. This project introduced me to newer and more efficient tools like supabase which improved my skills and understanding in web development.",
      image:
        "https://res.cloudinary.com/hmcr9ho2/image/upload/v1784671387/vellux_k41jwp.png",
      tools: [
        {
          name: "React",
          link: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/reactjs.svg",
        },
        {
          name: "Typescript",
          link: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/typescript.svg",
        },
        {
          name: "Supabase",
          link: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/supabase.svg",
        },
      ],
      featured: false,
    },
    {
      name: "Ludrack",
      description:
        "A multiplayer music guessing game with real-time gameplay, user profiles, and a gamification system. Being part of the Ludrack team pushed me beyond my comfort zone and helped me grow as a developer by building advanced features with modern tools. Honestl Ludrack has been a very nice experience.",
      image:
        "https://res.cloudinary.com/hmcr9ho2/image/upload/v1784671215/ludrack-img_a58emx.png",
      tools: [
        {
          name: "React",
          link: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/reactjs.svg",
        },
        {
          name: "Typescript",
          link: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/typescript.svg",
        },
        {
          name: "Pocketbase",
          link: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/pocketbase.svg",
        },
        {
          name: "Golang",
          link: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/golang.svg",
        },
      ],
      featured: true,
    },
  ];
  return (
    <section className="mt-20 sm:px-5 md:px-10">
      <div>
        <h3 className="heading-style">Projects</h3>
        <div className="heading-line" />
      </div>
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
          {projectsData.map((project) => (
            <SwiperSlide>
              <div className="project-card">
                <div className="gradient-box" />
                <div>
                  <h5 className="text-base tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
                    {project.name}
                  </h5>
                  <hr className="border border-[#22C55E]/80 w-35 mt-1.5 mb-4" />
                  <p className="text-sm tracking-wide text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <h6 className="text-sm tracking-widest font-bold w-fit uppercase text-[#75D2FA]">
                      Tools
                    </h6>
                    <hr className="border border-[#22C55E]/80 w-25 mt-1.5 mb-4" />
                    <div className="flex flex-wrap gap-4">
                      {project.tools.map((tool) => (
                        <div className="stack">
                          <img src={tool.link} alt="" className="w-5" />{" "}
                          {tool.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="uppercase w-fit text-sm font-black tracking-[0.16em] text-[#A855F7] border-2 mt-5 px-4 py-0.5 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <div className="image-cover">
                    <img src={project.image} alt="" className="stack-img" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
