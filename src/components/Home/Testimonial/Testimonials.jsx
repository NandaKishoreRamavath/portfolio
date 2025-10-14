import React, { useEffect, useState } from "react";

import "./testimonial.css";
import testimonials from "../../../app data/testimonials";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 7000); // 7 seconds per testimonial

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <section className="testimonials">
      {testimonials.map((data, idx) => (
        <>
          <div
            key={idx}
            className={`tm_holder ${idx === currentIndex ? "tm_active" : ""}`}
            id="tm_holder"
          >
            <div className="review_section">
              <h3>{data.name}</h3>
              <p>{data.quote}</p>
            </div>
            <div className="emoji">
              <img src={data.emoji} alt="" />
            </div>
            <div className="profile_section">
              <img src={data.img} alt="" />
            </div>
          </div>
          <div className={`tags ${idx === currentIndex ? "tags_active" : ""}`} >
            {data.tags.map((tag, idx) => (
              <span key={idx} className={`tag tag${idx + 1}`}>
                {tag}
              </span>
            ))}
            <img src={data.poster} alt="" className="tag tagImg" />
          </div>
        </>
      ))}
    </section>
  );
}

export default Testimonials;
