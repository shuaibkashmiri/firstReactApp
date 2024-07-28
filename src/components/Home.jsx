import React from "react";
import "../styles/Main.scss";
import profile from "../images/home_profile.png";


const Home = () => {
  return (
    <div className="main">
      <img src={profile} alt="profile-pic" className="profile" />
      <div>
        {" "}
        <h1>Shoaib Mushtaq Bhat</h1>
        <p>Web Developer</p>
      </div>
    </div>
  );
};

export default Home;
