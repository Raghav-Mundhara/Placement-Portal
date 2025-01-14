import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration_1 from "./pages/Registration_1";
import Registration_2 from "./pages/Registration_2";
import OfferLetters from "./pages/OfferLetters";
import ViewExperience from "./pages/ViewExperience";
import UploadExperience from "./pages/UploadExperience";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Registration_1 />} />
      <Route path="/register" element={<Registration_2 />} />
      <Route path="/offers" element={<OfferLetters />} />
      <Route path="/view-experience" element={<ViewExperience />} />
      <Route path="/upload-experience" element={<UploadExperience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
