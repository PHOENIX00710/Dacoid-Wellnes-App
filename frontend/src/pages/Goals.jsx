import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const goals = [
  {
    title: "Weight Loss",
  },
  {
    title: "Muscle Gain",
  },
  {
    title: "Flexibility and Mobility",
  },
  {
    title: "General Fitness",
  },
  {
    title: "Event - specific training",
  },
  {
    title: "Mindfulness and Mental Health",
  },
];

function Goals() {
  const navigate = useNavigate();
  return (
    <div className="h-daicon-height w-daicon-width font-montserrat relative">
      <NavBar />
      <section className="absolute w-full top-16 flex flex-col text-center gap-4">
        <h1 className="leading-introHeading font-semibold my-6 text-xl">
          What are your goals?
        </h1>
        {goals.map((goal, index) => {
          return (
            <div className="bg-input-gray flex justify-between items-center p-3 rounded-input w-input h-input m-auto">
              <p className=" leading-signup text-xs font-semibold">
                {goal.title}
              </p>
              <input
                type="checkbox"
                id={index}
                className=" h-5 w-5 border text-goals rounded-goals "
              />
            </div>
          );
        })}
      </section>
      <div className="w-full absolute flex bottom-20">
        <button className="m-auto w-input h-input bg-gradient-btn text-white text-base font-semibold rounded-input text-center cursor-pointer" onClick={()=>navigate("/tracker")}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Goals;
