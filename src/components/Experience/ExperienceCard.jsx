import React from 'react';
import { useTheme } from '../../../themeContext';

function ExperienceCard({ title, role, description, date, link }) {

  const { isDarkMode } = useTheme();

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 items-start justify-between shadow-md rounded-md px-4 py-5 mb-5 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <h1 className='flex items-center font-bold text-xl'>{title}</h1>
      <div className='flex flex-col items-center'>
        <div>
          <h2 className='text-lg font-medium'>{role}</h2>
          <ul className='list-disc mt-1 p-3 font-light'>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {link && (
              <li className='underline'>
                <a href={link}>Project Link</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-end italic'>{date}</div>
    </div>
  );
}

export default ExperienceCard;
