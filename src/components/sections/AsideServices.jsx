/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import IconExist from "../../assets/icons/IconExist";
import { style } from "../../style";
import AsideDownloads from "./AsideDownloads";
import AsideGetAnyQuestion from "./AsideGetAnyQuestion";
import AsideGetQuote from "./AsideGetQuote";

function AsideServices({ selectedServiceOption }) {
  return (
    <aside className="hidden lg:flex gap-24 cursor-pointer flex-col text-white">
      <section className="flex gap-2 flex-col">
        <Link to={"/services/air-ticket"}>
          <div
            className={`${style.asidePaddingEffect} ${
              selectedServiceOption === "AirTicket"
                ? "border-l-4 border-orange"
                : ""
            }  group`}
          >
            <span>Air Ticketing</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
        </Link>
        <Link to={"/services/training-in-aviation-courses"}>
          <div
            className={`${style.asidePaddingEffect} ${
              selectedServiceOption === "trainingInAviationCourses"
                ? "border-l-4 border-orange"
                : ""
            }  group`}
          >
            <span>Training In Aviation Courses</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
        </Link>
        <Link to={"/services/hotel-booking"}>
          <div
            className={`${style.asidePaddingEffect} ${
              selectedServiceOption === "HotelBooking"
                ? "border-l-4 border-orange"
                : ""
            }  group`}
          >
            <span>Hotel Booking</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
        </Link>

        <Link to={"/services/admission-and-visa-assistance"}>
          <div
            className={`${style.asidePaddingEffect} ${
              selectedServiceOption === "AdmissionAndVisa"
                ? "border-l-4 border-orange"
                : ""
            }  group`}
          >
            <span>Admission And Visa Assistance</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
        </Link>

        <Link to={"/services/consultancy"}>
          <div
            className={`${style.asidePaddingEffect} ${
              selectedServiceOption === "Consultancy"
                ? "border-l-4 border-orange"
                : ""
            }  group`}
          >
            <span>Consultance</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
        </Link>
        <Link to={"/services/ict-skills"}>
          <div
            className={`${style.asidePaddingEffect} ${
              selectedServiceOption === "ICTSkills"
                ? "border-l-4 border-orange"
                : ""
            }  group`}
          >
            <span>ICT Skills</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
        </Link>
      </section>
      <section>
        <AsideDownloads />
      </section>
      <section>
        <AsideGetQuote />
      </section>
      <section>
        <AsideGetAnyQuestion />
      </section>
    </aside>
  );
}

export default AsideServices;
