/* eslint-disable react/prop-types */
import HeadingTwo from "../Headings/HeadingTwo";
import Pragraph from "../Pragraph";

function TestmonialCard({ content, image, altImage, location, name }) {
  return (
    <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] mx-auto mb-8">
      <div className="shadow-md rounded-3xl bg-white p-8 min-h-[380px] flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex-grow">
          <div className="text-center mb-6">
            <Pragraph
              pragraphContent={content}
              classNameText="font-light italic text-gray-700 text-lg leading-relaxed"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={altImage}
            className="h-16 w-16 rounded-full border-4 border-gray-100 shadow-md object-cover"
          />
          <div className="flex flex-col text-left">
            <HeadingTwo
              headingTitle={name}
              className="text-lg font-bold text-gray-800"
            />
            <p className="text-gray-600 text-sm">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestmonialCard;
