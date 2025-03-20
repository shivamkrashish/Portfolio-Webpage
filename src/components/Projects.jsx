import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://github.com/shivamkrashish/Weather-App" target="_blank">Weather App</a> - Real-time weather updates using OpenWeather API.
        </li>
        <li>
          <a href="https://github.com/shivamkrashish/Tic-Tac-Toe-Game" target="_blank">Tic-Tac-Toe</a> - Interactive two-player game with real-time UI updates.
        </li>
        <li>
          <a href="https://github.com/shivamkrashish/Calculator-" target="_blank">Calculator</a> -  It allows users to perform both basic arithmetic and advanced mathematical operations.
        </li>
        <li>
          <a href="https://github.com/shivamkrashish/Simon-Says-Game" target="_blank">Simon-Says-Game</a> - A classic Simon Says memory game built using HTML, CSS, and JavaScript, where players repeat sequences to test their memory.
        </li>
      </ul>
    </section>
  );
}

export default Projects;