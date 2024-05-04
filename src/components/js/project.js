import React, { useState } from 'react';
import ProjectItem from './projectitem';
import projectData from '../../data/project-data';
import * as styles from '../css/projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === filter);

  return (
    <section id="projects" className={styles.portfolio}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Projects</h2>
          <p className={styles.subHeading}>These are some of the projects that I created during my modules, hackathons and my own free time.</p>
        </div>
        <div className={styles.filterContainer} data-aos="fade-up">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? styles.filterActive : styles.filterButton}>All</button>
          <button onClick={() => setFilter('app')} className={filter === 'app' ? styles.filterActive : styles.filterButton}>App</button>
          <button onClick={() => setFilter('uiux')} className={filter === 'uiux' ? styles.filterActive : styles.filterButton}>UI/UX</button>
          <button onClick={() => setFilter('others')} className={filter === 'others' ? styles.filterActive : styles.filterButton}>Others</button>
        </div>
        <div className={styles.portfolioContainer} data-aos="fade-up" data-aos-delay="100">
          {filteredProjects.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
