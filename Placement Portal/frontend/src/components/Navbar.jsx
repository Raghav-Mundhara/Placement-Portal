import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Import the Logo component

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex items-center space-x-4 justify-between">
        <li>
          <Logo />
        </li>
        <li>
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
        </li>
        <li>
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Placement Stats</Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Student Verification</Link>
        </li>
        <li>
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Logout</Link>
        </li>
        <li>
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Profile</Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
