import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";

const UploadJobs = () => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    companyName: "",
    requirements: "",
    jobDescription: "",
    applicationDeadline: "",
    baseSalary: "",
    employmentType: "",
  });

  const [jobList, setJobList] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobList([...jobList, { ...jobData, id: jobList.length + 1 }]);
    setJobData({
      jobTitle: "",
      companyName: "",
      requirements: "",
      jobDescription: "",
      applicationDeadline: "",
      baseSalary: "",
      employmentType: "",
    });
  };

  const handleEdit = (id) => {
    const jobToEdit = jobList.find((job) => job.id === id);
    setJobData(jobToEdit);
    setJobList(jobList.filter((job) => job.id !== id));
  };

  const handleExport = (id) => {
    alert(`Exporting job ${id} to Excel!`);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <AdminNavbar />

      <div className="container mx-auto flex-grow p-4">
        <h2 className="text-2xl font-semibold text-black text-center mb-4">
          New Job Post
        </h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <div className="space-y-3">
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={jobData.jobTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={jobData.companyName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="text"
              name="requirements"
              placeholder="Requirements"
              value={jobData.requirements}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            <textarea
              name="jobDescription"
              placeholder="Job Description"
              value={jobData.jobDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            <input
              type="date"
              name="applicationDeadline"
              value={jobData.applicationDeadline}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            <input
              type="number"
              name="baseSalary"
              placeholder="Base Salary"
              value={jobData.baseSalary}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            <input
              type="text"
              name="employmentType"
              placeholder="Employment Type"
              value={jobData.employmentType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
            >
              Job Post + Create Announcement
            </button>
          </div>
        </form>

        <h3 className="text-xl font-semibold text-black mt-6 text-center">Posted Jobs</h3>

        <div className="space-y-3 mt-4">
          {jobList.map((job) => (
            <div key={job.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <span className="font-medium text-black">{job.jobTitle}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(job.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleExport(job.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Excel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UploadJobs;