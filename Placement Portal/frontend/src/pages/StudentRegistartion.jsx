// import React, { useState } from 'react';

// function RegistrationPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [additionalFields, setAdditionalFields] = useState({
//     firstName: '',
//     lastName: '',
//     age: '',
//     address: '',
//   });
//   const [isSaved, setIsSaved] = useState(false);

//   // Save email and password
//   const handleSave = () => {
//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     // Save email and password to localStorage
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);

//     setIsSaved(true); // Enable additional fields
//     alert('Email and password saved! You can now fill in the additional fields.');
//   };

//   // Handle registration
//   const handleRegister = () => {
//     // Get email and password from localStorage
//     const emailFromLocal = localStorage.getItem('email');
//     const passwordFromLocal = localStorage.getItem('password');

//     // Combine data
//     const userData = {
//       email: emailFromLocal,
//       password: passwordFromLocal,
//       ...additionalFields,
//     };

//     console.log('User Data:', userData);

//     // Simulate sending data to database
//     alert('Registration successful! Data saved to database.');
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>
        
//         {/* Email and Password Section */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <button
//           onClick={handleSave}
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-6"
//         >
//           Save
//         </button>

//         {/* Additional Fields */}
//         <fieldset disabled={!isSaved} className="mb-4">
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">First Name</label>
//             <input
//               type="text"
//               value={additionalFields.firstName}
//               onChange={(e) =>
//                 setAdditionalFields({ ...additionalFields, firstName: e.target.value })
//               }
//               className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Last Name</label>
//             <input
//               type="text"
//               value={additionalFields.lastName}
//               onChange={(e) =>
//                 setAdditionalFields({ ...additionalFields, lastName: e.target.value })
//               }
//               className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Age</label>
//             <input
//               type="number"
//               value={additionalFields.age}
//               onChange={(e) =>
//                 setAdditionalFields({ ...additionalFields, age: e.target.value })
//               }
//               className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Address</label>
//             <input
//               type="text"
//               value={additionalFields.address}
//               onChange={(e) =>
//                 setAdditionalFields({ ...additionalFields, address: e.target.value })
//               }
//               className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//         </fieldset>

//         {/* Register Button */}
//         <button
//           onClick={handleRegister}
//           className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//         >
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default RegistrationPage;


import React, { useState } from 'react';
import Button from '../components/button'; // Adjust the path based on your project structure

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [additionalFields, setAdditionalFields] = useState({
    firstName: '',
    lastName: '',
    age: '',
    address: '',
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setIsSaved(true);
    alert('Email and password saved! You can now fill in the additional fields.');
  };

  const handleRegister = () => {
    const emailFromLocal = localStorage.getItem('email');
    const passwordFromLocal = localStorage.getItem('password');

    const userData = {
      email: emailFromLocal,
      password: passwordFromLocal,
      ...additionalFields,
    };

    console.log('User Data:', userData);
    alert('Registration successful! Data saved to database.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Student Registration</h2>

        {/* Email and Password Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <Button
            text="Save"
            onClick={handleSave}
            className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300"
          />
        </div>

        {/* Additional Fields */}
        <fieldset disabled={!isSaved} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">First Name</label>
            <input
              type="text"
              value={additionalFields.firstName}
              onChange={(e) =>
                setAdditionalFields({ ...additionalFields, firstName: e.target.value })
              }
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Last Name</label>
            <input
              type="text"
              value={additionalFields.lastName}
              onChange={(e) =>
                setAdditionalFields({ ...additionalFields, lastName: e.target.value })
              }
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Age</label>
            <input
              type="number"
              value={additionalFields.age}
              onChange={(e) =>
                setAdditionalFields({ ...additionalFields, age: e.target.value })
              }
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Address</label>
            <input
              type="text"
              value={additionalFields.address}
              onChange={(e) =>
                setAdditionalFields({ ...additionalFields, address: e.target.value })
              }
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
            />
          </div>
        </fieldset>

        {/* Register Button */}
        <div className="mt-8">
          <Button
            text="Register"
            onClick={handleRegister}
            className="w-full py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
