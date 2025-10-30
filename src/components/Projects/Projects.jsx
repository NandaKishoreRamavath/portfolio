import React, { useState, useEffect, useRef, useCallback } from "react";

import { useParams } from "react-router-dom";

import "./projects.css";
import projectsData from "../../app_data/projects.js";
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
  const isScrolling = useRef(false);

  // ✅ Unified navigation function
  const handleNavigation = useCallback((direction) => {
    if (isScrolling.current || expandedProjectIndex !== null) return;

    if (direction === "next" && activeIndex < projectsData.length - 1) {
      setActiveIndex((idx) => idx + 1);
      isScrolling.current = true;
    } else if (direction === "prev" && activeIndex > 0) {
      setActiveIndex((idx) => idx - 1);
      isScrolling.current = true;
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 2000);
  }, [activeIndex, expandedProjectIndex]);

  // ✅ Handle scroll
  const handleScroll = useCallback(
    (e) => {
       // ❌ Don't handle scroll when project study is expanded
       if (expandedProjectIndex !== null) return;

      if (e.deltaY > 0) {
        handleNavigation("next");
      } else if (e.deltaY < 0) {
        handleNavigation("prev");
      }
    },
    [handleNavigation, expandedProjectIndex]
  );

  // ✅ Handle touch start
  const handleTouchStart = useCallback((e) => {

      // ❌ Don't handle touch when project study is expanded
      if (expandedProjectIndex !== null) return;

    touchStartY.current = e.touches[0].clientY;
  }, [expandedProjectIndex]);

  // ✅ Handle touch move - PREVENT DEFAULT HERE to stop pull-to-refresh
  const handleTouchMove = useCallback((e) => {
      // ❌ Don't handle touch when project study is expanded
      if (expandedProjectIndex !== null) return;

    const touchCurrentY = e.touches[0].clientY;
    const difference = touchStartY.current - touchCurrentY;

    // If swiping down, prevent default to block pull-to-refresh
    if (difference < -10) {
      e.preventDefault();
    }
  }, [expandedProjectIndex]);

  // ✅ Handle touch end
  const handleTouchEnd = useCallback(
    (e) => {

        // ❌ Don't handle touch when project study is expanded
      if (expandedProjectIndex !== null) return;

      const touchEndY = e.changedTouches[0].clientY;
      const difference = touchStartY.current - touchEndY;
      const swipeThreshold = 50;

      if (difference > swipeThreshold) {
        handleNavigation("next");
      } else if (difference < -swipeThreshold) {
        handleNavigation("prev");
      }
    },
    [handleNavigation, expandedProjectIndex]
  );

  // ✅ Attach event listeners - CRITICAL: passive: false for touchmove
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false }); // ← KEY FIX
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleScroll, handleTouchStart, handleTouchMove, handleTouchEnd]);

  const toggleExpand = (idx) => {
    if (expandedProjectIndex === idx) {
      setBtnName("View Case");
      setExpandedProjectIndex(null); // close case study view
    } else {
      setExpandedProjectIndex(idx);
      setBtnName("close case"); // open case study view
    }

    setTimeout(() => {
      const el = document.getElementById(`project-study-${idx}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250); // Delay to ensure the element exists; adjust for your render timing
  };

  const onClose = () => {
    setExpandedProjectIndex(null);
    setBtnName("View Case");
  };

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
