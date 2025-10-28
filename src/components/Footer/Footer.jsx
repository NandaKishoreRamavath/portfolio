import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.css";

import footerBG from "../../assets/images/footer/footer.svg";
import footerBGMobile from "../../assets/images/footer/footerMobile.png";
import illustration from "../../assets/images/footer/illustration.svg";
import whatsapp from "../../assets/images/footer/whatsapp.webp";
import ig from "../../assets/images/footer/ig.webp";
import fb from "../../assets/images/footer/fb.webp";
import reddit from "../../assets/images/footer/reddit.webp";
import github from "../../assets/images/footer/github.webp";

function Footer() {
  return (
    <footer>
      <section className="footer">
        <img src={footerBG} alt="" id="footerBG" />
        <div className="social_holder">
          <h2>WHERE CAN U FIND ME?</h2>
          <div className="social_icons">
            <a href="https://wa.me/918955562492" className="social_btn">
              <img src={whatsapp} alt="" />
            </a>
            <a
              href="https://www.instagram.com/_soft.matter/"
              className="social_btn"
            >
              <img src={ig} alt="" />
            </a>
            <a href="" className="social_btn">
              <img src={fb} alt="" />
            </a>
            <a
              href="https://www.reddit.com/user/Distinct-Station7063/"
              className="social_btn"
            >
              <img src={reddit} alt="" />
            </a>
            <a href="" className="social_btn">
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="footer_cntnt">
          <div className="logo">
            <span>NANDA</span> KISHORE
          </div>
          <ul className="nav">
            <li>
              <NavLink
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">PROJECTS</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
          <div className="footer_info">
            <p>2025 | Copy Rights</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </section>

      <section className="footer_mobile">
        <div className="footer_holder">
          <img src={footerBGMobile} alt="" id="footerBG" />
          <img src={illustration} alt="" id="footerIllustration" />
        </div>

        <div className="social_holder">
          <h2>WHERE CAN U FIND ME?</h2>
          <div className="social_icons">
            <a href="https://wa.me/918955562492" className="social_btn">
              <img src={whatsapp} alt="" />
            </a>
            <a
              href="https://www.instagram.com/_soft.matter/"
              className="social_btn"
            >
              <img src={ig} alt="" />
            </a>
            <a href="" className="social_btn">
              <img src={fb} alt="" />
            </a>
            <a
              href="https://www.reddit.com/user/Distinct-Station7063/"
              className="social_btn"
            >
              <img src={reddit} alt="" />
            </a>
            <a href="" className="social_btn">
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="footer_cntnt">
          <div className="logo">
            <span>NANDA</span>
            <br /> KISHORE
          </div>
          <div className="footer_cntnt_nav">
            <ul className="nav">
              <li>
              <NavLink
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">PROJECTS</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            </ul>
            <div className="footer_info">
              <p>2025 | Copy Rights</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
