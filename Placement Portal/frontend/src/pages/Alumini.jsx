import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';

const Alumini = () => {
    const [branch, setBranch] = useState('Information Technology');
    const [graduationYear, setGraduationYear] = useState('2024');

    const handleBranchChange = (event) => {
        setBranch(event.target.value);
    };

    const handleGraduationYearChange = (event) => {
        setGraduationYear(event.target.value);
    };

    return (
        <div>
            <AdminNavbar />
            <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Alumni Page</h1>
            <div className="flex space-x-4 mb-4">
                <div>
                    <label htmlFor="branch" className="mr-2">Branch: </label>
                    <select id="branch" value={branch} onChange={handleBranchChange} className="border rounded p-2">
                        <option value="Information Technology">Information Technology</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="graduationYear" className="mr-2">Graduation Year: </label>
                    <select id="graduationYear" value={graduationYear} onChange={handleGraduationYearChange} className="border rounded p-2">
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                    </select>
                </div>
            </div>
            <table className="min-w-full bg-white border-2 border-gray-400">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-2 border-gray-400">Name</th>
                        <th className="px-4 py-2 border-2 border-gray-400">Branch</th>
                        <th className="px-4 py-2 border-2 border-gray-400">Graduation Year</th>
                        <th className="px-4 py-2 border-2 border-gray-400">Current Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border-2 border-gray-400">John Doe</td>
                        <td className="px-4 py-2 border-2 border-gray-400">Information Technology</td>
                        <td className="px-4 py-2 border-2 border-gray-400">2024</td>
                        <td className="px-4 py-2 border-2 border-gray-400">Google</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border-2 border-gray-400">Jane Smith</td>
                        <td className="px-4 py-2 border-2 border-gray-400">Computer Engineering</td>
                        <td className="px-4 py-2 border-2 border-gray-400">2023</td>
                        <td className="px-4 py-2 border-2 border-gray-400">Microsoft</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        </div>
);
};

export default Alumini;