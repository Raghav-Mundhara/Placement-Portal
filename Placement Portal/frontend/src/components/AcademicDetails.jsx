import React from "react";

const AcademicDetails = () => {
  return (
    <div className="my-5">
  
      <div className="mb-3 flex flex-col md:flex-row items-start md:items-center">
        <label className="mb-1 md:mb-0 md:mr-2 text-gray-700">Semester:</label>
        <select className="w-full md:w-auto px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <div className="mb-3 flex flex-col md:flex-row items-start md:items-center">
        <label className="mb-1 md:mb-0 md:mr-2 text-gray-700">CGPA:</label>
        <input
          type="number"
          className="w-full md:w-auto px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-3 flex flex-col md:flex-row items-start md:items-center">
        <label className="mb-1 md:mb-0 md:mr-2 text-gray-700">No. of K.T.:</label>
        <input
          type="number"
          className="w-full md:w-auto px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-3 flex flex-col md:flex-row items-start md:items-center">
        <label className="mb-1 md:mb-0 md:mr-2 text-gray-700">
          Aggregate CGPA upto 6 semesters:
        </label>
        <input
          type="number"
          className="w-full md:w-auto px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
    </div>
  );
};

export default AcademicDetails;