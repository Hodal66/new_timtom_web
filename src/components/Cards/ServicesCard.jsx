import { Link } from "react-router-dom";
import HeadingThree from "../Headings/HeadingThree";
import Pragraph from "../Pragraph";
import Button1 from "../Buttons/Button1";

/* eslint-disable react/prop-types */
function ServicesCard({ image, imageAlt, title, content, link }) {
  return (
    <div className="card_container grid grid-cols-1 md:h-auto shadow-md rounded-lg hover:scale-105 hover:shadow-lg hover:transition duration-75 mx-4">
      <div className="image_container h-64">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="content_container flex flex-col gap-2 px-4 py-4 justify-between">
        <HeadingThree headingTitle={title} />
        <Pragraph pragraphContent={content} classNameText={"font-normal"} />
        <div className="py-4 grid grid-cols-2 justify-between items-center">
          <Link to={`/services/${link}`} className="">
            <Button1 title={"ReadMore..."} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
