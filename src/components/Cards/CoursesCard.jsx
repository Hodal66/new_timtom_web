import { Link } from "react-router-dom";
import HeadingThree from "../Headings/HeadingThree";
import Pragraph from "../Pragraph";
import Button1 from "../Buttons/Button1";

/* eslint-disable react/prop-types */
function CoursesCard({ image, money, imageAlt, title, content, myId }) {
  const getShortDescription = (description) => {
    if (!description) {
      return ""; // Ensure the content is defined
    }
    return description.split(" ").slice(0, 30).join(" ") + "...";
  };

  return (
    <div className="card_container grid grid-cols-1 md:h-auto shadow-md rounded-lg hover:scale-105 hover:shadow-lg hover:transition duration-75 m-4">
      <div className="image_container h-64">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="content_container flex flex-col gap-2 px-4 py-4 justify-between min-h-[300px]">
        <HeadingThree headingTitle={title} />

        {/* Updated the getShortDescription to handle undefined content */}
        <Pragraph pragraphContent={getShortDescription(content)} classNameText={"font-normal"} />
        
        <div className="py-4 grid grid-cols-2 justify-between items-center">
          <p className="font-medium text-xl">{money} Rwf</p>
          <Link to={`/courses/${myId}`} className="flex justify-end">
            <Button1 title={"ReadMore..."} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
