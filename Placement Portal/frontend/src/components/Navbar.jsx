import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Ensure you have a Logo component or replace it with an img tag.

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync theme with the root HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="bg-slate-200 dark:bg-slate-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Logo className="h-10 w-10 mr-2" /> {/* Replace with an img tag if no Logo component */}
          <span className="text-2xl font-bold text-black dark:text-white">
            IT Department Placement Portal
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4 flex items-center">
          <Link to="/student-home" className=" text-black dark:text-white">
            Home
          </Link>
          <Link to="/about" className=" text-black dark:text-white">
            About Us
          </Link>
          <Link to="/placement-statistics" className="text-black dark:text-white">
            Placements Stats
          </Link>
          <Link to="/mocktest" className=" text-black dark:text-white">
            Mock Test
          </Link>
          <Link to="/student-profile" className=" text-black dark:text-white">
            Profile
          </Link>
          

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-400 focus:outline-none"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
