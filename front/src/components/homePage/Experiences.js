import React from 'react';
import data from '../../data/experienceData.js';
import ExperienceCard from '../ExperienceCard.js';

function Experience() {
  return (
    <div id="experience" className="mx-auto container">
      <div className="my-8">
        <h1 className="w-72  px-4mb-4 inline border-b-4 border-[#C23B22] tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl sm:mb-4 sm:w-full">
        Experience
        </h1>
      </div> 

      {
        data.map((exp) => {
          return (
            <ExperienceCard
              key={exp.id}
              {...exp}
            />
          )
        })
      }
       
    </div>
  );
}

export default Experience;
 