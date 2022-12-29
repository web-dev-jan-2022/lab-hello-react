import React from "react";
import LittleImage from "./LittleImage.jsx";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

const Footer = () => {
  return (
    <div className="bottomSection">
      {LittleImage(
        icon1,
        "Declarative",
        "React makes it painless to create interactive UIs."
      )}

      {LittleImage(
        icon2,
        "Components",
        "Build encapsulated components that manage their state."
      )}

      {LittleImage(
        icon3,
        "Single-Way",
        "A set of immutable values are passed to the component's."
      )}

      {LittleImage(
        icon4,
        "JSX",
        "Statistically-typed, designed to run on modern browsers."
      )}
    </div>
  );
};

export default Footer;
