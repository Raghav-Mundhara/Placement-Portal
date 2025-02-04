import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import Button from '../components/button';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Initially no role selected

  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role); // Log selected role

    // Redirect based on role
    if (role === 'admin') {
      navigate('/admin-home');
    } else {
      navigate('/student-home');
    }
  };

  const handleSubmit1 = () => {
    console.log("Navigating to studentregistration...");
    navigate('/studentregistration');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('')"  // Set your image URL here
      }}
    >
      {/* Login Container */}
      <div className="w-full max-w-md p-8 rounded-lg shadow-xl bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Radio Buttons for Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Login as</label>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === 'admin'}
                  onChange={() => setRole('admin')}
                  className="form-radio text-blue-600 focus:ring-2 focus:ring-blue-400"
                />
                <span className="ml-2 text-gray-800">Admin</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === 'student'}
                  onChange={() => setRole('student')}
                  className="form-radio text-blue-600 focus:ring-2 focus:ring-blue-400"
                />
                <span className="ml-2 text-gray-800">Student</span>
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              disabled={!role} // Disable until role is selected
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              disabled={!role} // Disable until role is selected
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
            disabled={!role} // Disable submit button until role is selected
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <span>Not registered? </span>
          <Button text="Register" onClick={handleSubmit1} />
        </div>
      </div>
    </div>
  );
}

export default Login;