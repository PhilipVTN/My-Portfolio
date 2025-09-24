import React from "react";
import githubIcon from "./Images/Github.webp";
import gmailIcon from "./Images/Gmail.jpg";
import linkedinIcon from "./Images/LinkIn.webp";

const AboutCard = () => {
  return (
    <div className="about-card">
      <h2>Philip Nguyen</h2>
      <p>Fredrikstad, Norway</p>
      <br />
      <p>I’m a front-end developer with a Bachelor’s in Digital Media & Design, experienced in web development, UI/UX, and 3D design. Skilled in JavaScript, TypeScript, React, HTML, and CSS, I focus on building responsive, user-friendly interfaces. I also leverage AI tools to streamline workflows and enhance digital experiences. A strong collaborator with project management experience, I’m currently expanding into backend development to grow as a full-stack developer.</p>
      <br />
      <h3>Skills</h3>
      <ul>
        <li>HTML / CSS / JS / TS / React / Python</li>
        <li>React</li>
        <li>Figma</li>
        <li>UI/UX Design</li>
        <li>3D Modelling</li>
      </ul>
      <br />
      <h3>Contact</h3>

      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/philip-vtn-tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Philipvtn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmailIcon} alt="Email" />
        </a>

        <a
          href="https://github.com/PhilipVTN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default AboutCard;
