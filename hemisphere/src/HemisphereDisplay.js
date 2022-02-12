import React from "react";
import "./Hemisphere.css";
import northernPic from "./img/Northern_hemisphere.png";
import southernPic from "./img/Southern_hemisphere.png";

const hemisphereConfig = {
  Northern: {
    text: "it is norhern hemisphere",
    picture: northernPic,
  },

  Southern: {
    text: "it is souhern hemisphere",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  //console.log(latitude)
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];
  //const picture = latitude > 0 ? northernPic : southernPic;

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemisphere_picture" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
