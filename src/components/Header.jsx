import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1><i>Shivam Kumar Ashish</i></h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#techstack">Tech Stack & Tools</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;