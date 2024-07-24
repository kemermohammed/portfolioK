import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { MenuIcon, ExternalLinkIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  return (
    <nav className="flex font-sans font-[700] justify-between items-center py-6 px-6 md:px-8 bg-white text-stone-900 shadow-md fixed top-0 left-0 w-full z-50">
      <h3
        className="text-2xl cursor-pointer  hover:text-blue-600"
        onClick={scrollToTop}
      >
        Kemeriya
      </h3>

      <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
        <MenuIcon className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-16 right-4 text-stone-900 p-4">
          <ul className="flex flex-col bg-stone-50 h-screen w-screen text-center justify-center pb-60 duration-300 transition-all gap-8 ">
            <li className=" hover:text-blue-600">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className=" hover:text-blue-600">
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className=" hover:text-blue-600">
              <Link
                to="project"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                Project
              </Link>
            </li>
            <li className=" hover:text-blue-600">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      <ul className="hidden md:flex gap-4">
        <li className=" hover:text-blue-600">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className=" hover:text-blue-600">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className=" hover:text-blue-600">
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Project
          </Link>
        </li>
        <li className=" hover:text-blue-600">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
