import React from "react";
import { FaGithub } from "react-icons/fa"
// importing images
import yoginImg from "../../assets/images/Yogin.png";
import weatherImg from "../../assets/images/Weather-app.png";
import starbucksImg from "../../assets/images/Starbucks.png"
import dmartImg from "../../assets/images/Dmart.png"

const projects = [
  {
    name: "Yogin",
    image: yoginImg, 
    live: "https://devanjana401.github.io/Yogin/",
    github: "https://github.com/devanjana401/Yogin.git",
    description: "Developed a yoga website using HTML, CSS, SCSS, Bootstrap, JavaScript, and jQuery, integrating a local API to fetch and display poses dynamically with interactive DOM updates. Added form validation, EmailJS for email handling, and LocalStorage to manage user inputs and preferences.",
    features: [
      "Local API integration",
      "Dynamic UI updates",
      "Form validation",
      "LocalStorage & EmailJS",
    ],
    tags: ["HTML", "CSS", "SCSS", "Bootstrap", "jQuery", "JavaScript", "API"],
  },
  {
    name: "Weather App",
    image: weatherImg,
    live: "https://devanjana401.github.io/Weather-app/",
    github: "https://github.com/devanjana401/Weather-app.git",
    description: "Built a Weather App using HTML, CSS, and JavaScript that fetches real-time data from the OpenWeatherMap API and displays temperature, humidity, wind speed, and icons based on city search. Added error handling and dynamic DOM updates to improve interactivity and ensure a smooth user experience.",
    features: [
      "City-based weather search",
      "Dynamic temperature & humidity",
      "Error handling",
      "Interactive DOM updates",
    ],
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    name: "Starbucks",
    image: starbucksImg,
    live: "https://devanjana401.github.io/Starbucks-clone/",
    github: "https://github.com/devanjana401/Starbucks-clone.git",
    description:
      "Designed and developed static, responsive websites to practice real-world layouts and improve UI structure. Used HTML, CSS, and Bootstrap to ensure smooth navigation, cross-browser compatibility, and mobile-friendly performance.",
    features: [
      "Responsive layouts",
      "Smooth navigation",
      "Cross-browser compatibility",
      "Mobile-friendly design",
    ],
    tags: ["HTML", "CSS", "Bootstrap"],
  },
  {
    name: "DMart",
    image: dmartImg,
    live: "https://devanjana401.github.io/DMart-clone/",
    github: "https://github.com/devanjana401/DMart-clone.git",
    description:
      "Built responsive and neat web pages that follow real-world layouts and offer smooth navigation. Used HTML, CSS, and Bootstrap with reusable styles, mobile-friendly design, cross-browser support, and better loading performance.",
    features: [
      "Responsive UI",
      "Reusable components",
      "Cross-browser support",
      "Optimized performance",
    ],
    tags: ["HTML", "CSS", "Bootstrap"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-[#0f0f0f] text-white py-20 px-6 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-8 text-center">Projects</h2>

        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          These projects reflect my experience in building responsive designs, API integrations, and real-world web applications.
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" w-full max-w-[440px] md:max-w-full lg:max-w-[440px] rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-[2px] shadow-xl hover:scale-105 transition-transform"
            >
              <div className="bg-[#1a1a1a] rounded-2xl p-4">
                {/* image */}
                <div className="relative w-full h-56">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* github icon */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="absolute top-3 right-3 bg-black bg-opacity-70 w-10 h-10 rounded-full flex justify-center items-center"
                  >
                    <FaGithub size={20} className="text-white" />
                  </a>
                </div>

                {/* project details + live link */}
                <div className="flex justify-between items-center mt-5">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>

                  <a
                    href={project.live}
                    target="_blank"
                    className="text-blue-400 underline underline-offset-2 font-medium"
                  >
                    Go Live
                  </a>
                </div>

                <p className="text-gray-300 mt-3 text-[15px] leading-relaxed">
                  {project.description}
                </p>

                <h4 className="mt-5 font-semibold text-[17px]">Features</h4>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-[15px]">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[14px] text-purple-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
