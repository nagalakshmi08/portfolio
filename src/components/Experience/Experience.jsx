import React from 'react';
import { useTheme } from '../../../themeContext';
import ExperienceCard from './ExperienceCard';
import experiences from './experiences'

function Experience() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className='flex justify-center items-center'>
        <div className={`rounded-full w-44 h-12 flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
          <p className='text-center'>Experience</p>
        </div>
      </div>
      <p className='text-center mt-4 text-lg'>Here's a quick summary of my work experiences</p>
      <div className='flex flex-col items-center justify-center mt-5'>
        <div className='w-full max-w-screen-lg'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
