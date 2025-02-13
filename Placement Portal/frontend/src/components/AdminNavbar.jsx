import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Ensure you have a Logo component or replace it with an img tag.

const AdminNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [isTodoDropdownOpen, setIsTodoDropdownOpen] = useState(false);

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
            Admin Portal
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4 flex items-center">
          <Link to="/admin-home" className="text-black dark:text-white">
            Home
          </Link>
          <Link to="/admin-placement-statistics" className="text-black dark:text-white">
            Placement Stats
          </Link>

          {/* Dashboard Dropdown */}
          <div className="relative">
            <button
              onClick={() =>
                setIsDashboardDropdownOpen(!isDashboardDropdownOpen)
              }
              className="text-black dark:text-white focus:outline-none"
            >
              Dashboard
            </button>
            {isDashboardDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:text-white dark:border-slate-700 shadow rounded-md py-2 w-48">
                <Link
                  to="/student-data"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 "
                >
                  Student Data
                </Link>
                <Link
                  to="/student-view-experience"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Student Placement Experience
                </Link>
                <Link
                  to="/student-offer-letters"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Student Offer Letter
                </Link>
              </div>
            )}
          </div>

          {/* To-Do Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsTodoDropdownOpen(!isTodoDropdownOpen)}
              className="text-black dark:text-white focus:outline-none"
            >
              To Do
            </button>
            {isTodoDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:text-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow rounded-md py-2 w-48">
                <Link
                  to="/admin-verification-dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Student Verification
                </Link>
                <Link
                  to="/upload-jobs"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Upload Jobs
                </Link>
              </div>
            )}
          </div>

          <Link to="/alumini" className="text-black dark:text-white">
            Alumini
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

export default AdminNavbar;


