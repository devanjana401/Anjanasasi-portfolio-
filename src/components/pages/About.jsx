import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaPython, FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiJson,
  SiAxios,
  SiJquery,
  SiSass,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiPostman
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#0f0f0f] text-white py-20 px-6 flex justify-center"
    >
      <div className="max-w-5xl w-full">

        <h2 className="text-5xl font-bold mb-8 text-center">
          Introduction
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg text-justify">
          I am a full stack web developer with experience in building scalable and
          responsive web applications using modern frontend and backend technologies.
          I work with React to create interactive user interfaces and use Python with
          Django to develop secure and efficient backend systems. I also have experience
          working with databases like MySQL and PostgreSQL, integrating REST APIs, and
          testing APIs using Postman. I enjoy solving real-world problems, optimizing
          application performance, and delivering clean, maintainable solutions that
          provide seamless user experiences across devices.
        </p>

        {/* <div className="mt-12 flex flex-wrap justify-center gap-4">

          <span className="px-6 py-2 rounded-full bg-gray-700 text-sm font-semibold hover:bg-gray-600 transition">
            Fullstack Developer
          </span>

          <span className="px-6 py-2 rounded-full bg-gray-700 text-sm font-semibold hover:bg-gray-600 transition">
            Frontend Developer
          </span>

          <span className="px-6 py-2 rounded-full bg-gray-700 text-sm font-semibold hover:bg-gray-600 transition">
            Backend Developer
          </span>

          <span className="px-6 py-2 rounded-full bg-gray-700 text-sm font-semibold hover:bg-gray-600 transition">
            Python Developer
          </span>

        </div> */}

        <div className="mt-16 flex flex-wrap gap-6 justify-center">

          <div className="flex flex-col items-center">
            <FaHtml5 className="text-orange-500 text-5xl" />
            <span className="text-sm mt-1">HTML</span>
          </div>

          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-blue-500 text-5xl" />
            <span className="text-sm mt-1">CSS</span>
          </div>

          <div className="flex flex-col items-center">
            <SiJquery className="text-blue-600 text-5xl" />
            <span className="text-sm mt-1">jQuery</span>
          </div>

          <div className="flex flex-col items-center">
            <SiSass className="text-pink-400 text-5xl" />
            <span className="text-sm mt-1">Sass</span>
          </div>

          <div className="flex flex-col items-center">
            <SiJavascript className="text-yellow-400 text-5xl" />
            <span className="text-sm mt-1">JavaScript</span>
          </div>

          <div className="flex flex-col items-center">
            <FaReact className="text-cyan-400 text-5xl" />
            <span className="text-sm mt-1">React</span>
          </div>

          <div className="flex flex-col items-center">
            <SiRedux className="text-purple-600 text-5xl" />
            <span className="text-sm mt-1">Redux</span>
          </div>

          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-sky-400 text-5xl" />
            <span className="text-sm mt-1">Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center">
            <FaBootstrap className="text-purple-500 text-5xl" />
            <span className="text-sm mt-1">Bootstrap</span>
          </div>

          <div className="flex flex-col items-center">
            <SiJson className="text-gray-400 text-5xl" />
            <span className="text-sm mt-1">JSON Server</span>
          </div>

          <div className="flex flex-col items-center">
            <SiAxios className="text-blue-400 text-5xl" />
            <span className="text-sm mt-1">Axios</span>
          </div>

          <div className="flex flex-col items-center">
            <FaPython className="text-yellow-300 text-5xl" />
            <span className="text-sm mt-1">Python</span>
          </div>

          <div className="flex flex-col items-center">
            <SiDjango className="text-green-500 text-5xl" />
            <span className="text-sm mt-1">Django</span>
          </div>

          <div className="flex flex-col items-center">
            <SiMysql className="text-blue-500 text-5xl" />
            <span className="text-sm mt-1">MySQL</span>
          </div>

          <div className="flex flex-col items-center">
            <SiPostgresql className="text-blue-400 text-5xl" />
            <span className="text-sm mt-1">PostgreSQL</span>
          </div>

          <div className="flex flex-col items-center">
            <SiPostman className="text-orange-500 text-5xl" />
            <span className="text-sm mt-1">Postman</span>
          </div>

          <div className="flex flex-col items-center">
            <FaAws className="text-orange-400 text-5xl" />
            <span className="text-sm mt-1">AWS</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;