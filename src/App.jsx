import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageIndex from "./pages/HomePage/Index";
import Footer from "./components/footer/Footer";
import ServicesIndex from "./pages/ServicesPage/Index";
import AboutUsIndex from "./pages/AboutUsPage/Index";
import CoursesIndex from "./pages/CoursesPage/Index";
import ContactIndex from "./pages/contactUsPage/Index";
import GalleryIndex from "./pages/GalleryPage/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageIndex />} />
          <Route path="/about" element={<AboutUsIndex />} />
          <Route path="/services" element={<ServicesIndex/>} />
          <Route path="/courses" element={<CoursesIndex />} />
          <Route path="/contact" element={<ContactIndex />} />
          <Route path="/gallery" element={<GalleryIndex/>} />
        </Routes>
         <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
