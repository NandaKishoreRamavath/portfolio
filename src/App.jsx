import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Helmet } from "react-helmet";

import "./App.css";

import Home from "./components/Home/Home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ProjectCard from "./components/Projects/project card/ProjectCard.jsx";
import Contact from "./components/Contact/Contact.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Helmet>
        <title>Nanda Kishore | Soft Matter</title>
        <meta
          name="description"
          content="Portfolio of Nanda Kishore — creative designer & front-end developer specializing in digital brand design, mern-based web development, and storytelling through visuals."
        />
        <meta
          name="keywords"
          content="Nanda Kishore, Nand Kishor, Nandakishor, Nanda Kishor, designer, React developer, portfolio, creative developer,"
        />
        <link
          rel="canonical"
          href="https://https://nandakishore.onrender.com/"
        />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://https://nandakishore.onrender.com/#nandakishore",
            "name": "Nanda Kishore",
            "alternateName": ["Nand Kishor", "Nanda Kishor", "Nandakishor"],
            "jobTitle": "Creative Designer & Full-Stack Web Developer",
            "url": "https://https://nandakishore.onrender.com/",
            "image": "https://https://nandakishore.onrender.com/images/SEO/heroImg.webp",
            "description": "Expert freelance creative designer and full-stack web developer delivering functional, high-performing, and visually exceptional websites that connect design, identity, and technology.",
            "worksFor": {
              "@type": "Organization",
              "name": "Soft Matter",
              "url": "https://https://nandakishore.onrender.com/"
            },
            "sameAs": [
              "https://www.linkedin.com/in/nandakishore",
              "https://www.instagram.com/grounded.pea_/",
              "https://github.com/NandaKishoreRamavath"
            ],
            "knowsAbout": [
              "MERN Stack",
              "UI/UX Design",
              "Brand Identity Design",
              "Graphic Design",
              "Creative Direction",
              "Digital Branding",
              "Branding & identity",
              "Web Performance Optimization"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Freelance Designer & Developer",
              "skills": [
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "GSAP",
                "Figma",
                "Adobe Creative Suite",
                "Blender",
                "JAVA"
              ],
              "occupationLocation": {
                "@type": "Country",
                "name": "India"
              }

            },
            "brand": {
              "@type": "Brand",
              "name": "Soft Matter",
              "url": "https://https://nandakishore.onrender.com/"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://https://nandakishore.onrender.com/#softmatter",
            "name": "Soft Matter",
            "url": "https://https://nandakishore.onrender.com/",
            "logo": "https://https://nandakishore.onrender.com/images/SEO/logo.webp",
            "founder": {
              "@id": "https://https://nandakishore.onrender.com/#nandakishore"
            },
            "description": "Soft Matter is the creative identity of Nanda Kishore — crafting intelligent brand identities, emotionally driven visuals, and high-performing websites that fuse art, design, and technology."
             "serviceOffered": [
              {
                "@type": "Service",
                "name": "Website Design & Development",
                "description": "Designing and building functional, high-impact websites using MERN stack and modern UI/UX principles."
              },
              {
                "@type": "Service",
                "name": "Brand Identity & Creative Direction",
                "description": "Building distinctive, emotionally resonant visual identities and brand systems."
              },
              {
                "@type": "Service",
                "name": "Graphic Design & Marketing Assets",
                "description": "Designing digital and print assets that communicate brand personality and value."
              }
            ]
          }
        ]
      }
    `}
        </script>
      </Helmet>

      {isLoading && <div className="custom-loader">Loading......</div>}

      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home onLoaded={() => setIsLoading(false)} />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
