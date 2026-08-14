import {
  faLaravel,
  faPhp,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faServer,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 25,
  },
};

const skills = [
  {
    name: "Laravel",
    icon: faLaravel,
    description: "Building scalable PHP web applications.",
  },
  {
    name: "PHP",
    icon: faPhp,
    description: "Backend development and APIs.",
  },
  {
    name: "JavaScript",
    icon: faJs,
    description: "Interactive and dynamic user interfaces.",
  },
  {
    name: "HTML & CSS",
    icon: faHtml5,
    description: "Responsive and accessible web layouts.",
  },
  {
    name: "MySQL",
    icon: faDatabase,
    description: "Database design and optimization.",
  },
  {
    name: "Git & GitHub",
    icon: faGithub,
    description: "Version control and collaboration.",
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
    description: "Rapid responsive UI development.",
  },
  {
    name: "REST APIs",
    icon: faServer,
    description: "Building and integrating APIs.",
  },
  {
    name: "Problem Solving",
    icon: faCode,
    description: "Debugging and writing clean code.",
  },
  {
    name: "CLI & Git",
    icon: faTerminal,
    description: "Working comfortably in the terminal.",
  },
];

const Blog = () => {
  return (
    <section className="content py-24" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-picto-primary">
          Technical Skills
        </h2>

        <p className="mt-4 text-gray-500 text-lg">
          Technologies and tools I use every day.
        </p>
      </div>

      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="mb-12">
            <div className="bg-white border rounded-xl shadow-sm p-8 h-64 flex flex-col justify-center items-center text-center hover:shadow-lg transition duration-300">

              <FontAwesomeIcon
                icon={skill.icon}
                className="text-picto-primary text-5xl mb-6"
              />

              <h3 className="text-xl font-semibold mb-3">
                {skill.name}
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                {skill.description}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blog;