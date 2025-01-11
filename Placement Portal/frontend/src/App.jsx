
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Alumini from './pages/Alumini'

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alumini" element={<Alumini />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Registration_1 />} />
        <Route path="/register" element={<Registration_2 />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/student-verification/:id" element={<StudentVerification />} />
      
      </Routes>
    </BrowserRouter>
  )
}
export default App
