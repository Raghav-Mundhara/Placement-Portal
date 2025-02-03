import React from "react";

import ProfileSection from "../components/ProfileSection";
import Navbar from "../components/Navbar";


const StudentProfile = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <ProfileSection />
        
      </div>
    </div>
  );
};

export default StudentProfile;