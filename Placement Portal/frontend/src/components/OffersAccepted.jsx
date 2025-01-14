import React from 'react';

const OffersAccepted = () => {
  return (
    <div className="w-full mt-8">
      <h3 className="text-xl font-bold mb-4 text-center sm:text-left"><center>Offers Accepted</center></h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
     
        <div className="flex flex-col items-center border border-gray-300 p-4 rounded">
          <img
            src="company-logo-placeholder.png"
            alt="Company Logo"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-bold text-sm sm:text-base">Company Name</p>
        </div>

        <div className="flex flex-col items-center border border-gray-300 p-4 rounded">
          <img
            src="company-logo-placeholder.png"
            alt="Company Logo"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-bold text-sm sm:text-base">Company Name</p>
        </div>

        <div className="flex flex-col items-center border border-gray-300 p-4 rounded">
          <img
            src="company-logo-placeholder.png"
            alt="Company Logo"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-bold text-sm sm:text-base">Company Name</p>
        </div>
      </div>
    </div>
  );
};

export default OffersAccepted;
