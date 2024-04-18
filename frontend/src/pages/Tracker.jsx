import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import back from "../assets/back.svg";
import graph from "../assets/stats.svg";
import alert from "../assets/alert.svg";
import fullBody from "../assets/full_body.svg";
import upperBody from "../assets/upper_body.svg";
import whatWorkout from "../assets/train2.svg";
import Switch from "react-switch";
import { Link, useNavigate } from "react-router-dom";

function Tracker() {
  const [workouts, setWorkouts] = useState([
    {
      svg: fullBody,
      title: "Full Body Workout",
      time: "Today 3pm",
      checked: false,
    },
    {
      svg: upperBody,
      title: "Upper Body Workout",
      time: "4 Feb, 3:30 pm",
      checked: false,
    },
  ]);

  const navigate=useNavigate()

  const handleChange = (e) => {
    let tempWorkouts = workouts;
    tempWorkouts[e.target.name].checked = !tempWorkouts[e.target.id].checked;
    setWorkouts(tempWorkouts);
  };
  return (
    <div className="font-montserrat min-h-screen relative">
      <NavBar />
      <Link to={"/goals"} className="absolute top-18 left-4 cursor-pointer" >
        <img src={back} alt="back-btn" />
      </Link>
      <div className="overflow-y-scroll w-full text-center absolute top-16 flex flex-col gap-16 px-4">
        <h1 className="leading-introHeading font-semibold m-auto text-xl">
          Workout Tracker
        </h1>
        <section className="flex flex-col gap-2">
          <div className="flex justify-around pl-12 items-center text-graph font-normal">
            <p> </p>
            <p>Good job</p>
            <p>less then 320cal</p>
          </div>
          <img src={graph} alt="graph-img" />
          <div className="mt-4 bg-gradient-alert flex items-center gap-2 px-4 py-2 rounded-alert">
            <img src={alert} alt="alert-img" />
            <p className="text-xs font-medium text-left max-w-64 leading-alert">
              You've burned fewer calories than yesterday. Time to get moving!{" "}
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <section className="flex items-center justify-between mb-3">
            <p className=" text-base font-semibold ">Upcoming Workout</p>
            <p className=" text-xs font-medium text-input-text ">See more</p>
          </section>
          {workouts.map((workout, index) => {
            return (
              <div className="flex items-center justify-between rounded-input shadow-lg p-3">
                <div className="flex gap-4 items-center">
                  <img src={workout.svg} alt="image of workout" />
                  <div className="flex flex-col justify-between gap-2 items-start">
                    <p className="text-xs font-semibold">{workout.title}</p>
                    <p className=" text-xxs font-medium text-input-text">
                      {workout.time}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={workout.checked}
                  name={index}
                  onChange={() => handleChange(e)}
                  onColor="#000000"
                  onHandleColor="#8099FF"
                  offColor="#8099FF"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  handleDiameter={15} // Reduce the handle diameter to 20 pixels
                  height={20}
                  width={40}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  className="react-switch"
                  id="material-switch"
                />
              </div>
            );
          })}
        </section>
        <section className="flex flex-col gap-2 -mt-10">
          <h1 className="font-semibold text-base justify-self-start self-start">What Do You Want to Train</h1>
          <div className="p-4 flex items-center justify-between bg-whatWorkout rounded-input">
            <section className="flex flex-col gap-2 items-start">
                <p className="text-xs font-medium">Full Body Workout</p>
                <p className="text-xxs font-medium">Arms</p>
                <p className="text-xxs font-medium">Chest</p>
            </section>
            <img src={whatWorkout} alt="workout-svg" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Tracker;
