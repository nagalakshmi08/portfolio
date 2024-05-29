import React, { useState } from 'react'
import {useTheme} from '../../themeContext'
import { MdOutlineMail , MdOutlinePhone , MdContentCopy } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {

  const {isDarkMode} = useTheme();
  const phone = '9177042111';
  const mail = 'lakshmireddydwarampudi436@gmail.com';

  const [copyNotification, setCopyNotification] = useState(null);

  const handleCopyClick = (data) => {
    navigator.clipboard.writeText(data)
      .then(() => {
        console.log('Copied to clipboard:', data);
        setCopyNotification('Copied to clipboard');
        setTimeout(() => {
          setCopyNotification(null);
        }, 3000); // Hide notification after 3 seconds
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
        setCopyNotification('Error copying to clipboard');
        setTimeout(() => {
          setCopyNotification(null);
        }, 3000); // Hide notification after 3 seconds
      });
  };

  return (
    <div id='contact' className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className='flex justify-center items-center'>
        <div className={`rounded-full w-44 h-12 flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
          <p className='text-center'>Get in touch</p>
        </div>
      </div>
      <p className='text-center mt-4 text-sm md:text-lg'>Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
      <div className='flex flex-col items-center justify-center gap-3 mt-3'>
        <div className='flex items-center justify-between gap-1'>
          <MdOutlineMail size={20} />
          <p className='text-xs md:text-xl font-bold'>{mail}</p>
          <MdContentCopy size={20} className='cursor-pointer ml-2' onClick={() => handleCopyClick(mail)} />
        </div>
        <div className='flex items-center justify-between gap-1'>
          <MdOutlinePhone size={20} />
          <p className='text-xs md:text-xl font-bold'>{phone}</p>
          <MdContentCopy size={20} className='cursor-pointer ml-2' onClick={() => handleCopyClick(phone)} />
        </div>
        {copyNotification && (
          <div className="bg-green-200 text-green-800 p-2 rounded-md mt-2">
            {copyNotification}
          </div>
        )}
      </div>
      <p className='text-center text-xs md:text-sm mt-3 font-extralight'>You may also find me on these platforms!</p>
      <div className='flex flex-row gap-2 items-center justify-center mt-2'>
          <a href='https://github.com/nagalakshmi08' target='_blank'>
            <FaGithub className='cursor-pointer' size={20} />
          </a>
          <a href='https://www.linkedin.com/in/naga-kanaka-lakshmi-dwarampudi/' target='_blank'>
            <FaLinkedin className='cursor-pointer' size={20} />
          </a>
          <a href='https://twitter.com/naga_lakshmi08' target='_blank'>
            <FaTwitter className='cursor-pointer' size={20} />
          </a>
      </div>
    </div>
  )
}

export default Contact
