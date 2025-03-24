// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Departments from "./pages/Departments";
import StaffSelection from "./pages/StaffSelection";
import RatingForm from "./pages/RatingForm";
import VerificationForm from "./pages/VerificationForm";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/staff/:departmentId" element={<StaffSelection />} />
        <Route path="/rate/:staffId" element={<RatingForm />} />
        <Route path="/verify" element={<VerificationForm />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
