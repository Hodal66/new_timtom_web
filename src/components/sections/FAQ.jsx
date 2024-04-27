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
      <HeadingTwo headingTitle={"Read Useful FAQ s"} />
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
            <HeadingTwo headingTitle={"What does your aviation company specialize in?"} classNameProps={"font-normal text-sm"}/>
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
                  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi\
               iure harum veritatis! Placeat fugiat officiis sunt consectetur\
               ipsam veniam soluta sapiente repellat itaque inventore, sequi,\
               dolor ab? Blanditiis, deleniti consequatur?"
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
              openFAQ1 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo headingTitle={"What does your aviation company specialize in?"} classNameProps={"font-normal text-sm"}/>
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
                  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi\
               iure harum veritatis! Placeat fugiat officiis sunt consectetur\
               ipsam veniam soluta sapiente repellat itaque inventore, sequi,\
               dolor ab? Blanditiis, deleniti consequatur?"
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
              openFAQ1 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo headingTitle={"What does your aviation company specialize in?"} classNameProps={"font-normal text-sm"}/>
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
                  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi\
               iure harum veritatis! Placeat fugiat officiis sunt consectetur\
               ipsam veniam soluta sapiente repellat itaque inventore, sequi,\
               dolor ab? Blanditiis, deleniti consequatur?"
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
              openFAQ1 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo headingTitle={"What does your aviation company specialize in?"} classNameProps={"font-normal text-sm"}/>
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
                  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi\
               iure harum veritatis! Placeat fugiat officiis sunt consectetur\
               ipsam veniam soluta sapiente repellat itaque inventore, sequi,\
               dolor ab? Blanditiis, deleniti consequatur?"
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
              openFAQ1 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo headingTitle={"What does your aviation company specialize in?"} classNameProps={"font-normal text-sm"}/>
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
                  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi\
               iure harum veritatis! Placeat fugiat officiis sunt consectetur\
               ipsam veniam soluta sapiente repellat itaque inventore, sequi,\
               dolor ab? Blanditiis, deleniti consequatur?"
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
