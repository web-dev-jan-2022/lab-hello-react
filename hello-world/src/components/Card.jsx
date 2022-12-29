import React from "react";
import ih from "../images/ih.png";
import menu from "../images/menu.png";

const Card = () => {
  return (
    <section className="bigCard">
      <img className="theLogo" src={ih} alt="logo"></img>
      <img className="menu" src={menu} alt="menu"></img>
      <h1>
        Say hello to <br></br>ReactJS
      </h1>
      <p>
        You will learn how to use <br />
        the most popular frontend library,
        <br /> and become a super Ninja developer.
      </p>
      <button>Awesome!</button>
    </section>
  );
};

export default Card;
