import React, { useState } from 'react';
import ProjectItem from './projectitem'; // Ensure the import matches the file name
import projectData from '../../data/project-data'; // The path here must be correct
import * as styles from '../css/projects.module.css'; // CSS import

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // The filter function should work correctly as long as projectData is an array of objects as shown.
  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === filter);

  return (
    <section id="projects" className={styles.portfolio}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Projects</h2>
          <p>These are some of the projects that I created during my modules, hackathons and my own free time.</p>
        </div>
        <div data-aos="fade-up">
          <ul id="portfolio-flters" className={styles.portfolioFilters}>
            <li onClick={() => setFilter('all')} className={filter === 'all' ? styles.filterActive : ''}>All</li>
            <li onClick={() => setFilter('app')} className={filter === 'app' ? styles.filterActive : ''}>App</li>
            <li onClick={() => setFilter('uiux')} className={filter === 'uiux' ? styles.filterActive : ''}>UI/UX</li>
            <li onClick={() => setFilter('others')} className={filter === 'others' ? styles.filterActive : ''}>Others</li>
          </ul>
        </div>
        <div className={styles.portfolioContainer} data-aos="fade-up" data-aos-delay="100">
          {filteredProjects.map(project => (
            <ProjectItem key={project.id} project={project} /> // Pass each project as a prop
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
