import React from "react";
import "./About.css";
import myPic from "../../assets/Sifiso.jpg";
import cv from "../../assets/Sifiso-Ntuli-CV.pdf";

function AboutMe() {
  return (
    <div id="aboutMe">
      <div id="about-container">
        {" "}
        <h1 id="about-title">
          About <span id="me">Me</span>
        </h1>
      </div>
      <div className="about-content">
        <img src={myPic} alt="sfiso" height="300px" className="about-image" />
        <div id="about-description">
          <section className="about-section">
            <p className="about-text">
              I’m an aspiring full-stack developer driven by a passion for
              crafting seamless, high-performing web applications. I thrive on
              continuous learning and growth, always eager to embrace challenges
              that push boundaries and spark meaningful innovation.
            </p>

            <p className="about-text">
              Beyond coding, you’ll often find me out on the cricket field or
              engaged in team-building activities — these experiences sharpen my
              teamwork skills and help me collaborate effortlessly with others.
              Just like in development, I believe success comes from synergy and
              clear communication.{" "}
            </p>
            <p className="about-text">
              With a strong creative and problem-solving mindset, I bring ideas
              to life through engaging digital experiences. My goal is to
              deliver web solutions that don’t just meet expectations but exceed
              them — optimizing performance, enhancing functionality, and making
              a real impact.
            </p>
            <p className="about-text">
              Committed to building innovative solutions as a team.
            </p>

            <a href={cv}>
              <button id="cv-button">Download CV</button>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
