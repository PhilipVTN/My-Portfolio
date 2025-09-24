import React, { useState } from "react";
import portfolioIcon from "./Images/Portfolio.PNG"
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "My Portfolio",
      shortDescription: "Javascript / React / CSS / HTML",
      longDescription: "This is my Portfolio",   
      image: portfolioIcon,
      github: "https://github.com/PhilipVTN/My-Portfolio"
    },
        {
      title: "My Portfolio",
      shortDescription: "Javascript",
      longDescription: "This is my Portfolio",   
      image: "/images/portfolio.gif",
      github: "https://github.com/PhilipVTN/My-Portfolio"
    },
        {
      title: "My Portfolio",
      shortDescription: "Javascript",
      longDescription: "This is my Portfolio",   
      image: "/images/portfolio.gif",
      github: "https://github.com/PhilipVTN/My-Portfolio"
    },
        {
      title: "My Portfolio",
      shortDescription: "Javascript / React / CSS / HTML",
      longDescription: "This is my Portfolio",   
      image: "/images/portfolio.gif",
      github: "https://github.com/PhilipVTN/My-Portfolio"
    },
        {
      title: "My Portfolio",
      shortDescription: "Javascript",
      longDescription: "This is my Portfolio",   
      image: "/images/portfolio.gif",
      github: "https://github.com/PhilipVTN/My-Portfolio"
    },
        {
      title: "My Portfolio",
      shortDescription: "Javascript",
      longDescription: "This is my Portfolio",   
      image: "/images/portfolio.gif",
      github: "https://github.com/PhilipVTN/My-Portfolio"
    },
        {
      title: "My Portfolio",
      shortDescription: "Javascript",
      longDescription: "This is my Portfolio",   
      image: "/images/portfolio.gif",
      github: "https://github.com/PhilipVTN/My-Portfolio"
    },
        {
      title: "My Portfolio",
      shortDescription: "Javascript",
      longDescription: "This is my Portfolio",   
      image: "/images/portfolio.gif",
      github: "https://github.com/PhilipVTN/My-Portfolio"
    },
  ];

  return (
    <section className="projects-section-wrapper">
      <h2 className="projects-header"> My Projects</h2>
      <div className="projects-grid">
        {projectList.map((p, i) => (
          <div
            key={i}
            className="project-card"
            onClick={() => setSelectedProject(p)}
            style={{ cursor: "pointer" }}
          >
            <h3>{p.title}</h3>
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "1rem"
                }}
              />
            )}
            <p>{p.shortDescription}</p> 
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProject.title}</h2>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "1rem"
                }}
              />
            )}
            <p>{selectedProject.longDescription}</p> {}

            {}
            <div className="modal-actions">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="close-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
