import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";



import arrow from "../../assets/images/hero/arrow.webp";

function Navbar() {
  const [active, setActive] = useState(false);
  const [hoveringBtn, setHoveringBtn] = useState(false);

  const onBtnMouseEnter = () => setHoveringBtn(true);
  const onBtnMouseLeave = () => setHoveringBtn(false);


  return (
      <nav>
        <NavLink to ='/contact' className="project_btn" aria-label="Start a new project with Nanda Kishore">
          <div className="btn">
            <h5>Start a project</h5>
            <hr />
          </div>
          <img src={arrow} alt="Arrow icon pointing to contact section" />
        </NavLink>

        <h4 className="brand" aria-label="Soft Matter by Nanda Kishore">Soft Matter</h4>
        <div className={`menu ${active && !hoveringBtn ? 'menu_active' : ''}`} aria-label="Toggle project menu">
          <div className={`discs ${active ? 'discs_active' : ''}`} id="discs" onClick={() => setActive(!active)}
          onMouseEnter={onBtnMouseEnter}
        onMouseLeave={onBtnMouseLeave}
          >
            <div className="disc_holder">
              <div className="left">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <div className="right">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <div className={`menu_slide ${active ? 'menu_slide_active' : ''}`} id="menuSlide">
            <NavLink to='projects'>Projects</NavLink>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
