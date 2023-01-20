import React from "react";
import FilledButton from "../components/FilledButton";
import PrimaryButton from "../components/PrimaryButton";
import "../styles/Homepage.css";

const SignUp = () => {
  return (
    <div className="rectangle-body">
      <div className="sign-up-container upper-body">
        <span className="sign-up">SIGN UP</span>
        <PrimaryButton placeholder="Enter Mobile Number" />
        <PrimaryButton placeholder="Enter 4 Digit MPin" />
        <PrimaryButton placeholder="Re-Enter 4 Digit MPin" />
      </div>
      <div id="sign-up-button">
        <FilledButton buttonText="SIGN UP" />
      </div>
    </div>
  );
};

export default SignUp;
