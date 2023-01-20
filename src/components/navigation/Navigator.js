import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../../screens/Homepage";
import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<SignIn />} />
          <Route path="Signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
