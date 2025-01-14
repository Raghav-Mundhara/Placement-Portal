import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AdminVerificationDashboard from './pages/AdminVerificationDashboard';
import StudentProfile from './pages/StudentProfile';
import StudentVerification from './pages/StudentVerification';
import StudentPerformance from './pages/StudentPerformance';
import StudentDataPage from './pages/StudentDataPage'


function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-verification-dashboard" element={<AdminVerificationDashboard />} />
        <Route path="/student-verification" element={<StudentVerification />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/student-performance" element={<StudentPerformance />} />
        <Route path="/student-data" element={<StudentDataPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
