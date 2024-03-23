import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavigationBar from "./components/navBar/MainNavigationBar";
import TopNavigationBar from "./components/navBar/TopNavigationBar";
import AboutUs from "./pages/AboutUs";
import CoursesPage from "./pages/CoursesPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePageIndex from "./pages/HomePage/Index";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNavigationBar />
        <nav className="sticky">
          <MainNavigationBar />
        </nav>
        <Routes>
          <Route path="/" element={<HomePageIndex />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<AboutUs />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
