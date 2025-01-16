import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import Button from '../components/button';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // You can navigate after the form is submitted
    navigate('/home');  // Redirect to Home page
  };


  const handleSubmit1 = () => {
    console.log("Navigating to studentregistration...");
    navigate('/studentregistration'); 
  };

  return (
    <div
      className="min-h-screen flex items-center justify-end bg-cover bg-center"
      style={{
        backgroundImage: "url('')"  // Set your image URL here
      }}
    >
      {/* Login Container */}
      <div className="w-full max-w-sm p-8 rounded-lg shadow-lg bg-white/70 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <span>Not registered? </span>
          <Button text="Register" onClick={handleSubmit1} /> 
      </div>
    </div>
  );
}

export default Login;

