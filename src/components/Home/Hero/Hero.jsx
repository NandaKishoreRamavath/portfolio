import React from "react";
import { NavLink } from "react-router-dom";

import "./Hero.css";

import Navbar from "../../Navbar/Navbar.jsx";

import heroImg from "../../../assets/images/hero/heroImg.png";
import tagDiv from "../../../assets/images/hero/tagDiv.webp";
import hireMeInner from "../../../assets/images/aboutMe/hire me inner.webp";
import hireMeOuter from "../../../assets/images/aboutMe/hire me outer.webp";

function Hero() {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero_img">
        <img src={heroImg} alt="" id="heroImg" />
        <div className="hireMe">
          <img src={hireMeInner} alt="hire freelance graphoic designer" />
          <img src={hireMeOuter} alt="hire freelance web developer" id="hireMeOuter" />
        </div>
      </div>

      <div className="hero_content">
        <div className="header">
          <h1>Nanda Kishore</h1>
          <h2>Graphic Designer</h2>
        </div>

        <h3 id="responsiveHead">WEB DEVELOPER</h3>

        <div className="hero_discript">
          <div className="left">
            <p>
              Specialized in UI/UX Design, Full-Stack Web Development, and
              Poster Design, I turn ideas into stunning visuals and seamless
              digital experiences.
            </p>
          </div>
          <div className="right">
            <h3>WEB DEVELOPER</h3>
            <p>
              Helping brands grow with visuals that connect and code that
              delivers.
            </p>
            <img src={tagDiv} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
