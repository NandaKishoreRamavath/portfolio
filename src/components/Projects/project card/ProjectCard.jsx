import React from 'react'
import './projectCard.css';

import projectImg from "../../../assets/images/projects/bigB_home.png";

function ProjectCard() {
  return (
    <section className="project">
        <div className="side_block">
            <span>1</span>
        </div>
        <div className="project_img">
            <img src={projectImg} alt="" />
        </div>
        <div className="title_card">
            <h1>K One Big B</h1>
            <h4>VIEW CASE</h4>
        </div>
        <div className="scroll_hint">
            <span>scroll</span>
            <div className="scroll_icon">
                 <div className="disc_holder">
              <div className="left">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <div className="right">
                <div className="circle move"></div>
                <div className="circle"></div>
              </div>
            </div>
            </div>
        </div>

    </section>
  )
}

export default ProjectCard
