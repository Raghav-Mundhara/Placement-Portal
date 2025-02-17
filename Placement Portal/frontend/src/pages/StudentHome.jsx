// import React from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar';
// import Notification from '../components/Notification';

// function Home() {
//   return (
//     <div className='bg-slate-900'>
//         <Navbar/>
//         <Notification />
//       {/* Stats Section */}
      
//         <Footer />
//     </div>
//   );
// };

// export default Home






import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';

const StudentHome = () => {
  const activeJobs = [
    {
      company: 'Google',
      status: 'Applied',
    },
    {
      company: 'Microsoft',
      status: 'Not Eligible',
    },
    {
      company: 'Amazon',
      status: 'Eligible',
    },
  ];

  const schedule = [
    {
      company: 'Google',
      round: 'Technical Interview',
      date: '2025-01-15',
      time: '10:00 AM',
      roundNumber: 2,
    },
    {
      company: 'Amazon',
      round: 'HR Interview',
      date: '2025-01-18',
      time: '2:00 PM',
      roundNumber: 3,
    },
  ];

  const placementRules = [
    'Maintain a professional resume.',
    'Arrive at the interview venue on time.',
    'Dress in formal attire for all placements.',
    'Ensure all necessary documents are in order.',
    'Respect the placement process and timeline.',
  ];

  const announcements = [
    "Dolat Capital is hiring for freshers!",
    "TCS Interview scheduled for 02/01/25.",
    "Mock Test starts tomorrow!",
    "Infosys campus drive next week.",
    "Prepare for the Hackathon event on 10/01/25.",
    "Resume submission deadline extended to 15/01/25.",
    "Seminar on AI and ML scheduled for 12/01/25.",
    "New coding challenges added to the portal.",
  ];

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto flex-grow mt-6 flex flex-col md:flex-row space-y-6 md:space-y-0">
        {/* Left Sidebar - Notification */}
        <div className="w-full md:w-1/3 lg:w-1/4 pr-4">
          <Announcements announcements={announcements}/>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Active Jobs Section */}
          <section>
            <h2 className="text-2xl font-bold text-sky-500 dark:text-sky-400 mb-4">
              Active Jobs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeJobs.map((job, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-200 dark:bg-slate-800 rounded shadow"
                >
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    {job.company}
                  </h3>
                  <button
                    className={`mt-2 px-4 py-2 rounded text-white ${
                      job.status === 'Applied'
                        ? 'bg-green-500'
                        : job.status === 'Not Eligible'
                        ? 'bg-red-500'
                        : 'bg-sky-500 hover:bg-sky-400'
                    }`}
                    disabled={job.status === 'Not Eligible'}
                  >
                    {job.status === 'Eligible'
                      ? 'Apply Now'
                      : job.status === 'Applied'
                      ? 'Applied'
                      : 'Not Eligible'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Schedule Section */}
          <section>
            <h2 className="text-2xl font-bold text-sky-500 dark:text-sky-400 mb-4">
              Interview Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schedule.map((event, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-200 dark:bg-slate-800 rounded shadow"
                >
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    {event.company}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-300">
                    {event.round}
                  </p>
                  <p className="text-slate-500 dark:text-slate-300">
                    Date: {event.date}
                  </p>
                  <p className="text-slate-500 dark:text-slate-300">
                    Time: {event.time}
                  </p>
                  <p className="text-slate-500 dark:text-slate-300">
                    Round: {event.roundNumber}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Placement Rules Section */}
          <section>
            <h2 className="text-2xl font-bold text-sky-500 dark:text-sky-400 mb-4">
              Placement Rules
            </h2>
            <ul className="list-disc list-inside bg-slate-200 dark:bg-slate-800 p-4 rounded shadow">
              {placementRules.map((rule, index) => (
                <li key={index} className="text-slate-500 dark:text-slate-300">
                  {rule}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentHome;












// // // HomePage.jsx
// // import React from 'react';

// // const HomePage = () => {
// //   return (
// //     <div className="font-sans">
// //       {/* Header */}
// //       <header className="bg-blue-500 text-white p-4">
// //         <div className="container mx-auto flex justify-between items-center">
// //           <h1 className="text-2xl font-bold">IT Department Placement Portal</h1>
// //           <nav className="space-x-4">
// //             <a href="#" className="hover:underline">Home</a>
// //             <a href="#" className="hover:underline">About Us</a>
// //             <a href="#" className="hover:underline">Placements</a>
// //             <a href="#" className="hover:underline">Dashboard</a>
// //             <a href="#" className="hover:underline">Contact Us</a>
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <section className="bg-gray-100 py-20 text-center">
// //         <h2 className="text-4xl font-bold text-blue-600">Empowering Careers, Building Futures</h2>
// //         <p className="mt-4 text-lg text-gray-600">Join us to kickstart your career with the best opportunities.</p>
// //         <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register Now</button>
// //       </section>

// //       {/* Stats Section */}
// //       <section className="py-12 bg-white">
// //         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
// //           <div>
// //             <h3 className="text-3xl font-bold text-blue-600">100+</h3>
// //             <p className="text-gray-600">Companies</p>
// //           </div>
// //           <div>
// //             <h3 className="text-3xl font-bold text-blue-600">500+</h3>
// //             <p className="text-gray-600">Placements</p>
// //           </div>
// //           <div>
// //             <h3 className="text-3xl font-bold text-blue-600">50+</h3>
// //             <p className="text-gray-600">Workshops</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="bg-gray-100 py-12">
// //         <div className="container mx-auto text-center">
// //           <h2 className="text-2xl font-bold text-blue-600 mb-6">Why Choose Us?</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <div className="p-4 bg-white shadow rounded">
// //               <h3 className="font-bold text-lg">Company Listings</h3>
// //               <p className="text-gray-600">Browse top companies visiting our campus.</p>
// //             </div>
// //             <div className="p-4 bg-white shadow rounded">
// //               <h3 className="font-bold text-lg">Student Profiles</h3>
// //               <p className="text-gray-600">Showcase your skills and achievements.</p>
// //             </div>
// //             <div className="p-4 bg-white shadow rounded">
// //               <h3 className="font-bold text-lg">Placement Reports</h3>
// //               <p className="text-gray-600">Access detailed placement statistics.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="py-12 bg-white">
// //         <div className="container mx-auto text-center">
// //           <h2 className="text-2xl font-bold text-blue-600 mb-6">What Our Students Say</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //             <blockquote className="bg-gray-100 p-4 rounded shadow">
// //               "The placement portal helped me connect with top companies and secure my dream job!" - <strong>John Doe</strong>
// //             </blockquote>
// //             <blockquote className="bg-gray-100 p-4 rounded shadow">
// //               "A seamless experience from registration to placement. Highly recommended!" - <strong>Jane Smith</strong>
// //             </blockquote>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-blue-500 text-white py-6">
// //         <div className="container mx-auto text-center">
// //           <p>&copy; 2025 IT Department Placement Portal. All rights reserved.</p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default HomePage;



// import React, { useState, useEffect } from 'react';

// const HomePage = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Sync theme with the root HTML element
//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (isDarkMode) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   // Toggle theme handler
//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div className="font-sans bg-slate-100 dark:bg-slate-900 text-black dark:text-white">
//       {/* Header */}
//       <header className="bg-slate-200 dark:bg-slate-900 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-black dark:text-white">
//             IT Department Placement Portal
//           </h1>
//           <nav className="space-x-4 flex items-center">
//             <a href="#" className="hover:underline text-black dark:text-white">
//               Home
//             </a>
//             <a href="#" className="hover:underline text-black dark:text-white">
//               About Us
//             </a>
//             <a href="#" className="hover:underline text-black dark:text-white">
//               Placements
//             </a>
//             <a href="#" className="hover:underline text-black dark:text-white">
//               Dashboard
//             </a>
//             <a href="#" className="hover:underline text-black dark:text-white">
//               Contact Us
//             </a>
//             {/* Theme Toggle Button */}
//             <button
//               onClick={toggleTheme}
//               className="ml-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-400 focus:outline-none"
//             >
//               {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//             </button>
//           </nav>
//         </div>
//       </header>

      // {/* Hero Section */}
      // <section className="bg-slate-100 dark:bg-slate-900 py-20 text-center">
      //   <h2 className="text-4xl font-bold text-sky-500 dark:text-sky-400">
      //     Empowering Careers, Building Futures
      //   </h2>
      //   <p className="mt-4 text-lg text-slate-400">
      //     Join us to kickstart your career with the best opportunities.
      //   </p>
      //   <button className="mt-6 px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-400">
      //     Register Now
      //   </button>
      // </section>

      // {/* Stats Section */}
      // <section className="py-12 bg-slate-100 dark:bg-slate-900">
      //   <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      //     <div>
      //       <h3 className="text-3xl font-bold text-sky-500 dark:text-sky-400">
      //         100+
      //       </h3>
      //       <p className="text-slate-400">Companies</p>
      //     </div>
      //     <div>
      //       <h3 className="text-3xl font-bold text-sky-500 dark:text-sky-400">
      //         500+
      //       </h3>
      //       <p className="text-slate-400">Placements</p>
      //     </div>
      //     <div>
      //       <h3 className="text-3xl font-bold text-sky-500 dark:text-sky-400">
      //         50+
      //       </h3>
      //       <p className="text-slate-400">Workshops</p>
      //     </div>
      //   </div>
      // </section>

      // {/* Features Section */}
      // <section className="bg-slate-100 dark:bg-slate-900 py-12">
      //   <div className="container mx-auto text-center">
      //     <h2 className="text-2xl font-bold text-sky-500 dark:text-sky-400 mb-6">
      //       Why Choose Us?
      //     </h2>
      //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      //       <div className="p-4 bg-slate-200 dark:bg-slate-800 shadow rounded">
      //         <h3 className="font-bold text-lg">Company Listings</h3>
      //         <p className="text-slate-400">
      //           Browse top companies visiting our campus.
      //         </p>
      //       </div>
      //       <div className="p-4 bg-slate-200 dark:bg-slate-800 shadow rounded">
      //         <h3 className="font-bold text-lg">Student Profiles</h3>
      //         <p className="text-slate-400">
      //           Showcase your skills and achievements.
      //         </p>
      //       </div>
      //       <div className="p-4 bg-slate-200 dark:bg-slate-800 shadow rounded">
      //         <h3 className="font-bold text-lg">Placement Reports</h3>
      //         <p className="text-slate-400">
      //           Access detailed placement statistics.
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </section>

      // {/* Testimonials Section */}
      // <section className="py-12 bg-slate-100 dark:bg-slate-900">
      //   <div className="container mx-auto text-center">
      //     <h2 className="text-2xl font-bold text-sky-500 dark:text-sky-400 mb-6">
      //       What Our Students Say
      //     </h2>
      //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      //       <blockquote className="bg-slate-200 dark:bg-slate-800 p-4 rounded shadow">
      //         "The placement portal helped me connect with top companies and
      //         secure my dream job!" - <strong>John Doe</strong>
      //       </blockquote>
      //       <blockquote className="bg-slate-200 dark:bg-slate-800 p-4 rounded shadow">
      //         "A seamless experience from registration to placement. Highly
      //         recommended!" - <strong>Jane Smith</strong>
      //       </blockquote>
      //     </div>
      //   </div>
      // </section>

//       {/* Footer */}
//       <footer className="bg-slate-200 dark:bg-slate-900 text-slate-400 py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2025 IT Department Placement Portal. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
