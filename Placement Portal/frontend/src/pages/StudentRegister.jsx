import React, { useState } from 'react';
import axios from 'axios';

const StudentRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        division: '',
        cgpa: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/students/register', formData);
            alert('Registration successful!');
            console.log(response.data);
        } catch (error) {
            alert('Registration failed. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Roll Number Field */}
                <div className="mb-4">
                    <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">
                        Roll Number
                    </label>
                    <input
                        type="text"
                        id="rollNo"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Division Field */}
                <div className="mb-4">
                    <label htmlFor="division" className="block text-sm font-medium text-gray-700">
                        Division
                    </label>
                    <input
                        type="text"
                        id="division"
                        name="division"
                        value={formData.division}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* CGPA Field */}
                <div className="mb-6">
                    <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700">
                        CGPA (Up to Semester 6)
                    </label>
                    <input
                        type="number"
                        id="cgpa"
                        name="cgpa"
                        value={formData.cgpa}
                        onChange={handleChange}
                        min="0"
                        max="10"
                        step="0.01"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentRegistrationForm;