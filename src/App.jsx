import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import ProjectCard from './components/Projects/project card/ProjectCard.jsx'
import Contact from './components/Contact/Contact.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
