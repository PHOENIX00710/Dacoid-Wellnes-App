import React, { useState } from "react";
import back from "../assets/back.svg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import backArrow from "../assets/back2.svg";
import frontArrow from "../assets/front.svg";
import plus from "../assets/plus.svg";

const slots = [
  {
    time: "06:00 AM",
  },
  {
    time: "07:00 AM",
  },
  {
    time: "08:00 AM",
  },
  {
    time: "09:00 AM",
  },
  {
    time: "10:00 AM",
  },
  {
    time: "11:00 AM",
  },
  {
    time: "12:00 AM",
  },
  {
    time: "01:00 AM",
  },
  {
    time: "02:00 AM",
  },
  {
    time: "03:00 AM",
  },
  {
    time: "04:00 AM",
  },
  {
    time: "05:00 AM",
  },
];

function Schedule() {
  const [dates, setDates] = useState([
    {
      date: "5",
      day: "Sun",
      active: false,
    },
    {
      date: "6",
      day: "Mon",
      active: true,
    },
    {
      date: "7",
      day: "Tue",
      active: false,
    },
    {
      date: "8",
      day: "Wed",
      active: false,
    },
    {
      date: "9",
      day: "Thu",
      active: false,
    },
  ]);

  const handleDateChange = (e) => {
    const index = e.target.getAttribute("data-index");
    console.log(index);
    const updatedDates = dates.map((date, ind) => {
      if (ind.toString() === index) {
        return { ...date, active: true };
      } else {
        return { ...date, active: false };
      }
    });
    setDates(updatedDates);
  };

  const navigate = useNavigate();
  return (
    <div className="h-daicon-height w-daicon-width font-montserrat min-h-screen relative ">
      <NavBar />
      <div className=" w-full text-center absolute top-16 flex flex-col gap-4 px-4">
        <section className="flex items-center justify-around">
          <img
            src={back}
            alt="back-btn"
            className="cursor-pointer"
            onClick={() => navigate("/tracker")}
          />
          <h1 className="leading-introHeading font-semibold m-auto text-xl">
            Workout Schedule
          </h1>{" "}
        </section>
        <section className="w-full flex gap-3 justify-center items-center">
          <img src={backArrow} alt="back-arrow" />
          <p className="text-xs leading-signup font-semibold">Feb 2024</p>
          <img src={frontArrow} alt="front-arrow" />
        </section>
        <section className="flex items-center justify-around">
          {dates.map((date, index) => {
            return (
              <div
                className={`${
                  date.active ? "bg-gradient-search" : "bg-white"
                } pt-2 pb-5 px-4 rounded-alert ${
                  date.active ? "text-white" : "text-black"
                } flex flex-col justify-start items-center font-medium cursor-pointer`}
                onClick={(e) => handleDateChange(e)}
                data-index={index}
                key={index}
              >
                <p className="text-xs" data-index={index}>
                  {date.day}
                </p>
                <p className=" text-2xl" data-index={index}>
                  {date.date}
                </p>
              </div>
            );
          })}
        </section>
        <section className="flex flex-col">
          {slots.map((slot, index) => {
            if (index == 1) {
              return (
                <div
                  className="text-xs font-semibold py-3 px-4 leading-signup w-full border-b border-input-text border-spacing-2 flex justify-between"
                  key={index}
                >
                  <p>{slot.time}</p>
                  <div className="z-10 absolute left-36 h-8 w-48 flex justify-center items-center ">
                    <span className="rounded-workouts relative -bottom-2 h-max  bg-gradient-plus py-2 px-3 text-white">
                      Ab Workout, 7:30am
                    </span>
                  </div>
                </div>
              );
            }
            if (index == 3) {
              return (
                <div
                  className="text-xs font-semibold py-3 px-4 leading-signup w-full border-b border-input-text border-spacing-2 flex justify-between"
                  key={index}
                >
                  <p>{slot.time}</p>
                  <div className="z-10 absolute left-24 h-8 w-48 flex justify-center items-center ">
                    <span className="rounded-workouts relative bottom-1 h-max  bg-gradient-plus py-2 px-3 text-white">
                      Upperbody Workout, 9am
                    </span>
                  </div>
                </div>
              );
            }
            if (index == 8) {
                return (
                  <div
                    className="text-xs font-semibold py-3 px-4 leading-signup w-full border-b border-input-text border-spacing-2 flex justify-between"
                    key={index}
                  >
                    <p>{slot.time}</p>
                    <div className="z-10 absolute left-24 h-8 w-48 flex justify-center items-center ">
                      <span className="rounded-workouts relative bottom-2 h-max  bg-input-gray py-2 px-3 text-black">
                      Lowerbody Workout, 3pm
                      </span>
                    </div>
                  </div>
                );
              }
            return (
              <div
                className="text-xs font-semibold py-3 px-4 leading-signup w-full border-b border-input-text border-spacing-2 flex"
                key={index}
              >
                <p>{slot.time}</p>
              </div>
            );
          })}
        </section>
      </div>
      <div className="fixed z-10 bottom-28 w-daicon-width flex items-center justify-center gap-10 py-1 px-4 h-20">
        <div className="rounded-full relative left-28 bg-gradient-plus text-white flex justify-center items-center w-16 h-16 cursor-pointer ">
          <img src={plus} alt="plus-svg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Schedule;
