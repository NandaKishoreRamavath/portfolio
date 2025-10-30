import React, { useState, useEffect } from "react";
import "./projectStudy.css";

import closeBtn from "../../../assets/images/projects/close.svg";

function ProjectStudy({ project, onClose, htmlId }) {

    const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

    useEffect(() => {
    const files = project.showcase || [];
    if (files.length === 0) {
      setIsLoading(false);
      return;
    }

    let totalBytes = 0;
    let loadedBytes = 0;

    const fetchImageWithProgress = (src) => {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", src, true);
        xhr.responseType = "blob";

        xhr.onprogress = (event) => {
          if (event.lengthComputable) {
            // update overall progress
            const diff = event.loaded - (xhr._lastLoaded || 0);
            xhr._lastLoaded = event.loaded;
            loadedBytes += diff;
            setProgress(Math.round((loadedBytes / totalBytes) * 100));
          }
        };

        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(URL.createObjectURL(xhr.response)); // return blob URL
          } else {
            reject(new Error("Failed to load " + src));
          }
        };

        xhr.onerror = () => reject(new Error("Network error"));
        xhr.send();
      });
    };

    // 1️⃣ First, get all file sizes in parallel
    Promise.all(
      files.map((src) =>
        fetch(src, { method: "HEAD" })
          .then((res) => parseInt(res.headers.get("content-length") || 0))
          .catch(() => 0)
      )
    ).then((sizes) => {
      totalBytes = sizes.reduce((sum, s) => sum + s, 0) || 1; // avoid /0

      // 2️⃣ Now actually fetch all images (with progress)
      Promise.all(files.map(fetchImageWithProgress))
        .then((blobUrls) => {
          // replace project.showcase with local blob URLs
          project._loadedShowcase = blobUrls;
          setProgress(100);
          setTimeout(() => setIsLoading(false), 300);
        })
        .catch((err) => {
          console.error("Error loading images:", err);
          setIsLoading(false);
        });
    });
  }, [project]);

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
