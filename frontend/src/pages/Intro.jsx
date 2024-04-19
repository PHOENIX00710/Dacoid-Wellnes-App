import React, { useState } from "react";
import intro1 from "../assets/running.svg";
import intro2 from "../assets/cycling.svg";
import next1 from "../assets/next1.svg";
import next2 from "../assets/next2.svg";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const contents = [
  {
    svg: intro1,
    title: "Track Your Goal",
    content:
      "Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
    next: next1,
  },
  {
    svg: intro2,
    title: "Get Burn",
    content:
      "Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever",
    next: next2,
  },
];

function Intro() {
  const [currContent, setCurrContent] = useState(0);
  const navigate=useNavigate()

  const handleNext=()=>{
    if(currContent == 0)
        setCurrContent(1)
    else if(currContent == 1)
        navigate("/signup")
  }

    return (
      <div className="h-daicon-height w-daicon-width relative flex justify-center items-center font-montserrat">
        <NavBar/>
        <Link to={"/signup"} className="absolute cursor-pointer right-3 top-12 font-medium underline underline-offset-4 leading-intro text-base text-introPurple">Skip</Link>
        <section className="flex flex-col gap-9 px-8">
          <img
            src={contents[currContent].svg}
            alt="People running"
            className=" justify-self-center self-start w-intro-img h-intro-img"
          />
          <section className="flex flex-col gap-3">
            <h1 className=" text-xl leading-introHeading font-semibold">
              {contents[currContent].title}
            </h1>
            <p className=" text-base leading-intro font-medium text-introContent">
              {contents[currContent].content}
            </p>
          </section>
        </section>
        <img src={contents[currContent].next} alt="next-btn" className="absolute bottom-8 right-4 cursor-pointer" onClick={handleNext} />
      </div>
    );
}

export default Intro;
