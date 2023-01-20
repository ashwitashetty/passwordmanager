import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../styles/Homepage.css";
import { NavLink, Outlet } from "react-router-dom";
import FilledButton from "../components/FilledButton";
import PrimaryButton from "../components/PrimaryButton";

const Homepage = () => {
  return (
    <div className="container">
      <div className="rectangle">
        <div className="rectangle-header">
          <img
            id="big-logo"
            src={require("../assets/images/logo.png")}
            alt="logo"
          />
          <img
            id="small-logo"
            src={require("../assets/images/mbl-logo.png")}
            alt="logo"
          />

          <p className="logo-text">
            Protect & Manage every password in your business
          </p>
        </div>

          {/* <span className="top-sign-in">SIGN IN</span>
          <span className="top-sign-in">SIGN UP</span> */}
          <nav className="topbar">
            <NavLink className="top-sign-in" to="/">Sign In</NavLink>
            <NavLink className="top-sign-in" to="Signup">Sign UP</NavLink>
          </nav>


        <Outlet/>
        {/* <SignUp/> */}
      </div>
    </div>
  );
};
export default Homepage;
