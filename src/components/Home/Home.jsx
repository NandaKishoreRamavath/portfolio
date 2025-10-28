import React, {useEffect} from "react";

import Hero from './Hero/Hero.jsx';
import Marquee from './marquee/Marquee.jsx';
import About from './About me/About.jsx';
import Services from './Services/Services.jsx';
import Testimonials from './Testimonial/Testimonials.jsx';
import Footer from '../Footer/Footer.jsx';

function Home({ onLoaded }) {
  useEffect(() => {
    // If you want just initial render
    onLoaded();
  }, [onLoaded]);

  return (
    <>
        <Hero />
        <Marquee />
        <About />
        <Services/>
        <Testimonials/>
        <Footer/>
    </> 
  )
}

export default Home;
