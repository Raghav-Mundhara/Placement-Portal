
// import './App.css'
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// // import Login from './pages/Login'
// import Home from './pages/Home'
// import SignUp from './pages/SignUp'

// function App() {  
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App



import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/StudentHome.jsx'
import SignUp from './pages/SignUp'
import Alumini from './pages/Alumini'
import Registration_1 from './pages/Registration_1'
import Registration_2 from './pages/Registration_2'
import AdminDashboard from './pages/AdminDashboard'
import StudentVerification from './pages/StudentVerification'
import PlacementStatistics from './pages/PlacementStatistics.jsx'


function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/studenthome" element={<Home />} />
        <Route path="/Alumini" element={<Alumini />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<Registration_1 />} /> */}
        <Route path="/register" element={<Registration_2 />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-verification/:id" element={<StudentVerification />} />
        <Route path='/studentregistration' element={<Registration_1/>} />
        <Route path='/placementsStatistics' element={<PlacementStatistics/>} />
      
      </Routes>
    </BrowserRouter>
  )
}
export default App