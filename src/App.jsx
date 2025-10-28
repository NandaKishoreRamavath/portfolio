import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Helmet } from "react-helmet";

import './App.css';

import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import ProjectCard from './components/Projects/project card/ProjectCard.jsx'
import Contact from './components/Contact/Contact.jsx';

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
        <link rel="canonical" href="https://yourdomain.com/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

          {isLoading && (
        <div className="custom-loader">
          Loading......
        </div>
      )}

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home onLoaded={() => setIsLoading(false)} />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
