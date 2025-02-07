import React from "react";
import Footer from "../components/Footer";
import ProfileSection from "../components/ProfileSection";
import Navbar from "../components/Navbar";


const StudentProfile = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <ProfileSection />
        
      </div>
      <Footer />
    </div>
  );
};

export default StudentProfile;