import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync theme with the root HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);


  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-slate-200 dark:bg-slate-900 p-4 overflow-x-hidden"> 
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center">
          <Logo className="h-10 w-10 mr-2" /> 
          <span className="text-2xl font-bold text-black dark:text-white">
            IT Department Placement Portal
          </span>
        </div>

      
        <nav className="space-x-4 flex items-center">
      
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-black dark:text-white">Home</Link>
            <Link to="/about" className="text-black dark:text-white">About Us</Link>
            <Link to="/placements" className="text-black dark:text-white">Placements Stats</Link>
            <Link to="/mocktest" className="text-black dark:text-white">Mock Test</Link>
            <Link to="/dashboard" className="text-black dark:text-white">Profile</Link>
            <Link to="/contact" className="text-black dark:text-white">Contact Us</Link>
          </div>

         
          <button
            className="md:hidden text-black dark:text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
      
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </nav>
      </div>

     
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 bg-blue-500 p-4 overflow-hidden">
          <Link to="/" className="text-black dark:text-white">Home</Link>
          <Link to="/about" className="text-black dark:text-white">About Us</Link>
          <Link to="/placements" className="text-black dark:text-white">Placements Stats</Link>
          <Link to="/mocktest" className="text-black dark:text-white">Mock Test</Link>
          <Link to="/dashboard" className="text-black dark:text-white">Profile</Link>
          <Link to="/contact" className="text-black dark:text-white">Contact Us</Link>

          <button
            onClick={toggleTheme}
            className="mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-400 focus:outline-none"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
