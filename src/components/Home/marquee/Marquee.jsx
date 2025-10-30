import React from "react";

import "./marquee.css";

import ornament from "../../../assets/images/hero/Ornament.webp";

function Marquee() {
  return (
    <section
      className="marquee"
      aria-label="Core creative and development skills by Soft Matter"
    >
      <div className="skill_set">
        <div className="skill skill1">Web Development </div>
        <img
          src={ornament}
          alt=""
          id="o1"
          loading="lazy"
          role="presentation"
          aria-hidden="true"
        />
        <div className="skill skill2">Graphic Design</div>
        <img
          src={ornament}
          alt=""
          id="o2"
          loading="lazy"
          role="presentation"
          aria-hidden="true"
        />
        <div className="skill skill3">Brand Identity</div>
        <img
          src={ornament}
          alt=""
          id="o3"
          loading="lazy"
          role="presentation"
          aria-hidden="true"
        />
        <div className="skill skill4">Creative Direction</div>
        <img
          src={ornament}
          alt=""
          id="o4"
          loading="lazy"
          role="presentation"
          aria-hidden="true"
        />
        <div className="skill skill5">UI/UX Design</div>
      </div>
      <div className="mobile_res">
        <img src={ornament} alt="" role="presentation" aria-hidden="true"/>
        <div className="skill skill4">Free Lancer</div>
        <img src={ornament} alt="" role="presentation" aria-hidden="true"/>
      </div>
      <p className="visually-hidden">
        Creative design and full-stack Web development by Soft Matter, a digital studio by Nanda Kishore.
      </p>
    </section>
  );
}

export default Marquee;
