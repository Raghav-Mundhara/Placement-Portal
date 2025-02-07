import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faCloud, faLanguage, faCogs, faDesktop, faNetworkWired, faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";

const QuizCategories = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 sm:px-6 overflow-x-hidden w-full">
      <Navbar />
      <header className="w-full flex flex-col sm:flex-row justify-between items-center mb-4 py-2 px-4 sm:px-6">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mx-20">
          <h1 className="text-2xl sm:text-2xl font-bold text-gray-800 text-center sm:text-left">
            Quiz Dashboard
          </h1>
          <div className="relative flex items-center gap-1">
          <FontAwesomeIcon icon={faUserCircle} className="text-gray-800 text-7xl sm:text-5xl cursor-pointer" />
<FontAwesomeIcon icon={faCaretDown} className="text-gray-800 text-lg cursor-pointer" onClick={toggleDropdown} />

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
        </div>
      </header>

      <h2 className="text-lg sm:text-xl font-semibold text-gray-700 text-center mb-4">
        Ready to challenge yourself? Choose a category and start the quiz to test your knowledge!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {categories.map((category, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-lg text-white text-center ${category.color}`}>
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
