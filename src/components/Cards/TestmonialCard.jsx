/* eslint-disable react/prop-types */
import HeadingTwo from "../Headings/HeadingTwo";
import Pragraph from "../Pragraph";

function TestmonialCard({ content, image, altImage, location, name }) {
  return (
    <div className="mb-8">
      <div className="shadow-inner rounded-l-2xl p-4">
        <Pragraph pragraphContent={content} classNameText={"p-8 font-normal italic"} />
        <div className="flex gap-4 px-8 pb-4">
          <img src={image} alt={altImage} className="h-20 w-20 rounded-full" />
          <div className="grid grid-cols-1 gap-1">
            <HeadingTwo headingTitle={name} />
            <HeadingTwo headingTitle={location} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestmonialCard;
