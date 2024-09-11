import { useState } from "react";
import IconDownArrow from "../../assets/icons/IconDownArrow";
import Pragraph from "../Pragraph";
import HeadingTwo from "../Headings/HeadingTwo";

/* eslint-disable react-refresh/only-export-components */
function FAQ() {
  const [openFAQ1, setOpenFAQ1] = useState(false);
  const [openFAQ2, setOpenFAQ2] = useState(false);
  const [openFAQ3, setOpenFAQ3] = useState(false);
  const [openFAQ4, setOpenFAQ4] = useState(false);
  const [openFAQ5, setOpenFAQ5] = useState(false);

  return (
    <div>
      <HeadingTwo headingTitle={"Read Useful FAQs"} />
      <div className="flex gap-4 flex-col cursor-pointer">
        <div>
          <div
            onClick={() => {
              setOpenFAQ1(!openFAQ1);
              setOpenFAQ2(false);
              setOpenFAQ3(false);
              setOpenFAQ4(false);
              setOpenFAQ5(false);
            }}
            className={`flex items-center justify-between border border-gray p-2 rounded-sm ${
              openFAQ1 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"What does Timtom Aviation specialize in?"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ1 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ1 && (
            <div
              className={
                "border border-l-2 border-t-0 border-gray p-2 rounded-sm"
              }
            >
              <Pragraph
                pragraphContent={
                  "Timtom Aviation specializes in training and consultancy services in Civil Aviation Management, Airline and Airport Management, and Travel & Tourism Management. We offer internationally recognized certificates and diplomas in partnership with IATA, ICAO, and SACCA Institute of Freight and Tourism."
                }
              />
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setOpenFAQ2(!openFAQ2);
              setOpenFAQ1(false);
              setOpenFAQ3(false);
              setOpenFAQ4(false);
              setOpenFAQ5(false);
            }}
            className={`flex items-center justify-between border border-gray p-2 rounded-sm ${
              openFAQ2 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"What courses do you offer?"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ2 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ2 && (
            <div
              className={
                "border border-l-2 border-t-0 border-gray p-2 rounded-sm"
              }
            >
              <Pragraph
                pragraphContent={
                  "We offer a range of aviation courses, including Civil Aviation Management, Airline and Airport Operations, Air Cargo Management, Aviation Safety, and Air Cabin Crew courses. Additionally, we provide advanced certificates in specialized areas like Aviation Security and Air Transport Essentials."
                }
              />
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setOpenFAQ3(!openFAQ3);
              setOpenFAQ2(false);
              setOpenFAQ1(false);
              setOpenFAQ4(false);
              setOpenFAQ5(false);
            }}
            className={`flex items-center justify-between border border-gray p-2 rounded-sm ${
              openFAQ3 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"What are the course durations and fees?"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ3 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ3 && (
            <div
              className={
                "border border-l-2 border-t-0 border-gray p-2 rounded-sm"
              }
            >
              <Pragraph
                pragraphContent={
                  "Our courses vary in duration from 1 to 6 months. Local certificate courses start from 200,000 RWF for a 1-month course, while advanced certificates go up to 700,000 RWF. We also offer international IATA and ICAO certifications with fees ranging from 400,000 RWF to 975 USD."
                }
              />
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setOpenFAQ4(!openFAQ4);
              setOpenFAQ2(false);
              setOpenFAQ1(false);
              setOpenFAQ3(false);
              setOpenFAQ5(false);
            }}
            className={`flex items-center justify-between border border-gray p-2 rounded-sm ${
              openFAQ4 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"What additional services do you provide?"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ4 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ4 && (
            <div
              className={
                "border border-l-2 border-t-0 border-gray p-2 rounded-sm"
              }
            >
              <Pragraph
                pragraphContent={
                  "Apart from aviation courses, Timtom Aviation provides air ticketing, visa application assistance, project consultancy, and hospitality services, including hotel reservations and international tour packages."
                }
              />
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setOpenFAQ5(!openFAQ5);
              setOpenFAQ2(false);
              setOpenFAQ1(false);
              setOpenFAQ4(false);
              setOpenFAQ3(false);
            }}
            className={`flex items-center justify-between border border-gray p-2 rounded-sm ${
              openFAQ5 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"How can I apply?"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ5 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ5 && (
            <div
              className={
                "border border-l-2 border-t-0 border-gray p-2 rounded-sm"
              }
            >
              <Pragraph
                pragraphContent={
                  "To apply, visit our offices at Union Plaza 2nd floor, Remera – Giporoso, or contact us at timtomaviation@gmail.com. You can also apply through our online form: https://forms.gle/LkJz3w75ntLoeTyE6."
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
