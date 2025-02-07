import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Buttons from '../components/VerificationButtons';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';

const StudentVerification = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isAllVerified, setIsAllVerified] = useState({
    firstName: false,
    lastName: false,
    cgpa: false,
    kts: false,
  });
  const navigate = useNavigate(); 

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleButtonSelect = (field) => {
    setIsAllVerified(prevState => ({ ...prevState, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsVerified = Object.values(isAllVerified).every(value => value);
    if (isChecked && allFieldsVerified) {
      setShowPopup(true);
    } else {
      alert("Please verify the details, mark the checkbox, and select either Verify or Wrong Info button for all fields before submitting.");
    }
  };

  const handleGoHome = () => {
    navigate('/admin-verification-dashboard'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
    
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-lg w-full max-w-3xl">
        <AdminNavbar />
        <h2 className="text-3xl font-bold text-center mb-6 sm:mb-8">Student Verification</h2>

        <div className="flex flex-col space-y-4 sm:space-y-6">
          <Buttons label="First Name: Kanak" onButtonSelect={() => handleButtonSelect('firstName')} />
          <Buttons label="Last Name: ABC" onButtonSelect={() => handleButtonSelect('lastName')} />
          <Buttons label="Sem 1 CGPA: 9.00" onButtonSelect={() => handleButtonSelect('cgpa')} />
          <Buttons label="Sem 1 KTs: 1" onButtonSelect={() => handleButtonSelect('kts')} />
        </div>

        <div className="my-6 flex items-center justify-center">
          <input
            type="checkbox"
            id="verification"
            name="verification"
            className="mr-2 leading-tight"
            onChange={handleCheckbox}
          />
          <label htmlFor="verification" className="text-gray-700 text-lg sm:text-xl">
            I have verified all the details of a student with Original documents.
          </label>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 sm:px-8 sm:py-4"
          >
            Submit
          </button>
        </div>

        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 sm:p-10 rounded shadow-lg w-2/3 max-w-xl">
              <h3 className="text-2xl font-semibold text-center mb-4">Submitted Successfully!</h3>
              <button
                onClick={handleGoHome}                                                                                             
                className="mt-4 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 sm:px-8 sm:py-4"
              >
                Go to Home
              </button>
              
            </div>
            <Footer />
          </div>
  
        )}
      </div>
      
    </div>
  );
};

export default StudentVerification;