import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePageIndex from "./pages/HomePage/Index";
import AboutUsIndex from "./pages/AboutUsPage/Index";
import CoursesIndex from "./pages/CoursesPage/Index";
import ContactIndex from "./pages/contactUsPage/Index";
import AirTicket from "./pages/ServicesPage/subServices/AirTicket";
import TrainingAviationCourses from "./pages/ServicesPage/subServices/TrainingAviationCourses";
import HotelBooking from "./pages/ServicesPage/subServices/HotelBooking";
import AdmisionAndVisa from "./pages/ServicesPage/subServices/AdmisionAndVisa";
import Consultancy from "./pages/ServicesPage/subServices/Consultancy";
import ICTSkills from "./pages/ServicesPage/subServices/ICTSkills";
import CoursePage from "./pages/CoursesPage/CoursePage";
import FooterComponent from "./components/footer/FooterComponent";
import AdminDashboard from "./pages/dashboardPages/AdminDashboard";
import GalleryIndex from "./pages/mediaPage/Index";
import AdvancedLoader from "./components/AdvancedLoader"; // Import the new Advanced Loader
import LocalCertificates from "./pages/CoursesPage/LocalCertificates";
import LocalAdvancedCertificates from "./pages/CoursesPage/LocalAdvancedCertificates";
import InternationalCertificates from "./pages/CoursesPage/InternationalCertificates";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // You can adjust the loading duration here

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AdvancedLoader loading={loading} />; // Display the Advanced Loader when loading
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageIndex />} />
          <Route path="/about" element={<AboutUsIndex />} />
          {/* Static Services Routes */}
          <Route path="/services/air-ticket" element={<AirTicket />} />
          <Route
            path="/services/training-in-aviation-courses"
            element={<TrainingAviationCourses />}
          />
          <Route path="/services/hotel-booking" element={<HotelBooking />} />
          <Route
            path="/services/admission-and-visa-assistance"
            element={<AdmisionAndVisa />}
          />
          <Route path="/services/consultancy" element={<Consultancy />} />
          <Route path="/services/ict-skills" element={<ICTSkills />} />
          {/*About Courses */}
          <Route path="/courses" element={<CoursesIndex />} />
          <Route path="/courses/:moreInformation" element={<CoursePage />} />
          <Route
            path="/courses/local-certificates-courses"
            element={<LocalCertificates />}
          />
          <Route
            path="/courses/local-advanced-certificates-courses"
            element={<LocalAdvancedCertificates />}
          />
          <Route
            path="/courses/international-certificates-courses"
            element={<InternationalCertificates />}
          />
          {/*About ContactUs */}
          <Route path="/contact" element={<ContactIndex />} />
          <Route path="/gallery" element={<GalleryIndex />} />
          {/*Admin Dashboards*/}
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
