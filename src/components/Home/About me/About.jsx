import React from "react";

import "./about.css";

import abtMeImg from "../../../assets/images/aboutMe/me.webp";
import hireMeInner from "../../../assets/images/aboutMe/hire me inner.webp";
import hireMeOuter from "../../../assets/images/aboutMe/hire me outer.webp";

function About() {
  return (
    <section className="about">
      <div className="about_holder">
        <div className="about_content">
          <h2>About Me</h2>
          <div className="abt_dicript_content">
            <p>
            I’m a designer who loves visuals that pop and a developer who enjoys
            making them work like magic. From posters that grab attention to
            full-stack web apps that run smooth, I mix creativity with solid
            tech skills to build things people actually remember. I like
            projects that push me to learn more, experiment more, and deliver
            something better than expected.
          </p>
          <ul>
            <li>Birthday : <span>Aprill 11 2003</span></li>
            <li>Age : <span>22</span></li>
            <li>City : <span>Viziangaram, AP</span></li>
            <li>Degree : <span>Bachelors In Computer Science</span></li>
          </ul>
          <button id="resumeBtn" onClick={() => window.open('/Resume_NandaKishoreRamavath.pdf', '_blank')}>Resume</button>
          </div>
        </div>
        <div className="img_holder">
          <img src={abtMeImg} alt="" id="abtMeImg"/>
          <div className="hireMe">
            <img src={hireMeInner} alt="hire freelance graphoic designer" />
            <img
              src={hireMeOuter}
              alt="hire freelance web developer"
              id="hireMeOuter"
            />
          </div>
          <div className="about_tags">
            <span className="tag tag1">APRIL 11, 2003</span>
            <span className="tag tag2">AP, INDIA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
