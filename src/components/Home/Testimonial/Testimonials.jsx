import React, { useEffect, useState } from "react";

import "./testimonial.css";
import testimonials from "../../../app_data/testimonials.js";

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
        <div key={idx}>
          <div
            className={`tm_holder ${idx === currentIndex ? "tm_active" : ""}`}
            id="tm_holder"
            itemScope
      itemType="https://schema.org/Review"
          >
            <div className="review_section">
              <h3 itemProp="author">{data.name}</h3>
              <p itemProp="reviewBody">{data.quote}</p>
            </div>
            <div className="emoji">
              <img src={data.emoji} alt={`${data.name}'s reaction`} />
            </div>
            <div className="profile_section">
              <img src={data.img} alt={`${data.name}'s profile`} loading="lazy" />
            </div>
          </div>
          <div className={`tags ${idx === currentIndex ? "tags_active" : ""}`} >
            {data.tags.map((tag, idx) => (
              <span key={idx} className={`tag tag${idx + 1}`}>
                {tag}
              </span>
            ))}
            <img src={data.asset} alt={`Nanda Kishore from softmatter provides ${data.tags[2]} services`} className="tag tagImg" />
          </div>
        </div>
      ))}

      <div className="hover_hint">
        <span>hover</span>
        <div className="hover_circle">
          <div className="inner_circle"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
