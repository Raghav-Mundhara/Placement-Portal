import React, { useState } from "react";

const Registration_2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [division, setDivision] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [prn, setPrn] = useState("");
  const [placementNo, setPlacementNo] = useState("");
  const [dob, setDob] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [marksPercent, setMarksPercent] = useState("");
  const [aggCgpa, setAggCgpa] = useState("");
  const [noOfKts, setNoOfKts] = useState("");
  const [semCgpa, setSemCgpa] = useState("");
  const [preferences, setPreferences] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Division:", division);
    console.log("Roll Number:", rollNo);
    console.log("PRN:", prn);
    console.log("Placement Number:", placementNo);
    console.log("Date of Birth:", dob);
    console.log("Contact Number:", contactNumber);
    console.log("Personal Email:", personalEmail);
    console.log("Marks %:", marksPercent);
    console.log("Aggregate CGPA:", aggCgpa);
    console.log("Number of KTs:", noOfKts);
    console.log("Semester CGPA:", semCgpa);
    console.log("Placement Preference:", preferences);



    alert("Registration Successful!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200  overflow-hidden">
      <div className="bg-slate-100 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
        <h1 className="text-center text-2xl font-bold text-black mb-6">
          Student Registration
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Basic Details */}
          <div className="text-lg font-semibold text-gray-700">Basic Information</div>
          <label className="font-bold text-gray-600">First Name</label>
          <input
            type="text"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Last Name</label>
          <input
            type="text"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Division</label>
          <input
            type="text"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your division"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Roll Number</label>
          <input
            type="number"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your roll number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">PRN</label>
          <input
            type="number"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your PRN"
            value={prn}
            onChange={(e) => setPrn(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Placement Number</label>
          <input
            type="number"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your placement number"
            value={placementNo}
            onChange={(e) => setPlacementNo(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Date of Birth</label>
          <input
            type="date"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Contact Number</label>
          <input
            type="tel"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Personal Email</label>
          <input
            type="email"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your personal email"
            value={personalEmail}
            onChange={(e) => setPersonalEmail(e.target.value)}
            required
          />

          {/* Academic Details */}
          <div className="text-lg font-semibold text-gray-700">Academic Details</div>
          <label className="font-bold text-gray-600">Marks %</label>
          <input
            type="number"
            step="0.01"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your marks percentage"
            value={marksPercent}
            onChange={(e) => setMarksPercent(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Aggregate CGPA</label>
          <input
            type="number"
            step="0.01"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your aggregate CGPA"
            value={aggCgpa}
            onChange={(e) => setAggCgpa(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Number of KTs</label>
          <input
            type="number"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter the number of KTs"
            value={noOfKts}
            onChange={(e) => setNoOfKts(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">All Semester CGPA (Comma-separated)</label>
          <input
            type="text"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="e.g., 8.5, 8.6, 8.7"
            value={semCgpa}
            onChange={(e) => setSemCgpa(e.target.value)}
            required
          />

          {/* Preferences */}
          <div className="text-lg font-semibold text-gray-700">Placement Preferences</div>
          <label className="font-bold text-gray-600">What do you want to choose?</label>
          <select
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            required
          >
            <option value="" disabled>
              Select your preference
            </option>
            <option value="college-placement">College Placement</option>
            <option value="masters">Master's</option>
            <option value="not-interested">Not Interested</option>
          </select>

          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded font-bold hover:bg-blue-600 active:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration_2;