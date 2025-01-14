import React from 'react';
import CompanyProgress from '../components/CompanyProgress';
import Logo from '../components/Logo';

const Profile = ({ name, cgpa }) => (
  <>
    <Logo />
    <div className="flex flex-col items-center md:flex-row md:items-center justify-center m-4 space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center shadow-md">
        <img
          src=" "
          alt="Student Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-lg md:text-xl font-bold">Name: {name}</h2>
        <p className="text-sm md:text-base">AGG. CGPA: {cgpa}</p>
      </div>
    </div>
  </>
);

const StudentPerformance = () => (
  <div className="p-4 bg-gray-100 min-h-screen">
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md max-w-screen-lg mx-auto">
      <Profile name="ABC" cgpa="9.88" />
      <h3 className="text-lg md:text-2xl font-bold mb-4 text-center md:text-left">
        <center>Check Your Progress</center>
      </h3>
      <div className="space-y-6">
        <CompanyProgress
          name="Dolat Capital"
          role="SDE"
          steps={[
            { title: 'Aptitude + DSA', state: 'CLEARED', status: 'green-300' },
            { title: 'Interview 1', state: 'CLEARED', status: 'green-300' },
            {
              title: 'Technical Interview',
              state: 'Scheduled',
              status: 'yellow-200',
              scheduled: '14/09/24',
            },
          ]}
        />
        <CompanyProgress
          name="CarWale"
          role="SDE"
          steps={[{ title: 'Aptitude', state: 'NOT CLEARED', status: 'red-200' }]}
        />
      </div>
    </div>
  </div>
);

export default StudentPerformance;
