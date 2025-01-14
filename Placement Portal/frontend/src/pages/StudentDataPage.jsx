import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import AdminNavbar from '../components/AdminNavbar';

const StudentDataPage = () => {
  const students = [
    'Student name 1',
    'Student name 2',
    'Student name 3',
  ];
  const [companyType, setCompanyType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState('');

  const openPopup = (student) => {
    setSelectedStudent(student);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedStudent('');
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen overflow-hidden">
      <AdminNavbar />

      <main className="mt-8 overflow-hidden">
        <h1 className="text-2xl font-bold mb-4 text-center md:text-left">Student Data</h1>

        <div className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 w-full outline-none"
            />
            <button className="bg-gray-300 px-4 py-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full sm:w-1/2">
              <select
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 pr-10 appearance-none w-full"
              >
                <option value="" disabled>Select Company Type</option>
                <option value="dream">Dream Company</option>
                <option value="non-dream">Non-dream Company</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-gray-700" />
              </div>
            </div>

            <div className="relative w-full sm:w-1/2">
              <select
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 pr-10 appearance-none w-full"
              >
                <option value="" disabled>Select Company Name</option>
                <option value="Company 1">Company 1</option>
                <option value="Company 2">Company 2</option>
                <option value="Company 3">Company 3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-4 overflow-hidden">
          {students.map((student, index) => (
            <li
              key={index}
              className="flex flex-wrap justify-between items-center bg-white p-4 mb-2 shadow-md rounded"
            >
              <span className="w-full sm:w-auto text-center sm:text-left">
                {index + 1}. {student}
              </span>
              <button
                onClick={() => openPopup(student)}
                className="mt-2 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
              >
                Detailed Info
              </button>
            </li>
          ))}
        </ul>
      </main>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 relative max-h-[80vh] overflow-y-auto">
            <div className="absolute top-2 right-2 cursor-pointer" onClick={closePopup}>
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6 text-red-500" />
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4">Student Details</h2>
            <p className="mb-4"><strong>Name:</strong> {selectedStudent}</p>
            <p className="mb-4"><strong>Additional Info:</strong> (Add more details here)</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDataPage;
