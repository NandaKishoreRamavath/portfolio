import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.css";

import footerBG from "../../assets/images/footer/footer.svg";
import footerBGMobile from "../../assets/images/footer/footerMobile.svg";
import illustration from "../../assets/images/footer/illustration.svg";
import whatsapp from "../../assets/images/footer/whatsapp.webp";
import ig from "../../assets/images/footer/ig.webp";
import linkdin from "../../assets/images/footer/linkdin.webp";
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
            <a
              href="https://wa.me/918955562492"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsapp}
                alt="Chat with Nanda Kishore Ramavath on WhatsApp"
              />
            </a>
            <a
              href="https://www.instagram.com/_soft.matter/"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="Instagram profile of Nanda Kishore Ramavath" />
            </a>
            <a
              href="https://www.linkedin.com/in/nanda-kishore-ramavath/"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkdin}
                alt="LinkedIn profile of Nanda Kishore Ramavath"
              />
            </a>
            <a
              href="https://www.reddit.com/user/Distinct-Station7063/"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reddit}
                alt="Reddit profile of Nanda Kishore Ramavath"
              />
            </a>
            <a
              href="https://github.com/NandaKishoreRamavath"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="Github profile of Nanda Kishore Ramavath"
              />
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
            <p>© 2025 Nanda Kishore | </p>
            <p>Soft Matter | All Rights Reserved.</p>
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
            <a
              href="https://wa.me/918955562492"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsapp}
                alt="Chat with Nanda Kishore Ramavath on WhatsApp"
              />
            </a>
            <a
              href="https://www.instagram.com/_soft.matter/"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="Instagram profile of Nanda Kishore Ramavath" />
            </a>
            <a
              href="https://www.linkedin.com/in/nanda-kishore-ramavath/"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkdin}
                alt="LinkedIn profile of Nanda Kishore Ramavath"
              />
            </a>
            <a
              href="https://www.reddit.com/user/Distinct-Station7063/"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reddit}
                alt="Reddit profile of Nanda Kishore Ramavath"
              />
            </a>
            <a
              href="https://github.com/NandaKishoreRamavath"
              className="social_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="Github profile of Nanda Kishore Ramavath"
              />
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
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
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
              <p>© 2025 Nanda Kishore | </p>
              <p>Soft Matter | All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
