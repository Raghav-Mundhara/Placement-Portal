import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RegistrationForm from "./pages/RegistrationForm";
import Login from "./pages/Login";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
