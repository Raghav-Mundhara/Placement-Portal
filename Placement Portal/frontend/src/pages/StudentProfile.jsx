import React from "react";

import ProfileSection from "../components/ProfileSection";
import StudentNavbar from "../components/StudentNavbar";


const StudentProfile = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <StudentNavbar />
      <div style={{ padding: "20px" }}>
        <ProfileSection />
        
      </div>
    </div>
  );
};

export default StudentProfile;
