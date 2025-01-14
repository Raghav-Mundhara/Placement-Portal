import React, { useState } from 'react';

const VerificationButtons = ({ label, onButtonSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleVerify = () => {
    setSelected('verified');
    onButtonSelect();
  };

  const handleWrongInfo = () => {
    setSelected('wrong');
    onButtonSelect(); 
  };

  return (
    <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
      <label className="w-full sm:w-1/4 text-gray-700 text-lg sm:text-xl text-center sm:text-left">{label}</label>
      <div className="flex space-x-4 mt-2 sm:mt-0">
        <button
          onClick={handleVerify}
          className={`px-4 py-2 rounded mx-2 ${selected === 'verified' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
          disabled={selected === 'verified'}
        >
          {selected === 'verified' ? 'Verified' : 'Verify'}
        </button>
        <button
          onClick={handleWrongInfo}
          className={`px-4 py-2 rounded mx-2 ${selected === 'wrong' ? 'bg-red-700' : 'bg-red-500 text-white hover:bg-red-700'}`}
          disabled={selected === 'wrong'}
        >
          Wrong Info
        </button>
      </div>
    </div>
  );
};

export default VerificationButtons;
