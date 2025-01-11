import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'
import SignUp from './pages/SignUp'

import StudentVerification from './pages/StudentVerification';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/student-verification/:id" element={<StudentVerification />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
