// src/components/ProjectCard.jsx

import React from 'react';
import {FaExternalLinkAlt} from 'react-icons/fa'

function ProjectCard({ project, isDarkMode, reverse }) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} justify-between items-center shadow-lg border border-gray-300`}>
      <div className={`p-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <img src={project.image} alt='' className='md:w-[20vw] md:h-[30vh]' />
      </div>
      <div className='p-4 flex flex-col gap-3 md:w-[50vw]'>
        <h1 className='font-bold text-xl'>{project.title}</h1>
        <p>{project.description}</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {project.skills.map((skill, index) => (
            <div key={index} className='flex justify-center items-center'>
              <div className={`rounded-full w-28 h-8 flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                <p className='text-center text-sm'>{skill}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex gap-1 items-center mt-2'>
            <p>Link</p>
            <a href={project.link} target='_blank'>
              <FaExternalLinkAlt />
            </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
