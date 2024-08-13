import React from 'react';

//CSS Import
import "./ProjectCard.css";

function ProjectCard({details}) {
  return (
    <div className="project-card">
        <h6>{details.title}</h6>
        <ul>
            { details.description.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ProjectCard;