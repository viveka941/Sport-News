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
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const renderNavLinks = () =>
    navItems.map(({ path, label }) => (
      <li key={path} className="my-2 md:my-0">
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold underline"
              : "text-white hover:text-orange-500 transition-colors"
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
        className="text-white hover:text-orange-500 text-2xl transition-colors"
      >
        <AiFillFacebook />
      </a>
      <a
        href="/"
        aria-label="Dribbble"
        className="text-white hover:text-orange-500 text-2xl transition-colors"
      >
        <AiFillDribbbleCircle />
      </a>
      <a
        href="/"
        aria-label="Twitter"
        className="text-white hover:text-orange-500 text-2xl transition-colors"
      >
        <AiFillTwitterCircle />
      </a>
    </>
  );

  return (
    <header className="bg-black shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Sport<span className="text-orange-500">dunia</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">{renderNavLinks()}</ul>

        {/* Social Icons & Authentication */}
        <div className="hidden md:flex items-center gap-4">
          {renderSocialIcons()}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full border-2 border-orange-500"
              />
              <p className="text-white font-medium">{user.name}</p>
              <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 rounded-lg shadow-lg p-4">
          <ul className="flex flex-col gap-4">{renderNavLinks()}</ul>
          <div className="flex justify-center mt-4 gap-4">
            {renderSocialIcons()}
          </div>
          <div className="mt-4 text-center">
            {isAuthenticated ? (
              <div className="flex items-center justify-center gap-2">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-orange-500"
                />
                <p className="text-white font-medium">{user.name}</p>
              </div>
            ) : null}
            <button className="bg-orange-500 px-4 py-2 mt-2 text-white font-medium rounded hover:bg-orange-600 transition-colors w-full">
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
