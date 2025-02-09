// import React from 'react'
// import Footer from '../components/Footer'
// import AdminNavbar from '../components/AdminNavbar'
// import Announcements from '../components/Announcements'

// const announcements = [
//     "Dolat Capital is hiring for freshers!",
//     "TCS Interview scheduled for 02/01/25.",
//     "Mock Test starts tomorrow!",
//     "Infosys campus drive next week.",
//     "Prepare for the Hackathon event on 10/01/25.",
//     "Resume submission deadline extended to 15/01/25.",
//     "Seminar on AI and ML scheduled for 12/01/25.",
//     "New coding challenges added to the portal.",
//   ];


// const AdminHome = () => {
//     return (
//         <div>
//             <AdminNavbar />
            
//             <div className="w-full md:w-1/3 lg:w-1/4 pr-4">
//                 <Announcements announcements={announcements}/>
//             </div>
//             <div className="container mx-auto">
//                 <h1 className="text-2xl font-bold my-4">Welcome Admin</h1>
//                 <p className="text-lg">
//                     You can manage the portal from here.
//                 </p>
//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default AdminHome



// import React from 'react';
// import Footer from '../components/Footer';
// import AdminNavbar from '../components/AdminNavbar';
// import Announcements from '../components/Announcements';
// import { FaUserTie, FaClipboardList, FaUsers, FaChartBar } from 'react-icons/fa';

// const announcements = [
//     "Dolat Capital is hiring for freshers!",
//     "TCS Interview scheduled for 02/01/25.",
//     "Mock Test starts tomorrow!",
//     "Infosys campus drive next week.",
//     "Prepare for the Hackathon event on 10/01/25.",
//     "Resume submission deadline extended to 15/01/25.",
//     "Seminar on AI and ML scheduled for 12/01/25.",
//     "New coding challenges added to the portal.",
// ];

// const AdminHome = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <AdminNavbar />
            
//             <div className="container mx-auto py-10 px-4">
//                 <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome, Admin</h1>
//                 <p className="text-lg text-center text-gray-600 mb-10">Manage and oversee the placement process efficiently.</p>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
//                         <FaUserTie className="text-blue-500 text-5xl mb-3" />
//                         <h2 className="text-xl font-semibold">Manage Recruiters</h2>
//                         <p className="text-gray-600 text-center">Add, update, or remove recruiters and job listings.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
//                         <FaClipboardList className="text-green-500 text-5xl mb-3" />
//                         <h2 className="text-xl font-semibold">Job Applications</h2>
//                         <p className="text-gray-600 text-center">Review and track student job applications.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
//                         <FaUsers className="text-purple-500 text-5xl mb-3" />
//                         <h2 className="text-xl font-semibold">Student Database</h2>
//                         <p className="text-gray-600 text-center">Manage student profiles and placement records.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
//                         <FaChartBar className="text-red-500 text-5xl mb-3" />
//                         <h2 className="text-xl font-semibold">Placement Statistics</h2>
//                         <p className="text-gray-600 text-center">View placement reports and analytics.</p>
//                     </div>
//                 </div>

//                 <div className="mt-12">
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Announcements</h2>
//                     <div className="w-full md:w-2/3 lg:w-1/2">
//                         <Announcements announcements={announcements} />
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default AdminHome;


import React from "react";
import { FaUserTie, FaClipboardList, FaUsers, FaChartBar } from "react-icons/fa";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";

const announcements = [
  " Dolat Capital is hiring for freshers!",
  " TCS Interview scheduled for 02/01/25.",
  " Mock Test starts tomorrow!",
  " Infosys campus drive next week.",
  " Prepare for the Hackathon event on 10/01/25.",
  " Resume submission deadline extended to 15/01/25.",
  " Seminar on AI and ML scheduled for 12/01/25.",
  " New coding challenges added to the portal.",
];

const AdminHome = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <AdminNavbar />

      {/* Announcements Section */}
      <div className="bg-sky-500 text-white py-3 text-center shadow-md">
        <marquee behavior="scroll" direction="left" className="text-lg font-semibold">
          {announcements.join(" | ")}
        </marquee>
      </div>

      {/* Admin Dashboard */}
      <div className="flex-1 container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome, Admin</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Left Section - Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
            <ul className="text-gray-600 space-y-3">
              <li className="hover:text-blue-600 cursor-pointer">🔹 Manage Students</li>
              <li className="hover:text-blue-600 cursor-pointer">🔹 Update Placement Records</li>
              <li className="hover:text-blue-600 cursor-pointer">🔹 Add New Company</li>
              <li className="hover:text-blue-600 cursor-pointer">🔹 View Placement Stats</li>
            </ul>
          </div>

          {/* Center Section - Overview Cards */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-blue-50">
                <FaUsers className="text-blue-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Manage Students</h3>
                  <p className="text-gray-500 text-sm">View and update student details</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-green-50">
                <FaClipboardList className="text-green-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Placement Records</h3>
                  <p className="text-gray-500 text-sm">Track student placements</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-yellow-50">
                <FaUserTie className="text-yellow-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Company Listings</h3>
                  <p className="text-gray-500 text-sm">Manage companies & job postings</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-red-50">
                <FaChartBar className="text-red-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Placement Analytics</h3>
                  <p className="text-gray-500 text-sm">View placement trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminHome;
