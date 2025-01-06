import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-slate-100 min-h-screen flex flex-col">
            <header className="bg-slate-200 p-4 flex justify-between items-center">
                <div className="text-black text-2xl font-bold">Placement Portal</div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="text-black">Home</a></li>
                        <li><a href="#about" className="text-black">About</a></li>
                        <li><a href="#contact" className="text-black">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-black text-4xl font-bold mb-4">Welcome to the Placement Portal</h1>
                <h2 className="text-black text-2xl mb-4">Register for Placement</h2>
                <p className="text-slate-400 mb-8">Join us and get placed in top companies.</p>
                
                <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded">Register</Link>
            </main>
            <footer className="bg-slate-200 p-4 text-center w-full">
                <p className="text-slate-400">© 2023 Placement Portal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;