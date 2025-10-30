import React, { useState, useEffect } from "react";
import "./projectStudy.css";

import closeBtn from "../../../assets/images/projects/close.svg";

function ProjectStudy({ project, onClose, htmlId }) {

    const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

   useEffect(() => {
    let loaded = 0;
    const imageElements = project.showcase.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    const loadAll = async () => {
      for (const img of imageElements) {
        try {
          await img.decode(); // ✅ waits until browser decodes and paints
          loaded++;
          setProgress(Math.round((loaded / imageElements.length) * 100));
        } catch (e) {
          console.warn("Image failed to decode:", img.src, e);
        }
      }
      setIsLoading(false);
    };

    loadAll();
  }, [project.showcase]);

  return (
    <section
      className="project_study"
      id={htmlId}
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <meta itemProp="name" content={project.projectName} />
      <meta itemProp="author" content="Nanda Kishore (Soft Matter)" />
      <meta itemProp="datePublished" content="2025-01-01" />
      <meta itemProp="inLanguage" content="en" />

      <div className="exitBtn">
        <button onClick={onClose} aria-label="Close project case study view">
          <img src={closeBtn} alt="Close case study" />
        </button>
      </div>
      <div className="content">
        <h3>CASE STUDY</h3>
        <p itemProp="description" style={{ whiteSpace: "pre-line" }}>{project.desc}</p>
      </div>
      <div className="content_showcase"  itemProp="image" itemScope itemType="https://schema.org/ImageGallery">
        {isLoading ? (
          <div className="loader">
            <h4>Loading high-quality project files...</h4>
             <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <p>{progress}%</p>
          </div>
        ) : (
          project.showcase.map((img, idx) => {
          return (
            <figure className="showcase_items" key={idx}>
              <img src={img} alt={`${project.projectName} showcase design ${idx + 1} by Soft Matter`}
              loading="lazy"
              decoding="async"
              itemProp="image"/>
            </figure>
          );
        }))}
      </div>
    </section>
  );
}

export default ProjectStudy;
