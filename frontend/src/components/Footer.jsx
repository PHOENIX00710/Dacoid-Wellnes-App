import React from "react";
import home from "../assets/home.svg";
import messages from "../assets/messaging.svg";
import camera from "../assets/camera.svg";
import contacts from "../assets/people.svg";
import search from "../assets/search.svg";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full flex items-center justify-center gap-10 py-1 px-4 h-20">
      <img src={home} alt="home-btn" className="cursor-pointer" />
      <img src={messages} alt="messages-btn" className="cursor-pointer" />
      <div className=" w-16 h-16 -ml-4 -mr-4 bg-gradient-search relative bottom-9 rounded-full flex justify-center items-center cursor-pointer">
        <img src={search} alt="search-btn" />
      </div>
      <img src={camera} alt="camera-btn" className="cursor-pointer" />
      <img src={contacts} alt="contacts-btn" className="cursor-pointer" />
    </div>
  );
}

export default Footer;
