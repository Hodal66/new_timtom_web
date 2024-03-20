import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";

function CoursesSection() {
  return (
    <div>
      <div>
        <HeadingThree title={"The Timtom Aviation Courses"} />
        <HeadingOne title={"We Have special Courses for you!!"} />
      </div>
      <div>
        <Pragraph
          title={
            "TIMTOM AVIATION  is a private company which offers consultancy services in the field of management and also offers training in the field of aviation management, hospitality, tourism and ICT, after training we awards international professional certificate and diplomas like ICAO and IATA."
          }
        />
      </div>
      <div className="buttonContainer">
        <ul className="flex gap-4">
          <li>All</li>
          <li>Tourism</li>
          <li>Aviation</li>
          <li>Airport</li>
          <li>ICT</li>
        </ul>
        <div className="flex h-48">
          <img src="/images/HomeImage4.png" alt="Images1" />
          <img src="/images/HomeImage4.png" alt="Images1" />
          <img src="/images/HomeImage4.png" alt="Images1" />
          <img src="/images/HomeImage4.png" alt="Images1" />
          <img src="/images/HomeImage4.png" alt="Images1" />
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
