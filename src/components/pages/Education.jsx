import React from "react";

const Education = () => {
  const education = [
    {
      title: "Bachelor of Technology",
      school: "Electronics & Communication Engineering",
      date: "2022 - 2025",
      points: ["Completed B.Tech in ECE (2025)"],
    },
    {
      title: "Diploma",
      school: "Electronics",
      date: "2019 - 2022",
      points: ["Completed Diploma in Electronics (2022)"],
    },
  ];

  return (
    <section
      id="education"
      style={{
        height: "auto",
        minHeight: "unset",
        overflowX: "hidden",
      }}
      className="w-full bg-[#0f0f0f] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto md:mt-12">

        <h2 className="text-5xl font-bold mb-8 text-center text-white">
          Education
        </h2>

        {/* timeline */}
        <div className="mt-16 relative border-l border-gray-700">

          {education.map((edu, index) => (
            <div key={index} className="mb-12 ml-6 relative">

              {/* dot */}
              <span className="absolute -left-3 top-2 w-6 h-6 bg-purple-600 rounded-full border-2 border-white"></span>

              {/* card */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white">
                  {edu.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {edu.school}
                </p>

                <p className="text-purple-400 text-sm mt-1">
                  {edu.date}
                </p>

                <ul className="mt-4 list-disc ml-5 space-y-1">
                  {edu.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;
