import React from 'react';
import ExperienceCard from './experiencecard';

function ExperienceSection({ title, experiences }) {
  return (
    <div className="experienceSection">
      <h2>{title}</h2>
      {experiences.map(exp => (
        <ExperienceCard 
          key={exp.id} 
          title={exp.title} 
          duration={exp.duration} 
          description={exp.description}
          subDescription={exp.subDescription}
          responsibilities={exp.responsibilities}
        />
      ))}
    </div>
  );
}

export default ExperienceSection;
