import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import StudentDataPage from '../pages/StudentDataPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToDoWorkOpen, setIsToDoWorkOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleToDoWork = () => setIsToDoWorkOpen((prev) => !prev);
  const toggleDashboard = () => setIsDashboardOpen((prev) => !prev);

  return (
    <header className="bg-slate-200 dark:bg-slate-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="h-10 w-10 mr-2" />
          <span className="text-2xl font-bold text-black dark:text-white">
            IT Department Placement Portal
          </span>
        </div>
        <nav className="space-x-4 flex items-center hidden md:flex">
          <Link to="/" className="text-black dark:text-white">Home</Link>
          <Link to="/about" className="text-black dark:text-white">Placement Statistics</Link>
          <div className="relative">
            <button
              onClick={toggleToDoWork}
              className="text-black dark:text-white flex items-center space-x-2"
            >
              <span>To Do Work</span>
              <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4" />
            </button>
            {isToDoWorkOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-blue-500 p-2 space-y-2 rounded-md z-50">
                <Link to="/upload-jobs" className="block text-white">Upload Jobs</Link>
                <Link to="/verify-students" className="block text-white">Verify Students</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleDashboard}
              className="text-black dark:text-white flex items-center space-x-2"
            >
              <span>Dashboard</span>
              <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4" />
            </button>
            {isDashboardOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-blue-500 p-2 space-y-2 rounded-md z-50">
                <Link to="/student-data" className="block text-white">Student Data</Link>
                <Link to="/student-placement-experience" className="block text-white">Student Placement Experience</Link>
                <Link to="/student-offer-letter" className="block text-white">Student Offer Letter</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="text-black dark:text-white">Profile</Link>
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-400 focus:outline-none"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-black dark:text-white focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 bg-blue-500 p-4">
          <Link to="/" className="text-white text-center">Home</Link>
          <Link to="/about" className="text-white text-center">Placement Statistics</Link>
          <div className="relative">
            <button
              onClick={toggleToDoWork}
              className="text-white flex items-center space-x-2 w-full justify-center"
            >
              <span>To Do Work</span>
              <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4" />
            </button>
            {isToDoWorkOpen && (
              <div className="absolute left-0 mt-2 w-full bg-blue-500 p-2 space-y-2 rounded-md z-50">
                <Link to="/upload-jobs" className="block text-white text-center">Upload Jobs</Link>
                <Link to="/verify-students" className="block text-white text-center">Verify Students</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleDashboard}
              className="text-white flex items-center space-x-2 w-full justify-center"
            >
              <span>Dashboard</span>
              <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4" />
            </button>
            {isDashboardOpen && (
              <div className="absolute left-0 mt-2 w-full bg-blue-500 p-2 space-y-2 rounded-md z-50">
                <Link to="/student-data" className="block text-white text-center">Student Data</Link>
                <Link to="/student-placement-experience" className="block text-white text-center">Student Placement Experience</Link>
                <Link to="/student-offer-letter" className="block text-white text-center">Student Offer Letter</Link>
              </div>
            )}
          </div>
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
