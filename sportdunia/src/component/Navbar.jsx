import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillDribbbleCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineBars,
  AiOutlineClose,
} from "react-icons/ai";


export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blog", link: "Blog" },
    { path: "/contact", link: "Contact" },
    { path: "/about", link: "About" },
    { path: "/service", link: "Service" },
  ];

  return (
    <header className="bg-blue-800 p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Design<span className="text-orange-500">VK</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold underline"
                    : "text-white hover:text-orange-500"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Icons & Login Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/"
            aria-label="Facebook"
            className="text-white hover:text-red-500 text-xl transition-colors"
          >
            <AiFillFacebook />
          </a>
          <a
            href="/"
            aria-label="Dribbble"
            className="text-white hover:text-red-500 text-xl transition-colors"
          >
            <AiFillDribbbleCircle />
          </a>
          <a
            href="/"
            aria-label="Twitter"
            className="text-white hover:text-red-500 text-xl transition-colors"
          >
            <AiFillTwitterCircle />
          </a>
          <button className="bg-orange-500 px-4 py-2 text-white font-medium rounded hover:bg-orange-600 transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col mt-4 gap-2 bg-blue-700 p-4 rounded">
          {navItems.map(({ path, link }) => (
            <li key={path} className="text-center">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold underline bg-blue-700 block py-2"
                    : "text-white hover:bg-orange-500 hover:text-white block py-2"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </NavLink>
            </li>
          ))}
          <div className="flex justify-center mt-4 gap-4">
            <a
              href="/"
              aria-label="Facebook"
              className="text-white hover:text-red-500 text-xl"
            >
              <AiFillFacebook />
            </a>
            <a
              href="/"
              aria-label="Dribbble"
              className="text-white hover:text-red-500 text-xl"
            >
              <AiFillDribbbleCircle />
            </a>
            <a
              href="/"
              aria-label="Twitter"
              className="text-white hover:text-red-500 text-xl"
            >
              <AiFillTwitterCircle />
            </a>
          </div>
          <button className="bg-orange-500 px-4 py-2 mt-4 text-white font-medium rounded hover:bg-orange-600 transition-colors w-full">
            Login
          </button>
        </ul>
      )}
    </header>
  );
}
