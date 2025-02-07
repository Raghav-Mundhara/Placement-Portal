import React from 'react'
import Footer from '../components/Footer'
import AdminNavbar from '../components/AdminNavbar'
import Announcements from '../components/Announcements'

const announcements = [
    "Dolat Capital is hiring for freshers!",
    "TCS Interview scheduled for 02/01/25.",
    "Mock Test starts tomorrow!",
    "Infosys campus drive next week.",
    "Prepare for the Hackathon event on 10/01/25.",
    "Resume submission deadline extended to 15/01/25.",
    "Seminar on AI and ML scheduled for 12/01/25.",
    "New coding challenges added to the portal.",
  ];


const AdminHome = () => {
    return (
        <div>
            <AdminNavbar />
            
            <div className="w-full md:w-1/3 lg:w-1/4 pr-4">
                <Announcements announcements={announcements}/>
            </div>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold my-4">Welcome Admin</h1>
                <p className="text-lg">
                    You can manage the portal from here.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default AdminHome;