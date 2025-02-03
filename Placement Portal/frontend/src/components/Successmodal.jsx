import React from "react";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-black text-xl font-bold mb-4">Submission Successful</h2>
        <p className="text-slate-400">
          Your experience has been submitted.
        </p>
        <button
          className="mt-4 bg-sky-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;