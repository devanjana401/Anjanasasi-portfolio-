import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        height: "auto",
        minHeight: "unset",
        overflowX: "hidden",
      }}
      className="relative w-full bg-[#0f0f0f] py-20 md:py-32"
    >
      <div
        className="
          max-w-5xl mx-auto px-6
          flex flex-row items-start gap-6
          md:items-center md:justify-center
          md:mt-16
        "
      >

        {/* left dot-line */}
        <div className="flex flex-col items-center mt-20 md:mt-0">
          <div className="w-5 h-5 rounded-full bg-purple-600"></div>
          <div className="w-1 h-40 md:h-80 bg-gradient-to-b from-purple-600 to-transparent"></div>
        </div>

        {/* text */}
        <div className="mt-10 md:mt-0">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
            Hi, I'm <span className="text-purple-600">Anjana Sasi</span>
          </h1>

          <p className="mt-4 text-2xl sm:text-3xl md:text-4xl text-gray-300">
            Web Developer building modern and responsive web experiences.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Home;
