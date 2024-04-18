import React from "react";
import NavBar from "../components/NavBar";
import google from "../assets/google.svg";
import meta from "../assets/facebook.svg";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className=" font-montserrat flex flex-col justify-between h-screen items-center relative">
      <NavBar />
      <form action="" className="flex flex-col px-10 gap-6 absolute top-16">
        <h1 className="font-semibold text-xl mb-4 ">Create an Account</h1>
        <input
          type="text"
          placeholder="First Name"
          className=" bg-input-gray font-semibold text-input-text p-5 rounded-input w-input h-input text-xs "
          name="fname"
          id="fname"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className=" bg-input-gray font-semibold text-input-text p-5 rounded-input w-input h-input text-xs "
          name="lname"
          id="lname"
          required
        />
        <input
          type="text"
          placeholder="Email"
          className=" bg-input-gray font-semibold text-input-text p-5 rounded-input w-input h-input text-xs "
          name="email"
          id="email"
          required
        />
        <input
          type="text"
          placeholder="Password"
          className=" bg-input-gray font-semibold text-input-text p-5 rounded-input w-input h-input text-xs "
          name="password"
          id="password"
          required
        />
        <section className="flex gap-2 items-center">
          <input type="checkbox" name="tandc" className=" h-5 w-5 " required />
          <label
            htmlFor="tandc"
            className=" font-medium text-xs leading-signup text-input-text "
          >
            By proceeding, I agree to all{" "}
            <span className="text-xs leading-signup font-medium text-signup underline underline-offset-2 cursor-pointer">
              T&C{" "}
            </span>
            and{" "}
            <span className="text-xs leading-signup font-medium text-signup underline underline-offset-2 cursor-pointer">
              Privacy Policy{" "}
            </span>
          </label>
        </section>
      </form>
      <section className="absolute bottom-8 flex flex-col gap-5">
        <Link to={"/goals"} className="w-input h-input bg-gradient-btn text-white text-base font-semibold rounded-input flex justify-center items-center">
          Create an Account
        </Link>
        <section id="or" className="text-xs">
          Or
        </section>
        <section className="flex m-auto gap-6">
          <div className=" h-11 w-11  border border-text-input flex justify-center items-center rounded-input">
            <img
              src={google}
              alt="google-icon"
              className=" cursor-pointer h-4 w-4 "
            />
          </div>
          <div className=" h-11 w-11  border border-text-input flex justify-center items-center rounded-input">
            <img
              src={meta}
              alt="meta-icon"
              className=" cursor-pointer h-4 w-4 "
            />
          </div>
        </section>
        <section className="flex m-auto gap-1">
          <p className="text-xs leading-signup font-medium">
            Already have an account?
          </p>
          <Link
            to={"/signin"}
            className="text-xs leading-signup font-medium text-signup underline underline-offset-2 cursor-pointer"
          >
            Login
          </Link>
        </section>
      </section>
    </div>
  );
}

export default Signup;
