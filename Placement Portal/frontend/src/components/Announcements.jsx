// import React, { useState, useEffect } from 'react';

// const Notification = () => {
//   const [jobUpdates, setJobUpdates] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch job updates from the backend
//   useEffect(() => {
//     const fetchJobUpdates = async () => {
//       try {
//         // Replace this with your API endpoint
//         const response = await fetch('/api/jobs/updates');
//         const data = await response.json();
//         setJobUpdates(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching job updates:', error);
//         setLoading(false);
//       }
//     };

//     fetchJobUpdates();
//   }, []);

//   return (
//     <aside className="w-full md:w-1/4 bg-slate-200 dark:bg-slate-800 p-4 rounded shadow-md">
//       <h2 className="text-xl font-bold text-sky-500 dark:text-sky-400 mb-4">
//         Job Updates
//       </h2>
//       {loading ? (
//         <p className="text-slate-500 dark:text-slate-300">Loading updates...</p>
//       ) : jobUpdates.length > 0 ? (
//         <ul className="space-y-2">
//           {jobUpdates.map((job, index) => (
//             <li
//               key={index}
//               className="p-2 bg-slate-300 dark:bg-slate-700 rounded hover:bg-slate-400 dark:hover:bg-slate-600"
//             >
//               <h3 className="font-semibold text-black dark:text-white">
//                 {job.title}
//               </h3>
//               <p className="text-slate-500 dark:text-slate-300 text-sm">
//                 {job.description}
//               </p>
//               <p className="text-slate-400 dark:text-slate-500 text-xs">
//                 Posted on: {new Date(job.postedDate).toLocaleDateString()}
//               </p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-slate-500 dark:text-slate-300">
//           No new job updates at the moment.
//         </p>
//       )}
//     </aside>
//   );
// };

// export default Notification;





import React from "react";

const Announcements = ({ announcements }) => {
  return (
    <div className="w-full h-92 border border-gray-300 bg-gray-100 rounded-lg p-4 overflow-hidden">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Announcements
      </h2>
      <div className="relative h-full overflow-hidden">
        <ul className="space-y-2 animate-scroll-reverse">
          {announcements.map((announcement, index) => (
            <li
              key={index}
              className="p-2 bg-white rounded shadow-sm hover:bg-gray-50 transition"
            >
              {announcement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Announcements;