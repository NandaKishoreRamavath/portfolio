import React from "react";
import "./projectStudy.css";

import closeBtn from '../../../assets/images/projects/close.svg';

function ProjectStudy({ project, onClose, htmlId }) {
  return (
    <section className="project_study" id={htmlId}>
      <div className="exitBtn">
        <button onClick={onClose}><img src={closeBtn} alt="" /></button>
      </div>
      <div className="content">
        <h3>CASE STUDY</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{project.desc}</p>
      </div>
      <div className="content_showcase">
        {project.showcase.map((img, idx) => {
    return (
      <div className="showcase_items" key={idx}>
        <img src={img} alt="" />
      </div>
    );
  })}
       
        {/* <div className="showcase_main">
          <img src={bigBlogo} alt="" className="main" />
          <img src={bigBlogo} alt="" />
          <img src={bigBlogo} alt="" />
          <img src={bigBlogo} alt="" />
          <img src={bigBlogo} alt="" />
          <img src={bigBlogo} alt="" />
        </div> */}
      </div>
    </section>
  );
}

export default ProjectStudy;
