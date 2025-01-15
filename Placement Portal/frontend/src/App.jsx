
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import StudentRegistration from './pages/StudentRegistartion'
function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/studentregistration' element={<StudentRegistration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
