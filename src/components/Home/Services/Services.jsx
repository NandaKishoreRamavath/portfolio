import React, { useState, useEffect } from "react";

import "./services.css";
import ServiceCard from "./Service card/ServiceCard.jsx";
import services from "../../../app_data/services.js";

import navBtn from "../../../assets/images/services/next_btn.webp";

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
const [translateX, setTranslateX] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // ✅ Step 1: Detect how many cards should be visible & measure width
  const updateLayout = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 435) setVisibleCards(1);
    else if (screenWidth <= 1080) setVisibleCards(2);
    else setVisibleCards(3);

    // ✅ measure one card width dynamically (after render)
    setTimeout(() => {
      const card = document.querySelector(".service");
      if (card) {
        const gap = 64; // matches your CSS gap
        setCardWidth(card.offsetWidth + gap);
      }
    }, 100);
  };

  // ✅ Step 2: Run on mount and resize
  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // ✅ Step 3: Fixed total cards
  const maxOffset = -(cardWidth * (3 - visibleCards)) + 0; // +margin for end gap

  // ✅ Step 4: Button actions
  const scrollLeft = () => {
    setTranslateX((prev) => Math.min(prev + cardWidth, 0));
  };

  const scrollRight = () => {
    setTranslateX((prev) =>
      Math.max(prev - cardWidth, maxOffset)
    );
  };

    // Map service categories to their first project ID
  const categoryToProjectId = {
    branding: 1,
    web: 4,
    "3d": 6
  };
  return (
    <section className="services">
      <h2>What I Offer ?</h2>
      <div className="services_holder" id="servicesHolder"
      style={{
          transform: `translateX(${translateX}px)`,
        }}>
        {Object.values(services).map((data, index) => (
          <ServiceCard
            key={index}
            data={data}
            isActive={activeIndex === index}
            onActivate={() => setActiveIndex(index)}
            projectId={categoryToProjectId[data.category]} // pass the project ID
          />
        ))}
      </div>
      <div className="scroll_buttons">
        <button onClick={scrollLeft}><img src={navBtn} alt="Scroll services by Soft Matter to left" /></button>
        <button onClick={scrollRight}><img src={navBtn} alt="Scroll services by Soft Matter to right" /></button>

      </div>
    </section>
  );
}

export default Services;
