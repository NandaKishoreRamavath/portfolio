import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

import arrow from "../../assets/images/hero/arrow.webp";

function Navbar() {
  const [active, setActive] = useState(false);
  const [hoveringBtn, setHoveringBtn] = useState(false);

  const menuBtn = document.getElementById("discs");
  const menuSlide = document.getElementById("menuSlide");

  const togglMenu = () => {
    menuBtn.classList.toggle("discs_active");
    menuSlide.classList.toggle("menu_slide_active");
    setActive(!active);
  };

  const onBtnMouseEnter = () => setHoveringBtn(true);
  const onBtnMouseLeave = () => setHoveringBtn(false);

  return (
      <nav>
        <NavLink to ='/contact' className="project_btn">
          <div className="btn">
            <h5>Start a project</h5>
            <hr />
          </div>
          <img src={arrow} alt="" />
        </NavLink>
        <h4>Soft Matter</h4>
        <div className={`menu ${active && !hoveringBtn ? 'menu_active' : ''}`}>
          <div className="discs" id="discs" onClick={togglMenu}
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
          <div className="menu_slide" id="menuSlide">
            <NavLink to='projects'>Projects</NavLink>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
