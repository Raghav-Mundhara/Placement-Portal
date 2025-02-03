import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewExperience = () => {
  const [sortOption, setSortOption] = useState("");
  const [results, setResults] = useState([
    { id: 1, name: "Student1_Name_Academic_Year.pdf" },
    { id: 2, name: "Student2_Name_Academic_Year.pdf" },
    { id: 3, name: "Student3_Name_Academic_Year.pdf" },
  ]);
  const navigate = useNavigate();

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    if (selectedOption === "Company") {
      setResults((prevResults) =>
        [...prevResults].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (selectedOption === "Year") {
      setResults((prevResults) =>
        [...prevResults].sort((a, b) =>
          a.name.split("_")[2].localeCompare(b.name.split("_")[2])
        )
      );
    }
  };

  const handleUploadClick = () => {
    navigate("/upload-experience");
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <label
              htmlFor="sortBy"
              className="text-black dark:text-white font-medium"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              value={sortOption}
              onChange={handleSortChange}
              className="ml-2 p-2 rounded bg-white dark:bg-slate-800 dark:text-white"
            >
              <option value="">Select</option>
              <option value="Company">Company wise</option>
              <option value="Year">Academic Year wise</option>
            </select>
          </div>
          <button
            onClick={handleUploadClick}
            className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-400"
          >
            Upload Placement Experience
          </button>
        </div>

        <div className="text-black dark:text-white mb-2">
          Results Found: {results.length}
        </div>

        <div className="space-y-4">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 rounded bg-white dark:bg-slate-800 dark:text-white shadow-md hover:shadow-lg"
            >
              {result.name}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ViewExperience;