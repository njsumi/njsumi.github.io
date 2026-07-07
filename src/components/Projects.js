import React from 'react';
import './Projects.css';

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <h1 className="projects">Projects</h1>
      
      <div className="project-images">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            
            {/* Project Image */}
            <img src={project.image} alt={project.title} />
            
            {/* Project Details under the image */}
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              
              <div className="project-buttons">
                {project.github && (
                  <a className="project-button" href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.report && (
                  <a className="project-button" href={project.report} target="_blank" rel="noopener noreferrer">
                    Report
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

// export default function Projects({ projects, setSelectedProject }) {
//   return (
//     <section id="projects">
//       <h1 className="projects">Projects</h1>
//       <div className="project-images">
//         {projects.map((project, index) => (
//           <div
//             className="project-item"
//             key={index}
//             onClick={() => setSelectedProject(project)}
//             style={{ cursor: 'pointer' }}
//           >
//             <img src={project.image} alt={project.title} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }