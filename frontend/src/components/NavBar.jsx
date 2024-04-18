import React from "react";
import battery from "../assets/battery.svg";

function NavBar() {
  return (
    <section className="flex items-center justify-between w-full absolute top-0 p-3">
      <p className=" font-semibold leading-introTime text-sm">9:41</p>
      <img src={battery} alt="battery" />
    </section>
  );
}

export default NavBar;
