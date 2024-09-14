import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const slides = [
  {
    id: 1,
    image: "/images/HeroAreaImages/Desktop/TicketBooking.jpg",
    title: "✈️ Cheapest Air Tickets",
    description: "Seamless booking experiences for your travel needs.",
    link: "/services/air-ticket",
    buttonText: "Check More info...",
  },
  {
    id: 2,
    image: "/images/HeroAreaImages/Desktop/Aviation5.jpg",
    title: "🎓 Training in Aviation Courses",
    description: "Empowering your aviation career through quality education.",
    link: "/services/training-in-aviation-courses",
    buttonText: "Enroll Today",
  },
  {
    id: 3,
    image: "/images/HeroAreaImages/Desktop/Hotel_2.webp",
    title: "🏨 Hotel Booking",
    description: "Comfortable stays for your journeys.",
    link: "/services/hotel-booking",
    buttonText: "Find Hotels",
  },
  {
    id: 4,
    image: "/images/HeroAreaImages/Desktop/Aviation1.jpg",
    title: "We Offer Internership In Air Afairs and Ticketing",
    description: "Get Internship, Improve your Skills In Air ticketing.",
    link: "/courses/30",
    buttonText: "Find Hotels",
  },
  {
    id: 5,
    image: "/images/HeroAreaImages/Desktop/Ict.jpg",
    title: "We Offer Internership In ICT and AI Tools",
    description:
      "Get Internship, Improve your Skills In Information Communication Technology(ICT) in All Levels",
    link: "/courses/31",
    buttonText: "Get Internership in ICT",
  },
  {
    id: 6,
    image: "/images/HeroAreaImages/Desktop/book1.jpg",
    title: "Do you want to buy our Book?",
    description: "Fandamental of Air craft Maintainance is Out Now!!",
    link: "https://www.amazon.com/Fundamentals-Aircraft-Maintenance-Management-Timothee/dp/1945825995",
    buttonText: "Buy Book Now",
  },
  // Add more slides as needed
];

const HeroArea = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Scroll to top with smooth transition
  const scrollToTop = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };
  // Handle link clicks to show loading spinner
  const handleLinkClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Stop loading after navigation
      if (
        path ===
        "https://www.amazon.com/Fundamentals-Aircraft-Maintenance-Management-Timothee/dp/1945825995"
      ) {
        window.open(
          "https://www.amazon.com/Fundamentals-Aircraft-Maintenance-Management-Timothee/dp/1945825995",
          "_blank"
        );
      } else {
        navigate(path);
      }
      scrollToTop(); // Scroll to top after navigating
    }, 500); // Simulate a delay for smooth transition (adjust timing as needed)
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ClipLoader color={"#ffffff"} loading={loading} size={50} />
        </div>
      )}
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={slide.image}
              className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="bg-black bg-opacity-40 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg max-w-md sm:max-w-lg text-center text-white space-y-3 md:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl">
                  {slide.description}
                </p>
                <button
                  onClick={() => handleLinkClick(slide.link)}
                  className="mt-4 bg-primary hover:bg-secondary text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg"
                >
                  {slide.buttonText}
                </button>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Styled Left and Right Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full transition-all duration-200 md:flex items-center justify-center hidden"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full transition-all duration-200 md:flex items-center justify-center hidden"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default HeroArea;
