import React from "react";
import NavBar from "../components/NavBar";
import google from "../assets/google.svg";
import meta from "../assets/facebook.svg";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className=" font-montserrat flex flex-col justify-between h-daicon-height w-daicon-width items-center relative">
      <NavBar />
      <form action="" className="flex flex-col px-10 gap-6 absolute top-16">
        <h1 className="font-semibold text-xl mb-4 ">Welcome Back</h1>
        <input
          type="text"
          placeholder="Email"
          className=" bg-input-gray text-input-text font-semibold p-5 rounded-input w-input h-input text-xs "
          name="email"
          id="email"
          required
        />
        <input
          type="text"
          placeholder="Password"
          className=" bg-input-gray text-input-text font-semibold p-5 rounded-input w-input h-input text-xs "
          name="password"
          id="password"
          required
        />
        <p className=" -mt-4 ml-2 font-medium text-xs leading-signup text-input-text underline underline-offset-1 cursor-pointer ">
          Forgot your password?
        </p>
      </form>
      <section className="absolute bottom-8 flex flex-col gap-5">
        <button className="w-input h-input bg-gradient-btn text-white text-base font-semibold rounded-input text-center">
          Sign In
        </button>
        <section id="or" className="text-xs">
          Or
        </section>
        <section className="flex m-auto gap-6">
          <div className=" h-11 w-11  border border-text-input flex justify-center items-center rounded-input">
            <img
              src={google}
              alt="google-icon"
              className=" cursor-pointer h-4 w-4"
            />
          </div>
          <div className=" h-11 w-11  border border-text-input flex justify-center items-center rounded-input">
            <img
              src={meta}
              alt="meta-icon"
              className=" cursor-pointer h-4 w-4"
            />
          </div>
        </section>
        <section className="flex m-auto gap-1">
          <p className="text-xs leading-signup font-medium">
            Don’t have an account yet?{" "}
          </p>
          <Link
            to={"/signup"}
            className="text-xs leading-signup font-medium text-signup underline underline-offset-2 cursor-pointer"
          >
            Create an account
          </Link>
        </section>
      </section>
    </div>
  );
}

export default Signin;
