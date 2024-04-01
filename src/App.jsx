import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavigationBar from "./components/navBar/MainNavigationBar";
import TopNavigationBar from "./components/navBar/TopNavigationBar";
import AboutUs from "./pages/AboutUs";
import CoursesPage from "./pages/CoursesPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePageIndex from "./pages/HomePage/Index";
import GalleryPage from "./pages/GalleryPage";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNavigationBar />
        <MainNavigationBar />
        <Routes>
          <Route path="/" element={<HomePageIndex />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
