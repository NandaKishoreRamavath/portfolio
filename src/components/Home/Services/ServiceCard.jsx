import React from "react";

import "./serviceCard.css";

import playBtn_active from "../../../assets/images/services/playBtn_active.webp";
import primaryPlayBtn from "../../../assets/images/services/playbtnPrimary.webp";

function ServiceCard({ data, isActive, onActivate }) {

  return (
    <section className={`service ${isActive ? "service_card_active" : ""}`} id="service">
      <div className="service_header">
        <div className="service_head">
          <h3>{data.header}</h3>
          <p>{data.subHeader}</p>
        </div>
        <div className="service_logo">
          <img src={data.logo} alt="" />
        </div>
      </div>
      <div className="service_img">
        {data.mainVideo ? (
    <video autoPlay loop muted playsInline>
      <source src={data.mainVideo} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={data.mainImg} alt="" />
  )}
      </div>
      <div className="service_content">
        <div className="service_content_inactive">
          <h5>{data.subContext}</h5>
          <h4>{data.mainContext}</h4>
        </div>
        <div className="service_content_active">
          <h4>{data.activeContextHeader}</h4>
          <p>{data.activeContext}</p>
        </div>
      </div>
      <div className="service_tags">
        <hr />
        <ul>
          {data.tags.map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </ul> 
      </div>
      <div className="action_btn">
        <button onClick={onActivate} className="inactive_btn">
          <img src={primaryPlayBtn} alt="" id="primaryBtn" />
        </button>
        <button className="active_btn">
          <img src={playBtn_active} alt="" />
          <span>REVIEW</span>
        </button>
      </div>
    </section>
  );
}

export default ServiceCard;
