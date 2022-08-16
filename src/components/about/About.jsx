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
          It is a long established fact that those who never gives will
          ultimately succeed.
        </p>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipsicing el eliusmod temppr
          Lorem ipsum dolor sit amet, consectetur adipsicing el eliusmod temppr
          Lorem ipsum dolor sit amet, consectetur adipsicing el eliusmod temppr
          Lorem ipsum dolor sit amet, consectetur adipsicing el eliusmod temppr
          Lorem ipsum dolor sit amet, consectetur adipsicing el eliusmod temppr
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
              I am a certified AWS cloud practitioner with practical knowledge
              about the cloud. Skills include but not limited to: <br></br>
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
