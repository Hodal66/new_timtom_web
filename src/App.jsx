import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageIndex from "./pages/HomePage/Index";
import AboutUsIndex from "./pages/AboutUsPage/Index";
import CoursesIndex from "./pages/CoursesPage/Index";
import ContactIndex from "./pages/contactUsPage/Index";
import GalleryIndex from "./pages/GalleryPage/Index";
import AirTicket from "./pages/ServicesPage/subServices/AirTicket";
import TrainingAviationCourses from "./pages/ServicesPage/subServices/TrainingAviationCourses";
import HotelBooking from "./pages/ServicesPage/subServices/HotelBooking";
import AdmisionAndVisa from "./pages/ServicesPage/subServices/AdmisionAndVisa";
import Consultancy from "./pages/ServicesPage/subServices/Consultancy";
import ICTSkills from "./pages/ServicesPage/subServices/ICTSkills";
import CoursePage from "./pages/CoursesPage/CoursePage";
import FooterComponent from "./components/footer/FooterComponent";
import AdminDashboard from "./pages/dashboardPages/AdminDashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageIndex />} />
          <Route path="/about" element={<AboutUsIndex />} />
          {/* Static Services Routes />} */}
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
          <Route path="/services/counsultancy" element={<Consultancy />} />
          <Route path="/services/ict-skills" element={<ICTSkills />} />
          {/*About Courses */}
          <Route path="/courses" element={<CoursesIndex />} />
          <Route path="/courses/:moreInformation" element={<CoursePage />} />
          <Route path="/contact" element={<ContactIndex />} />
          <Route path="/gallery" element={<GalleryIndex />} />
          {/*Admin Dashboards*/}
          <Route path="/admin/*" element={<AdminDashboard/>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
