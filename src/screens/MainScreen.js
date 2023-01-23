import React from "react";
import Card from "../components/Card";
import InitialAdd from "../components/InitialAdd";
import "../styles/MainScreen.css";

const MainScreen = () => {
  return (
    <div className="main-container">
      <div className="Side-menu">
        <img
          id="burger-menu"
          src={require("../assets/images/burger_Menu.png")}
          alt="menu"
        />
        <div className="sub-side-menu">
          <img
            id="home-icn"
            src={require("../assets/images/home_icn.png")}
            alt=""
          />
          <div className="circle"></div>
        </div>
      </div>
      <div className="sub-container">
        <div className="Header">
          <img
            id="blue-logo"
            src={require("../assets/images/blue-logo.png")}
            alt="logo"
          />
          <div className="sub-header">
            <img
              id="sync"
              src={require("../assets/images/sync.png")}
              alt="sync"
            />
            <img
              id="profile"
              src={require("../assets/images/profile.png")}
              alt="profile"
            />
          </div>
        </div>
        <div className="info-bar">
          <p className="sites">Sites</p>
          <div className="search-bar">
            <input className="input" type="text" placeholder="Search" />
            <img
              class="search-icon"
              src={require("../assets/images/search.png")}
              alt="search-icon"
            />
            <img
              className="add-btn"
              src={require("../assets/images/add_btn.png")}
              alt=""
            />
          </div>
        </div>
        <div className="main-body">
          {/* <div className="initial-add">
            <InitialAdd />
          </div> */}
          <div className="Social-Media">
            <p id="media-text">Social Media </p>
            <p id="media-number">07</p>
            <img
              id="media-drop"
              src={require("../assets/images/drop-down.png")}
              alt="drop-down"
            />
          </div>
          <div className="content-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
