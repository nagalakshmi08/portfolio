import React from 'react'
import { useTheme } from '../../themeContext'
import { CiLocationOn } from 'react-icons/ci';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from '../images/Working_girl.png'

function Hero() {

  const {isDarkMode} = useTheme();

  return (
    <div id='about' className={`p-4 mt-16 flex flex-col-reverse md:flex-row items-center justify-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='p-3 flex flex-col gap-5'>
        <h1 className='text-3xl font-bold'>Hi , I am Naga Kanaka Lakshmi &#128075;</h1>
        <p className='md:w-[50vw]'>
          An ambitious Full Stack Developer with a passion of continous learning and innovation.
          Pre-final year student @VIIT.
          I like problem solving and developing web pages.
        </p>
        <div className='flex flex-row gap-1 items-center'>
          <CiLocationOn />
          <p>Visakhapatnam , India</p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
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
      <div>
        <img 
          src={Image}
          alt=''
          className='md:w-[30vw] md:h-[60vh]'
        />
      </div>
    </div>
  )
}

export default Hero
