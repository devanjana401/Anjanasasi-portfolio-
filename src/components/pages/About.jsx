import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTailwindcss, SiJson, SiAxios, SiJquery, SiSass } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      style={{
        height: "auto",
        minHeight: "unset",
        overflowX: "hidden",
      }}
      className="w-full bg-[#0f0f0f] text-white py-20 px-6 flex justify-center"
    >
      <div className="max-w-5xl w-full">

        {/* header */}
        <h2 className="text-5xl font-bold mb-8 text-center">
          Introduction
        </h2>

        {/* paragraph */}
        <p className="text-gray-300 leading-relaxed text-lg text-justify">
          I am a web developer with strong frontend expertise and a passion for
          creating clean, responsive, and user-centered interfaces. I enjoy
          simplifying complex ideas, solving problems, and working collaboratively
          to deliver practical, high-quality solutions. My experience includes
          building real-world projects, improving performance, and ensuring smooth,
          intuitive user experiences across devices and browsers.
        </p>

        {/* cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">

          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-[2px] shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 min-h-[200px] flex justify-center items-center">
              <h3 className="text-2xl font-semibold text-center">
                Web Developer
              </h3>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-[2px] shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 min-h-[200px] flex justify-center items-center">
              <h3 className="text-2xl font-semibold text-center">
                Frontend Developer
              </h3>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-[2px] shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 min-h-[200px] flex justify-center items-center">
              <h3 className="text-2xl font-semibold text-center">
                React Developer
              </h3>
            </div>
          </div>

        </div>

        {/* skills / tech stack icons */}
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
        </div>

      </div>
    </section>
  );
};

export default About;
