import React from "react";

const LittleImage = (icon, title, description) => {
  return (
    <div className="LittleImage">
      <img src={icon} alt="This is an icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LittleImage;
