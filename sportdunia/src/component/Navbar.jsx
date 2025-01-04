import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AiFillDribbbleCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineBars,
  AiOutlineClose,
} from "react-icons/ai";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/service", label: "Service" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const renderNavLinks = () =>
    navItems.map(({ path, label }) => (
      <li key={path}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold underline"
              : "text-white hover:text-orange-500"
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          {label}
        </NavLink>
      </li>
    ));

  const renderSocialIcons = () => (
    <>
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
    </>
  );

  return (
    <header className="bg-black p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Sport<span className="text-orange-500">dunia</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">{renderNavLinks()}</ul>

        {/* Social Icons & Authentication */}
        <div className="hidden md:flex items-center gap-4">
          {renderSocialIcons()}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-white font-medium">{user.name}</p>
              <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col mt-4 gap-2 bg-blue-700 p-4 rounded">
          {renderNavLinks()}
          <div className="flex justify-center mt-4 gap-4">
            {renderSocialIcons()}
          </div>
          <div className="mt-4 text-center">
            {isAuthenticated ? (
              <div className="flex items-center justify-center gap-2">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-white font-medium">{user.name}</p>
              </div>
            ) : null}
            <button className="bg-orange-500 px-4 py-2 mt-2 text-white font-medium rounded hover:bg-orange-600 transition-colors w-full">
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </button>
          </div>
        </ul>
      )}
    </header>
  );
}
