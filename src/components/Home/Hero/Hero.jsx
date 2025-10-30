import React from "react";
import { NavLink } from "react-router-dom";

import "./Hero.css";

import Navbar from "../../Navbar/Navbar.jsx";

import tagDiv from "../../../assets/images/hero/tagDiv.webp";
import hireMeInner from "../../../assets/images/aboutMe/hire me inner.webp";
import hireMeOuter from "../../../assets/images/aboutMe/hire me outer.webp";

function Hero({ contactBtn }) {
  return (
    <section className="hero">
      <Navbar contactBtn={contactBtn} />
      <div className="hero_img">
        <img
          src="/images/hero/NandaKishore.webp"
          alt="Nanda Kishore Ramavath - Creative Designer and Full Stack Web Developer"
          id="heroImg"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="hireMe">
          <img
            src={hireMeInner}
            alt="hire freelance graphic designer"
            loading="lazy"
            decoding="async"
          />
          <img
            src={hireMeOuter}
            alt="hire freelance web developer"
            id="hireMeOuter"
            loading="lazy"
            decoding="async"
          />
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
            <img src={tagDiv} alt="Nanda Kishore — freelance designer & web developer at Soft Matter, India"
  loading="lazy"
  decoding="async"
 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
