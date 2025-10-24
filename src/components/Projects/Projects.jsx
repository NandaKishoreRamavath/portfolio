import React, { useState, useEffect, useRef, useCallback } from "react";

import { useParams } from "react-router-dom";

import "./projects.css";
import projectsData from "../../app data/projects.js";
import ProjectCard from "./project card/ProjectCard.jsx";
import ProjectStudy from "./project study/ProjectStudy.jsx";

function Projects() {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
  const [btnName, setBtnName] = useState("View Case");

    // Set initial activeIndex based on URL parameter
  useEffect(() => {
    if (id) {
      // Find the index of the project with matching id
      const projectIndex = projectsData.findIndex(
        (project) => project.id === parseInt(id)
      );
      
      if (projectIndex !== -1) {
        setActiveIndex(projectIndex);
      }
    }
  }, [id]); // Run when id changes

    // Touch tracking
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

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
    [activeIndex, expandedProjectIndex]
  );
  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  // Handle touch end (swipe detection)
  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    handleSwipe();
  };

  // Detect swipe direction
  const handleSwipe = () => {
    if (isScrolling.current || expandedProjectIndex !== null) return;

    const swipeThreshold = 50; // minimum distance to register as swipe
    const difference = touchStartY.current - touchEndY.current;

    // Swipe up (next project)
    if (difference > swipeThreshold && activeIndex < projectsData.length - 1) {
      setActiveIndex((idx) => idx + 1);
      isScrolling.current = true;
    }
    // Swipe down (previous project)
    else if (difference < -swipeThreshold && activeIndex > 0) {
      setActiveIndex((idx) => idx - 1);
      isScrolling.current = true;
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 2000);
  };

  // Attach event listeners
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
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
