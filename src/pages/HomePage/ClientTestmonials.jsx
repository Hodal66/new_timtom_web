/* eslint-disable react/prop-types */
import Slider from "react-slick";
import TestmonialCard from "../../components/Cards/TestmonialCard";
import { TestmonialsData } from "../../database/static/Testmonials";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

// Custom Previous Arrow
const PrevArrow = ({ onClick, currentSlide }) => (
  <button
    onClick={onClick}
    className={`absolute left-0 z-10 p-3 bg-gray-800 text-primary rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-opacity duration-300 ${
      currentSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}
    style={{ top: "50%" }} // Positions the arrow vertically centered
  >
    <FaArrowLeft className="text-2xl" />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick, currentSlide, slideCount }) => (
  <button
    onClick={onClick}
    className={`absolute right-0 z-10 p-3 bg-gray-800 text-primary rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-opacity duration-300 ${
      currentSlide >= slideCount - 2 ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}
    style={{ top: "50%" }} // Positions the arrow vertically centered
  >
    <FaArrowRight className="text-2xl" />
  </button>
);

function ClientTestmonials() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container py-16 bg-gradient-to-r from-gray-100 to-white relative">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
        What Our Clients Say
      </h2>
      <div className="md:px-4 lg:px-8">
        <Slider {...settings}>
          {TestmonialsData.map((testmonial) => (
            <div key={testmonial.id} className="px-2"> {/* Added padding to the individual slides */}
              <TestmonialCard
                content={testmonial.content}
                image={testmonial.image}
                altImage={testmonial.altImage}
                location={testmonial.location}
                name={testmonial.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ClientTestmonials;
