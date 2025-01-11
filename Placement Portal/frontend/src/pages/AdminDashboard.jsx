import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  const students = [
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl text-black">Registered Students</h1>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">Name</th>
                <th className="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border border-gray-300">
                  <td className="px-4 py-2 text-slate-400 border border-gray-300" style={{ color: "#94a3b8" }}>{student.name}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <Link to={`/student-verification/${student.id}`} className="p-2 bg-blue-500 text-white rounded">Verify Student</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
