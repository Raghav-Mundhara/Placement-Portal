import React from 'react';
import OffersAccepted from './OffersAccepted';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ProfileSection = () => {
  return (
    <div className="container mx-auto mt-4 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Student Profile</h2>
      <div className="bg-white shadow-md rounded p-6 flex flex-col items-center">
        <img
          src=""
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-slate-300 mb-4"
        />

        {/* Name */}
        <p className="font-bold text-center mb-4 text-sm sm:text-base">Name: Vaishnavi</p>

        {/* Table Section */}
        <div className="w-full flex justify-center">
          <table className="w-full sm:w-2/3 text-left text-sm sm:text-base">
            <tbody>
              <tr className="border-b border-t">
                <th className="py-2">Semester:</th>
                <td className="py-2 relative">
                  <div className="relative w-full sm:w-24">
                    <select className="border p-2 rounded appearance-none pr-10 w-full">
                      {[...Array(8)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="h-5 w-5 text-gray-700"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-2">CGPA:</th>
                <td className="py-2">
                  <span className="font-bold">9</span>
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-2">No. of K.T:</th>
                <td className="py-2">
                  <span className="font-bold">1</span>
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-2">Aggregate CGPA:</th>
                <td className="py-2">
                  <span className="font-bold">8.9</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to="/student-performance">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 text-sm sm:text-base">
            Track Progress
          </button>
        </Link>
        <div className="w-full mt-4">
          <OffersAccepted />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;