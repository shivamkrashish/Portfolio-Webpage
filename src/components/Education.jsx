import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="edu-item">
        <h3>B-Tech | Computer Science & Engineering</h3>
        <p>Radharaman Institute of Technology and Science, Bhopal</p>
        <p>CGPA: 7.69</p>
      </div>
      <div className="edu-item">
        <h3>XII (BSEB)</h3>
        <p>R.K Collage, Madhubani, Bihar, 847211</p>
        <p>Percentage: 66.8% (2022)</p>
      </div>
      <div className="edu-item">
        <h3>X (BSEB)</h3>
        <p>B.S.H/S, Barhgoriya, Nahar, Madhubani, Bihar, 847236</p>
        <p>Percentage: 73.6%</p>
      </div>
    </section>
  );
}

export default Education;