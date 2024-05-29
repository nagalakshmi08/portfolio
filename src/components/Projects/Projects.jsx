// src/components/Projects.jsx

import React from 'react';
import { useTheme } from '../../../themeContext';
import projectsData from './projects';
import ProjectCard from './ProjectCard';

function Projects() {
  const { isDarkMode } = useTheme();

  return (
    <div id='projects' className={`p-4 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='flex justify-center items-center'>
        <div className={`rounded-full w-44 h-12 flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
          <p className='text-center'>Projects</p>
        </div>
      </div>
      <p className='text-center mt-4 text-lg'>Projects I have done</p>
      <div className='flex flex-col items-center justify-center mt-5'>
        <div className='w-full max-w-screen-lg space-y-6'>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} isDarkMode={isDarkMode} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
