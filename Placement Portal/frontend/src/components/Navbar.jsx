import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="bg-slate-200 dark:bg-slate-900 p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center">
          <Logo className="h-10 w-10 mr-2" />{" "}

          <span className="text-2xl font-bold text-black dark:text-white">
            IT Department Placement Portal
          </span>
        </div>

        <nav className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-black dark:text-white">
            Home
          </Link>
          <Link to="/about" className="text-black dark:text-white">
            About Us
          </Link>
          <Link to="/placements" className="text-black dark:text-white">
            Placements Stats
          </Link>
          <Link to="/mocktest" className="text-black dark:text-white">
            Mock Test
          </Link>
          <Link to="/dashboard" className="text-black dark:text-white">
            Profile
          </Link>
          <Link to="/contact" className="text-black dark:text-white">
            Contact Us
          </Link>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-400 focus:outline-none"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav className="flex flex-col items-center space-y-4 mt-4">
          <Link to="/" className="text-black dark:text-white">
            Home
          </Link>
          <Link to="/about" className="text-black dark:text-white">
            About Us
          </Link>
          <Link to="/placements" className="text-black dark:text-white">
            Placements Stats
          </Link>
          <Link to="/mocktest" className="text-black dark:text-white">
            Mock Test
          </Link>
          <Link to="/dashboard" className="text-black dark:text-white">
            Profile
          </Link>
          <Link to="/contact" className="text-black dark:text-white">
            Contact Us
          </Link>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-400 focus:outline-none"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;