import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SuccessModal from "../components/SuccessModal";

const UploadExperience = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    academicYear: "",
    description: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName) newErrors.companyName = "Please select a company.";
    if (!formData.academicYear) newErrors.academicYear = "Please select an academic year.";
    if (!formData.description.trim())
      newErrors.description = "Please enter a description.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowModal(true);
    }
  };

  return (
    <div className="bg-slate-100 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto flex-grow p-4">
        <h1 className="text-black dark:text-white text-2xl font-bold mb-4">
          Upload Your Placement Experience
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black dark:text-gray-200">Company Name</label>
            <select
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.companyName ? "border-red-500" : "dark:border-gray-700"
              } bg-white dark:bg-gray-800 dark:text-gray-200`}
            >
              <option value="">Select Company</option>
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
            </select>
            {errors.companyName && (
              <span className="text-red-500 text-sm">{errors.companyName}</span>
            )}
          </div>
          <div>
            <label className="block text-black dark:text-gray-200">Academic Year</label>
            <select
              name="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.academicYear ? "border-red-500" : "dark:border-gray-700"
              } bg-white dark:bg-gray-800 dark:text-gray-200`}
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
            {errors.academicYear && (
              <span className="text-red-500 text-sm">{errors.academicYear}</span>
            )}
          </div>
          <div>
            <label className="block text-black dark:text-gray-200">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.description ? "border-red-500" : "dark:border-gray-700"
              } bg-white dark:bg-gray-800 dark:text-gray-200`}
              rows="4"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">{errors.description}</span>
            )}
          </div>
          <div>
            <label className="block text-black dark:text-gray-200">Attach File</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.file ? "border-red-500" : "dark:border-gray-700"
              } bg-white dark:bg-gray-800 dark:text-gray-200`}
            />
            {errors.file && (
              <span className="text-red-500 text-sm">{errors.file}</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-sky-500 dark:bg-sky-700 text-white px-4 py-2 rounded"
          >
            Share Experience
          </button>
        </form>
      </div>
      <Footer />
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default UploadExperience;