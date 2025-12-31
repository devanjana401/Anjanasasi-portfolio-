import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0f0f0f] text-white py-5 px-6 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* logo */}
        <h1 className="text-lg font-bold tracking-wide">
          ANJANA SASI | DEVELOPER
        </h1>

        {/* navbar menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg">
          <Link to="home" smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-purple-400">
            Home
          </Link>

          <Link to="about" smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-purple-400">
            About
          </Link>

          <Link to="education" smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-purple-400">
            Education
          </Link>

          <Link to="projects" smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-purple-400">
            Projects
          </Link>

          <Link to="contact" smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-purple-400">
            Contact
          </Link>
        </ul>

        {/* for mobile */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* mobile dropdown menu */}
      {open && (
        <ul className="md:hidden bg-[#1a1a1a] mt-4 py-4 px-6 rounded-lg flex flex-col gap-4 text-lg">

          <Link to="home" smooth={true} duration={600} offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-purple-400"
          >
            Home
          </Link>

          <Link to="about" smooth={true} duration={600} offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-purple-400"
          >
            About
          </Link>

          <Link to="education" smooth={true} duration={600} offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-purple-400"
          >
            Education
          </Link>

          <Link to="projects" smooth={true} duration={600} offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-purple-400"
          >
            Projects
          </Link>

          <Link to="contact" smooth={true} duration={600} offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-purple-400"
          >
            Contact
          </Link>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;
