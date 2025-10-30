import React from "react";
import "./projectCard.css";

function ProjectCard({ isVisible, direction, data, onViewCase, btnName }) {
  return (
    <section
      className={`project ${isVisible ? " project_visible" : ""} ${direction}`}
      itemScope
      itemType="https://schema.org/CreativeWork"
      aria-label={`Project ${data.projectName} by Nanda Kishore`}
    >
      {/* Decorative side blocks */}
      <div className="left_block">
        <span>{data.id}</span>
      </div>
      <div className="right_block"></div>

      {/* Project Image */}
      <div className="project_img">
        <img
          src={data.openingImage}
          alt={`${data.projectName} project showcase by Nanda Kishore from Soft Matter`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="title_card">
        <h1 itemProp="name">{data.projectName}</h1>
        <button
          onClick={onViewCase}
          aria-label={`View detailed case study for ${data.projectName}`}
        >
          <h4>{btnName}</h4>
        </button>
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
      <div className="logo" aria-label="Nanda Kishore personal branding mark">
        <h3>
          <span>NANDA</span> KISHORE
        </h3>
      </div>
      <div className="project_class">
        <h5 itemProp="genre">
          {data.projectClass} <span>{data.projectClass_span}</span>
        </h5>
      </div>
    </section>
  );
}

export default ProjectCard;
