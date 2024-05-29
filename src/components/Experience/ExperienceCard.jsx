import React from 'react';

function ExperienceCard({ title, role, description, date, link }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 items-start justify-between shadow-md rounded-md border-2 p-3 mb-5'>
      <h1 className='flex items-center font-bold text-xl'>{title}</h1>
      <div className='flex flex-col items-center'>
        <div>
          <h2 className='text-lg font-semibold'>{role}</h2>
          <ul className='list-disc mt-1 p-3'>
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
