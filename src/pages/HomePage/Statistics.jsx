/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import HeadingOne from "../../components/Headings/HeadingOne";
import Pragraph from "../../components/Pragraph";
import { useEffect } from "react";
import { useRef } from "react";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(Tooltip, ArcElement, Legend);

function Statistics() {
  const [tickets, setTickets] = useState(0);
  const [students, setStudents] = useState(0);
  const [internees, setInternees] = useState(0);

  const numberOfAreaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //start counting from 10 up to 100 when numbers are available
            const interval = setInterval(() => {
              setStudents((prevNumber) => {
                const nextNumber = prevNumber + 15;
                return nextNumber > 415 ? prevNumber : nextNumber;
              });
              setTickets((prevNumber) => {
                const nextNumber = prevNumber + 1200;
                return nextNumber > 23600 ? prevNumber : nextNumber;
              });
              setInternees((prevNumber) => {
                const nextNumber = prevNumber + 6;
                return nextNumber > 126 ? prevNumber : nextNumber;
              });
            }, 100); // this the number of second to move from one number to another

            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (numberOfAreaRef.current) {
      observer.observe(numberOfAreaRef.current);
    }
    return () => {
      if (numberOfAreaRef.current) {
        observer.unobserve(numberOfAreaRef.current);
      }
    };
  }, []);

  const data = {
    label: ["Students", "Tickets", "Internees"],
    datasets: [
      {
        data: [44, 20, 36],
        backgroundColor: ["#17A6E5", "#E49F9F", "#d3dce6"],
      },
    ],
  };

  const options = {};

  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
      <div className="left_side">
        <img src="/images/HomeImage44.png" alt="" />
      </div>
      <div className="right_side grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="Rectangles grid grid-cols-1 gap-4">
          <div className="card bg-white flex flex-col gap-4 p-4 rounded-md justify-center items-center hover:shadow-md hover:scale-105">
            <div className="heading" ref={numberOfAreaRef}>
              <HeadingOne headingTitle={tickets} />
            </div>
            <div className="pragraph">
              <Pragraph pragraphContent={"Ticket Issued"} />
            </div>
          </div>
          <div className="card bg-white flex flex-col gap-4 p-4 rounded-md justify-center items-center hover:shadow-md hover:scale-105">
            <div className="heading" ref={numberOfAreaRef}>
              <HeadingOne headingTitle={students} />
            </div>
            <div className="pragraph">
              <Pragraph pragraphContent={"Students"} />
            </div>
          </div>
          <div className="card bg-white flex flex-col gap-4 p-4 rounded-md justify-center items-center hover:shadow-md hover:scale-105">
            <div className="heading" ref={numberOfAreaRef}>
              <HeadingOne headingTitle={internees} />
            </div>
            <div className="pragraph">
              <Pragraph pragraphContent={"Internees"} />
            </div>
          </div>
        </div>
        <div className="circles">
          <div className="card">
            <div>
              <Pragraph pragraphContent={"Statistics of Company Overview"}/>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="h-64 w-64">
                <Pie data={data} options={options}></Pie>
              </div>
              <div className="flex flex-col gap-4">
                <div className="border-l-[64px] px-4 border-primary ">
                  <span>Number of Issued Tickets</span>
                </div>
                <div className="border-l-[64px] px-4 border-white ">
                  <span>Number of Internees</span>
                </div>
                <div className="border-l-[64px] px-4 border-pink2 ">
                  <span>Number of Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
