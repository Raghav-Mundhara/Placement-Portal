
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Login from './pages/Login'
import StudentHome from './pages/StudentHome'
import SignUp from './pages/SignUp'
import Alumini from './pages/Alumini'
import Registration_1 from './pages/Registration_1'
import Registration_2 from './pages/Registration_2'
// import AdminDashboard from './pages/AdminVerificationDashboard'
import AdminHome from './pages/AdminHome'
import StudentProfile from './pages/StudentProfile';
import StudentVerification from './pages/StudentVerification';
import StudentPerformance from './pages/StudentPerformance';
import StudentDataPage from './pages/StudentDataPage'
import AdminVerificationDashboard from './pages/AdminVerificationDashboard';
import UploadExperience from './pages/UploadExperience'
import ViewExperience from './pages/ViewExperience'
import OfferLetters from './pages/OfferLetters'
import PlacementStatistics from './pages/PlacementStatistics'


function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/alumini" element={<Alumini />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Registration_1 />} />
        <Route path="/register" element={<Registration_2 />} />
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        <Route path="/student-verification/:id" element={<StudentVerification />} />
        <Route path="/admin-verification-dashboard" element={<AdminVerificationDashboard />} />
        <Route path="/student-verification" element={<StudentVerification />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/student-performance" element={<StudentPerformance />} />
        <Route path="/student-data" element={<StudentDataPage />} />
        <Route path="/upload-experience" element={<UploadExperience />} />
        <Route path="/student-view-experience" element={<ViewExperience />} />
        <Route path="/student-offer-letters" element={<OfferLetters />} />
        <Route path="/placement-statistics" element={<PlacementStatistics />} />
        <Route path="/admin-placement-statistics" element={<PlacementStatistics />} />

      
      </Routes>
    </BrowserRouter>
  )
}
export default App
