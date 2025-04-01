import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Email: shivamkumar120904@gmail.com</p>
      <p>Phone: 7903819844</p>
      <p>GitHub: <a href="https://github.com/shivamkrashish" target="_blank">shivamkrashish</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/shivam-kumar-ashish-b773ab31a/" target="_blank" rel="noopener noreferrer">Shivam Kumar Ashish</a></p>
      <a href="/assents/resume.pdf" download className="resume-button">Download Resume</a>
    </section>
  );
}

export default Contact;