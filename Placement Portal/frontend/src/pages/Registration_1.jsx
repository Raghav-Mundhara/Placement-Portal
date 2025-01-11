import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration_1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/register');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200 text-slate-400">
      <div className="bg-slate-100 p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-5 text-black">Student Registration</h1>
        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <label
            htmlFor="email"
            className="text-lg mb-2 text-heading2 text-center font-bold"
          >
            VES Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-4/5 p-3 mb-4 text-black border border-slate-300 rounded-md bg-white text-heading2 text-base focus:outline-none focus:border-blue-500 focus:shadow-md"
          />
          <label
            htmlFor="password"
            className="text-lg mb-2 text-heading2 text-center font-bold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-4/5 p-3 mb-4 text-black border border-slate-300 rounded-md bg-white text-heading2 text-base focus:outline-none focus:border-blue-500 focus:shadow-md"
          />
           <label
            htmlFor="confirmPassword"
            className="text-lg mb-2 text-heading2 text-center font-bold"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-4/5 p-3 mb-4 text-black border border-slate-300 rounded-md bg-white text-heading2 text-base focus:outline-none focus:border-blue-500 focus:shadow-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-4 w-4/5 rounded-md mt-4 text-lg hover:bg-blue-600 active:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration_1;