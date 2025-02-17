import React, { useState } from 'react';

const VerificationButtons = ({ label, onButtonSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleVerify = () => {
    setSelected('verified');
    onButtonSelect(); // Notify parent that a button was clicked
  };

  const handleWrongInfo = () => {
    setSelected('wrong');
    onButtonSelect(); // Notify parent that a button was clicked
  };

  return (
    <div className="mb-4 flex items-center justify-center">
      <label className="w-1/4 text-gray-700 text-lg">{label}</label>
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
  );
};

export default VerificationButtons;
