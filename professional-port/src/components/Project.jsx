import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/calc.png";


import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Calculator",
      github_link: "https://calculator-vivek.vercel.app/",
      live_link: "https://calculator-vivek.vercel.app/",
    },
    // {
    //   img: project2,
    //   name: "Landing Page",
    //   github_link: "https://vercel.com/deepakp2411/landing-page",
    //   live_link: "https://vercel.com/deepakp2411/landing-page",
    // },
    // {
    //   img: project3,
    //   name: "Dummy-Text-Generator",
    //   github_link: "https://deepak-lorem-ipsum.vercel.app/",
    //   live_link: "https://deepak-lorem-ipsum.vercel.app/",
    // },
    // {
    //   img: project4,
    //   name: "Review-slider",
    //   live_link: "https://react-projects-zv9y.vercel.app/",
    //   github_link: "https://react-projects-zv9y.vercel.app/",
    // },
    // {
    //   img: project5,
    //   name: "Vue Country",
    //   github_link: "https://github.com/Sridhar-C-25",
    //   live_link: "https://vuecountry05.netlify.app",
    // },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex justify-center max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;
