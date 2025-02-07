import React, { useState } from "react";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCode, faDatabase, faCloud, faLanguage, faCogs, faDesktop, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const QuizCategories = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const categories = [
    { name: "Code Snippets", color: "bg-purple-500", icon: faCode },
    { name: "Database Management System", color: "bg-blue-500", icon: faDatabase },
    { name: "Cloud Computing", color: "bg-green-500", icon: faCloud },
    { name: "English", color: "bg-red-500", icon: faLanguage },
    { name: "C, C++, JAVA, Python", color: "bg-yellow-500", icon: faCogs },
    { name: "Operating System", color: "bg-orange-500", icon: faDesktop },
    { name: "Data Structures and Algorithms", color: "bg-teal-500", icon: faNetworkWired },
    { name: "Computer Networks", color: "bg-pink-500", icon: faNetworkWired },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Updated Header with Full Screen Width */}
      <header className="w-screen flex justify-between items-center mb-6 bg-white shadow-md p-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-800">Quiz Dashboard</h1>
        </div>
        <div 
          className="relative flex items-center gap-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-gray-800 text-7xl mr-6 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            className="text-gray-800 text-xl cursor-pointer"
          />
          {dropdownVisible && (
            <div className="absolute top-full mt-2 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Past Quiz Scores</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Attempted Quizzes</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Quiz Performance Analytics</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Reattempt Quizzes</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
        Ready to challenge yourself? Choose a category and start the quiz to test your knowledge!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-white text-center ${category.color}`}
          >
            <FontAwesomeIcon icon={category.icon} className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCategories;

