import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'react-tabs/style/react-tabs.css';

const images = [
  '/images/Album/Design1.png',
  '/images/Album/Design2.png',
  '/images/Album/Design3.png',
  '/images/Album/Design4.png',
  '/images/Album/Design5.png',
  '/images/Album/Design6.png',
  '/images/Album/Design7.png',
  '/images/Album/1.png',
  '/images/Album/2.png',
  '/images/Album/student20.jpeg',
  '/images/Album/student21.jpeg',
  '/images/Album/student22.jpeg',
  '/images/Album/student23.jpeg',

];

const videos = [
  "/videos/Students.mp4",
  "/videos/TimtomAviation.mp4",
  "/videos/OnAirport.mp4",
];

const MediaPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const openOverlay = (index) => {
    setSelectedImage(index);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Media
        </h2>
        <Tabs
          selectedIndex={activeTab}
          onSelect={(index) => setActiveTab(index)}
        >
          <TabList className="flex justify-center mb-8">
            <Tab
              className={`px-4 py-2 cursor-pointer rounded-t-lg focus:outline-none ${
                activeTab === 0
                  ? "bg-blue text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Images
            </Tab>
            <Tab
              className={`px-4 py-2 cursor-pointer rounded-t-lg focus:outline-none ${
                activeTab === 1
                  ? "bg-blue text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Videos
            </Tab>
          </TabList>

          {/* Image Gallery */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="p-2 hover:border-2 hover:border-primary rounded-md"
                >
                  <img
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg shadow-lg cursor-pointer"
                    onClick={() => openOverlay(index)}
                  />
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Video Gallery */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
              {videos.map((src, index) => (
                <div key={index} className="p-2 hover:border-2 hover:border-primary rounded-md">
                  <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
                    <video
                      controls
                      muted
                      src={src}
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      style={{ objectFit: "cover" }} // Ensures video maintains aspect ratio
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>

        {/* Overlay for selected image */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeOverlay}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <button
              className="absolute left-4 text-white text-3xl"
              onClick={prevImage}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="absolute right-4 text-white text-3xl"
              onClick={nextImage}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <img
              src={images[selectedImage]}
              alt={`Image ${selectedImage + 1}`}
              className="w-11/12 md:w-3/4 lg:w-1/2 h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaPage;
