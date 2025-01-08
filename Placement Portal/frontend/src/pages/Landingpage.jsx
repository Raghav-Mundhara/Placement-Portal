import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-slate-100 min-h-screen flex flex-col overflow-auto">
            {/* Header */}
            <header className="bg-slate-200 p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center w-full">
                <div className="text-black text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-0">Placement Portal</div>
                <nav>
                    <ul className="flex space-x-4 sm:space-x-6 md:space-x-8">
                        <li><a href="#home" className="text-black text-sm sm:text-base md:text-lg">Home</a></li>
                        <li><a href="#about" className="text-black text-sm sm:text-base md:text-lg">About</a></li>
                        <li><a href="#contact" className="text-black text-sm sm:text-base md:text-lg">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center w-full h-full p-4 sm:p-6 md:p-8">
                <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
                    Welcome to the Placement Portal
                </h1>
                <h2 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 text-center">
                    Register for Placement
                </h2>
                <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 text-center">
                    Join us and get placed in top companies.
                </p>
                
                <Link 
                    to="/register" 
                    className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base md:text-lg hover:bg-blue-600 transition-colors"
                >
                    Register
                </Link>
            </main>

            {/* Footer */}
            <footer className="bg-slate-200 p-4 sm:p-6 md:p-8 text-center w-full">
                <p className="text-slate-400 text-xs sm:text-sm md:text-base">
                    © 2023 Placement Portal. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;