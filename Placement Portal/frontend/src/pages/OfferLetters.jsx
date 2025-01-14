import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OfferLetters = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 300 * 1024) {
      setFile(selectedFile);
    } else {
      alert("File size must not exceed 300 KB.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert(`File "${file.name}" submitted successfully.`);
    } else {
      alert("Please select a file before submitting.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 dark:bg-slate-900 text-black dark:text-white">
      <Navbar />

      <main className="flex-grow pt-20 pb-10 flex items-center justify-center w-full">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <h1 className="text-2xl font-semibold mb-4 text-center text-black dark:text-white">
            Offer Letters
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2 text-black dark:text-slate-300"
                htmlFor="company"
              >
                Company Name
              </label>
              <select
                id="company"
                className="w-full px-3 py-2 bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-slate-300"
                required
              >
                <option value="">Select Company</option>
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2 text-black dark:text-slate-300"
                htmlFor="year"
              >
                Academic Year
              </label>
              <select
                id="year"
                className="w-full px-3 py-2 bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-slate-300"
                required
              >
                <option value="">Select Year</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2 text-black dark:text-slate-300"
                htmlFor="file"
              >
                Upload File (Max size: 300 KB)
              </label>
              <div className="flex items-center justify-center w-full h-32 bg-slate-200 dark:bg-slate-700 border border-dashed border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer">
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="application/pdf"
                />
                <label
                  htmlFor="file"
                  className="flex flex-col items-center justify-center text-center text-black dark:text-slate-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 9l-4-4m0 0L8 9m4-4v12"
                    />
                  </svg>
                  Drag and Drop Here
                  <span className="text-sm">(or click to browse)</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              {file && (
                <p className="text-sm text-slate-400 dark:text-slate-300">
                  Selected File: {file.name}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OfferLetters;