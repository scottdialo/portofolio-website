import React from "react";
import about from "../about/about.css";
import Aws_certificate from "../../images/aws_cloud_certificate.png";
function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/13077148/pexels-photo-13077148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="about-img"
            alt=""
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          "Do the best you can until you know better. Then when you know better,
          do better."{" "}
          <strong>
            <i>Maya Angelou</i>
          </strong>
        </p>
        <p className="about-description">
          Hey there, Scott here! I am previous founder turned software engineer,
          I have started few startups before and learned a lot, some of these
          includes team collaboration, leadership, accountability and team
          building.. As a person with a curious mind I am always looking for
          ways to improve things to enhance the customer experience. I am
          looking to join a creative and innovative team to learn and contribute
          my experiences to. I have knowledge in building applications using
          Javascript, React, nodeJs and mongoDB. Git is underrated!
        </p>
        <div className="about-award">
          <img
            src={Aws_certificate}
            alt="aws-cloud-practitioner-cert"
            className="award-img"
          />
          <div className="about-award-text">
            <h1>Certifications:</h1>
            <h4 className="about-award-title">AWS Cloud Practitioner</h4>
            <p className="about-award-desc">
              I am a certified AWS cloud practitioner with knowledge about the
              cloud. Skills include but not limited to: <br></br>
              <strong>
                {" "}
                AWS Cloud |<span> Cloud Computing </span>| Cloud Platform |
                Cloud Services
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
