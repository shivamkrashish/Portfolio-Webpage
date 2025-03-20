import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';
import './styles.css'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <TechStack />
      <About />
      <Projects />
      <Achievements />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;