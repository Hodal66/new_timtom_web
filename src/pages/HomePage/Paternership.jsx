/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 p-3 bg-gray-800 text-primary rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
    style={{ top: "50%" }} // Positions the arrow vertically centered
  >
    <FaArrowLeft className="text-2xl" />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 p-3 bg-gray-800 text-primary rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
    style={{ top: "50%" }} // Positions the arrow vertically centered
  >
    <FaArrowRight className="text-2xl" />
  </button>
);

const images = [
  "/images/Partnership/1.png",
  "/images/Partnership/2.png",
  "/images/Partnership/3.png",
  "/images/Partnership/4.png",
  "/images/Partnership/5.png",
  "/images/Partnership/6.png",
  "/images/Partnership/7.png",
  "/images/Partnership/8.png",
  "/images/Partnership/9.png",
  "/images/Partnership/10.png",
  "/images/Partnership/11.png",
  "/images/Partnership/12.png",
  "/images/Partnership/13.png",
  "/images/Partnership/14.png",
  "/images/Partnership/15.png",
  "/images/Partnership/16.png",
];

function Paternership() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6, // Show 4 images at once
    slidesToScroll: 1, // Slide 1 image at a time
    autoplay: true,
    autoplaySpeed: 2000, // Slide every 2 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
        Our Partnerships
      </h2>
      <div className="md:px-4 lg:px-8">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2"> {/* Individual slide styling */}
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-[350px] h-[150px]  rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Paternership;
