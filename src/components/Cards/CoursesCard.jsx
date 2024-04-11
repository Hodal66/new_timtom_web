import { Link } from "react-router-dom";
import HeadingThree from "../Headings/HeadingThree";
import Pragraph from "../Pragraph";
import Button1 from "../Buttons/Button1";

/* eslint-disable react/prop-types */
function CoursesCard({ image, imageAlt, title, content, link }) {
  return (
    <div className="card_container grid md:grid-cols-12 grid-cols-1 md:h-64 gap-4 shadow-md rounded-r-lg hover:scale-105 hover:shadow-lg hover:transition duration-75 m-2">
      <div className="image_container md:col-span-5 h-full">
        <img
          src={image}
          alt={imageAlt}
          className="min-h-full md:rounded-l-lg"
        />
      </div>
      <div className="content_container md:col-span-7 flex flex-col gap-2 px-4 ">
        <HeadingThree headingTitle={title} />
        <Pragraph pragraphContent={content} classNameText={"font-normal"} />
        <div className="py-4">
          <Link ko={link}>
            <Button1 title={"ReadMore..."} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
