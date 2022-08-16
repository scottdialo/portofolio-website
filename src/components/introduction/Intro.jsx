import React from "react";
import "./intro.css";
import me from "../../images/justme.png";

const Intro = function () {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-greeting">Hello, My name is </h2>
          <h2 className="intro-name">Scott Dialo</h2>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Javascript</div>
              <div className="intro-title-item">React JS</div>
              <div className="intro-title-item">NodeJS</div>
              <div className="intro-title-item">AWS Cloud Practitioner</div>
            </div>
          </div>
          <p className="intro-description">
            I am a Web Developer who has a strong bond with product that are
            built well, therefore I do nothing but make things people love and
            enjoy. I am Creative with strong leadership skills and an excellent
            team player.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="img-bg"></div>
        <img src={me} alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
