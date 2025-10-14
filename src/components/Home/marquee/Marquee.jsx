import React from 'react'

import './marquee.css';

import ornament from '../../../assets/images/hero/Ornament.webp';

function Marquee() {
  return (
   <section className="marquee">
        <div className="skill_set">
            <div className="skill skill1">Web Development </div>
            <img src={ornament} alt="" id='o1'/>
            <div className="skill skill2">Graphic Design</div>
            <img src={ornament} alt="" id='o2' />
            <div className="skill skill3">Brand Identity</div>
            <img src={ornament} alt="" id='o3' />
            <div className="skill skill4">Creative Direction</div>
            <img src={ornament} alt="" id='o4' />
            <div className="skill skill5">UI/UX Design</div>
            {/* <div className="skill skill6">3d Modelling<img src={ornament} alt="" /></div> */}
        </div>
        <div className="mobile_res">
            <img src={ornament} alt="" />
            <div className="skill skill4">Free Lancer</div>
            <img src={ornament} alt="" />
        </div>
   </section>
  )
}

export default Marquee;
