// import React from "react";

// const Announcements = ({ announcements }) => {
//   return (
//     <div className="w-full max-h-90 border border-gray-300 bg-gray-100 rounded-lg p-4 overflow-hidden">
//       <h2 className="text-lg font-semibold mb-4 text-gray-700">
//         Announcements
//       </h2>
//       <div className="relative h-full overflow-hidden">
//         <ul className="space-y-2 animate-scroll">
//           {announcements.map((announcement, index) => (
//             <li
//               key={index}
//               className="p-2 bg-white rounded shadow-sm hover:bg-gray-50 transition"
//             >
//               {announcement}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Announcements;

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
