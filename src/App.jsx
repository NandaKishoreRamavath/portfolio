import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Helmet } from "react-helmet";

import "./App.css";

const Home = lazy(() => import("./components/Home/Home"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    import("./components/Projects/Projects");
  }, []);

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
        <link rel="canonical" href="https://nandakishore.onrender.com" />

        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nandakishore.onrender.com#nandakishore",
      "name": "Nanda Kishore",
      "alternateName": ["Nand Kishor", "Nanda Kishor", "Nandakishor"],
      "jobTitle": "Creative Designer & Full-Stack Web Developer",
      "url": "https://nandakishore.onrender.com",
      "image": "https://nandakishore.onrender.com/images/SEO/heroImg.webp",
      "description": "Expert freelance creative designer and full-stack web developer at Soft Matter, delivering functional, high-performing, and visually exceptional websites that connect design, identity, and technology.",
      "worksFor": {
        "@type": "Organization",
        "@id": "https://nandakishore.onrender.com#softmatter"
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
        "Branding & Identity",
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
          "Java"
        ],
        "occupationLocation": {
          "@type": "Country",
          "name": "India"
        }
      },
      "brand": {
        "@type": "Brand",
        "name": "Soft Matter",
        "url": "https://nandakishore.onrender.com"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://nandakishore.onrender.com#softmatter",
      "name": "Soft Matter",
      "url": "https://nandakishore.onrender.com",
      "logo": "https://nandakishore.onrender.com/images/SEO/logo.png",
      "description": "Soft Matter is a creative design and web studio by Nanda Kishore, delivering full-stack websites, branding, and design experiences.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Creative Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Identity & Design",
              "description": "Logo design, visual identity systems, and brand storytelling."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Design & Development",
              "description": "Modern, responsive, full-stack websites powered by the MERN stack."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media & Creative Strategy",
              "description": "Content design and strategy to elevate digital presence."
            }
          }
        ]
      }
    }
  ]
}
`}
        </script>
      </Helmet>

      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="custom-loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
