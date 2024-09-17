import React from "react";
import "../../styles/Main.scss";


const Home = (props) => {
  return (
    <div className="main">
      <img src={props.profile} alt="" className="profile" />
      <div>
        {" "}
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default Home;
