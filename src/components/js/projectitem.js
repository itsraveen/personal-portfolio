import React from 'react';
import * as styles from '../css/projectitem.module.css';
import { FaGithub, FaLink } from 'react-icons/fa'; // Importing FontAwesome icons

const ProjectItem = ({ project }) => {
  const imagePath = require(`./../../images/${project.image}`);

  return (
    <div className={styles.portfolioItem}>
      <div className={styles.portfolioWrap}>
        <img src={imagePath.default || imagePath} alt={project.title} className={styles.imgFluid} />
        <div className={styles.projectDescription}>
          <div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <h4 className={styles.projectSubTitle}>{project.technologies}</h4>
            <p className={styles.projectPara}>{project.description}</p>
          </div>
          <div className={styles.projectLinks}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <FaGithub /> {/* Using FontAwesome GitHub icon */}
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <FaLink /> {/* Using FontAwesome Link icon */}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
