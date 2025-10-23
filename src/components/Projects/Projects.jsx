import React, { useState, useRef, useCallback } from "react";

import "./projects.css";
import projectsData from "../../app data/projects.js";
import ProjectCard from "./project card/ProjectCard.jsx";
import ProjectStudy from "./project study/ProjectStudy.jsx";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
  const [btnName, setBtnName] = useState("View Case");
  // Throttle control
  const isScrolling = useRef(false);

  const handleScroll = useCallback(
    (e) => {
      if (isScrolling.current || expandedProjectIndex !== null) return;

      if (e.deltaY > 0 && activeIndex < projectsData.length - 1) {
        setActiveIndex((idx) => idx + 1);
        isScrolling.current = true;
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((idx) => idx - 1);
        isScrolling.current = true;
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 2000); // Adjust delay to match your transition speed
    },
    [activeIndex, projectsData.length, expandedProjectIndex]
  );

  React.useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

  const toggleExpand = (idx) => {
    if (expandedProjectIndex === idx) {
      setBtnName("View Case");
      setExpandedProjectIndex(null);  // close case study view
    } else {
      setExpandedProjectIndex(idx);
      setBtnName("close case");   // open case study view
    }

    setTimeout(() => {
      const el = document.getElementById(`project-study-${idx}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250); // Delay to ensure the element exists; adjust for your render timing
  };

  const onClose = () => {
    setExpandedProjectIndex(null);
    setBtnName("View Case");
  }

  return (
    <section className="projects">
      {projectsData.map((data, idx) => (
        <div key={idx}>
          <ProjectCard
            isVisible={idx === activeIndex}
            direction={idx > activeIndex ? "down" : "up"}
            data={data}
            onViewCase={() => toggleExpand(idx)}
            btnName={btnName}
          />
          {expandedProjectIndex === idx && (
            <ProjectStudy
              project={data}
              onClose={onClose}
              htmlId={`project-study-${idx}`}
            />
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
