import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import CoursesPage from "./pages/CoursesPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePageIndex from "./pages/HomePage/Index";
import GalleryPage from "./pages/GalleryPage";
import Footer from "./components/footer/Footer";
import ServicesIndex from "./pages/ServicesPage/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageIndex />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesIndex/>} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
         <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
