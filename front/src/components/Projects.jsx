import React from 'react';
import Project from './Project';
import data from './../data/projectsData.js';

function Projects() {
  return (
    <div id='projects' className=''>
        <div className='mx-auto container'>
            <h1 className='w-72 mb-4 tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl sm:mb-4 sm:w-full'>Few Projects</h1>
        </div>
<div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 lg:md:grid-cols-3 lg:p-12'>
{data.ProjectsData.map((project) => {
            return(<Project key={project.id}
                image={project.img}
                name={project.name}
                live={project.live}
                source={project.source}
                desc={project.description}/>)
        })}
       
</div>
       
    </div>
  );
}

export default Projects;
