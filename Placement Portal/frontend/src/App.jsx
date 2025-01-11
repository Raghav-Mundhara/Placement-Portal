import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration_1 from "./pages/Registration_1";
import Registration_2 from "./pages/Registration_2";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Registration_1 />} />
      <Route path="/register" element={<Registration_2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
