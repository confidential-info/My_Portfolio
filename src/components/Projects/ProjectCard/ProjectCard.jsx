import React from 'react';

//CSS Import
import "./ProjectCard.css";

function ProjectCard({details}) {
  return (
    <a href={details.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card">
          <h6>{details.title}</h6>
          <ul>
              { details.description.map((item) => (
                  <li key={item}>{item}</li>
              ))}
          </ul>
      </div>
    </a>
  )
}

export default ProjectCard;