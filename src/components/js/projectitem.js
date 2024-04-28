import React from 'react';
import * as styles from '../css/projectitem.module.css'; // CSS import

const ProjectItem = ({ project }) => {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.portfolioWrap}>
        <img src={project.image} alt={project.title} className={styles.imgFluid} />
        <div className={styles.projectDescription}>
          <div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <h4 className={styles.projectSubTitle}>{project.technologies}</h4>
            <p className={styles.projectPara}>{project.description}</p>
          </div>
          <div className={styles.projectLinks}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <i className="bx bxl-github"></i>
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <i className="bx bx-link"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
