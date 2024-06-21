import { Link } from "react-router-dom";
import HeadingThree from "../Headings/HeadingThree";
import Pragraph from "../Pragraph";
import Button1 from "../Buttons/Button1";

/* eslint-disable react/prop-types */
function CoursesCard({ image, money, imageAlt, title, content, myId }) {
  return (
    <div className="card_container grid md:grid-cols-12 grid-cols-1 md:h-64 gap-2 shadow-md rounded-r-lg hover:scale-105 hover:shadow-lg hover:transition duration-75 m-1">
      <div className="image_container md:col-span-5 h-full">
        <img
          src={image}
          alt={imageAlt}
          className="h-full md:rounded-l-lg"
        />
      </div>
      <div className="content_container md:col-span-7 flex flex-col gap-2 px-4 justify-between py-4 ">
        <HeadingThree headingTitle={title} />
        <Pragraph pragraphContent={content} classNameText={"font-normal"} />
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
