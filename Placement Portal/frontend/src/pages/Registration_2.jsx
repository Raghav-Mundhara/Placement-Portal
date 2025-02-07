import React, { useState } from "react";

const Registration_2 = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [division, setDivision] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [prn, setPrn] = useState("");
  const [placementNo, setPlacementNo] = useState("");
  const [dob, setDob] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [altContactNumber, setAltContactNumber] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [marks10, setMarks10] = useState("");
  const [marks12, setMarks12] = useState("");
  const [diplomaMarks, setDiplomaMarks] = useState("");
  const [marksPercent, setMarksPercent] = useState("");
  const [aggCgpa, setAggCgpa] = useState("");
  const [noOfLiveKts, setNoOfLiveKts] = useState("");
  const [noOfDeadKts, setNoOfDeadKts] = useState("");
  const [semCgpa, setSemCgpa] = useState(["", "", "", "", "", ""]);
  const [semKts, setSemKts] = useState(["", "", "", "", "", ""]);
  const [gap, setGap] = useState("");
  const [preferences, setPreferences] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", {
      firstName,
      middleName,
      lastName,
      division,
      rollNo,
      prn,
      placementNo,
      dob,
      contactNumber,
      altContactNumber,
      personalEmail,
      marks10,
      marks12,
      diplomaMarks,
      marksPercent,
      aggCgpa,
      noOfLiveKts,
      noOfDeadKts,
      semCgpa,
      semKts,
      gap,
      preferences,
    });
    alert("Registration Successful!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200 overflow-hidden">
      <div className="bg-slate-100 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
        <h1 className="text-center text-2xl font-bold text-black mb-6">Student Registration</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="text-lg font-semibold text-gray-700">Basic Information</div>
          <label className="font-bold text-gray-600">First Name</label>
          <input
            type="text"
            className="p-2 border rounded"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Middle Name</label>
          <input
            type="text"
            className="p-2 border rounded"
            placeholder="Enter your middle name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Last Name</label>
          <input
            type="text"
            className="p-2 border rounded"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Division</label>
          <select
            className="p-2 border rounded"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            required
          >
            <option value="" disabled>Select Division</option>
            <option value="D20A">D20A</option>
            <option value="D20B">D20B</option>
            <option value="D20C">D20C</option>
          </select>
          <label className="font-bold text-gray-600">Roll Number</label>
          <input
            type="number"
            className="p-2 border rounded"
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
          <label className="font-bold text-gray-600">Personal Email</label>
          <input
            type="email"
            className="p-2 border border-gray-400 rounded bg-white text-gray-900"
            placeholder="Enter your personal email"
            value={personalEmail}
            onChange={(e) => setPersonalEmail(e.target.value)}
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
          <label className="font-bold text-gray-600">Alternative Contact Number</label>
          <input
            type="tel"
            className="p-2 border rounded"
            placeholder="Enter your alternative contact number"
            value={altContactNumber}
            onChange={(e) => setAltContactNumber(e.target.value)}
            required
          />

          <div className="text-lg font-semibold text-gray-700">Academic Details</div>
          <label className="font-bold text-gray-600">10th Marks (%)</label>
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Enter your 10th marks"
            value={marks10}
            onChange={(e) => setMarks10(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">12th Marks (%)</label>
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Enter your 12th marks"
            value={marks12}
            onChange={(e) => setMarks12(e.target.value)}
            required
          />
          <label className="font-bold text-gray-600">Diploma Marks (%) (Optional)</label>
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Enter your diploma marks"
            value={diplomaMarks}
            onChange={(e) => setDiplomaMarks(e.target.value)}
          />

          {/* Semester CGPA Fields */}
          {[...Array(6)].map((_, i) => (
            <div key={`cgpa-${i}`}>
              <label className="font-bold text-gray-600">Semester {i + 1} CGPA</label>
              <input
                type="number"
                className="p-2 border rounded"
                placeholder={`Enter semester ${i + 1} CGPA`}
                value={semCgpa[i]}
                onChange={(e) => {
                  let newCgpa = [...semCgpa];
                  newCgpa[i] = e.target.value;
                  setSemCgpa(newCgpa);
                }
                }
                required
              />
            </div>
          ))}

          {/* Aggregate CGPA & Marks % Fields */}
          <div>
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
          </div>

          <div>
            <label className="font-bold text-gray-600">Engineering Marks %</label>
            <input
              type="number"
              step="0.01"
              className="p-2 border border-gray-400 rounded bg-white text-gray-900"
              placeholder="Enter your marks percentage"
              value={marksPercent}
              onChange={(e) => setMarksPercent(e.target.value)}
              required
            />
          </div>

          {/* Semester KT Fields */}
          {[...Array(6)].map((_, i) => (
            <div key={`kt-${i}`}>
              <label className="font-bold text-gray-600">Semester {i + 1} KTs</label>
              <input
                type="number"
                className="p-2 border rounded"
                placeholder={`Enter semester ${i + 1} KTs`}
                value={semKts[i]}
                onChange={(e) => {
                  let newKts = [...semKts];
                  newKts[i] = e.target.value;
                  setSemKts(newKts);
                }
                }
                required
              />
            </div>
          ))}

          {/* Number of KTs Field */}
          <div>
            <label className="font-bold text-gray-600">Number of Live KTs</label>
            <input
              type="number"
              className="p-2 border border-gray-400 rounded bg-white text-gray-900"
              placeholder="Enter the number of live KTs"
              value={noOfLiveKts}
              onChange={(e) => setNoOfLiveKts(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="font-bold text-gray-600">Number of Dead KTs</label>
            <input
              type="number"
              className="p-2 border border-gray-400 rounded bg-white text-gray-900"
              placeholder="Enter the number of dead KTs"
              value={noOfDeadKts}
              onChange={(e) => setNoOfDeadKts(e.target.value)}
              required
            />
          </div>

          <label className="font-bold text-gray-600">Any Gap?</label>
          <div className="flex space-x-4">
            <label><input type="radio" name="gap" value="Yes" onChange={(e) => setGap(e.target.value)} required /> Yes</label>
            <label><input type="radio" name="gap" value="No" onChange={(e) => setGap(e.target.value)} required /> No</label>
          </div>

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

          <button type="submit" className="p-3 bg-blue-500 text-white rounded font-bold hover:bg-blue-600 active:bg-blue-700">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration_2;
