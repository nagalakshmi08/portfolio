import React from 'react'
import {useTheme} from '../../themeContext'
import { FaBootstrap, FaGit, FaHtml5, FaNode, FaPython, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiJavascript, DiMysql } from 'react-icons/di';
import { TbBrandCpp } from 'react-icons/tb';

function Skills() {

    const {isDarkMode} = useTheme();

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="flex justify-center items-center">
        <div className={`rounded-full w-44 h-10 md:h-12 flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
            <p className="text-center">Skills</p>
        </div>
      </div>
      <p className='text-center mt-4 text-lg'>Skills in which I am good at</p>
      <div className="flex items-center justify-center">
            <div className="p-5 grid grid-cols-3 md:grid-cols-6 gap-5 w-full max-w-5xl">
            <div className="flex flex-col justify-center items-center">
                <FaReact size={50} className='text-cyan-500 hover:text-cyan-700' />
                <p>React.js</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaHtml5 size={50} className='text-red-600 hover:text-red-800' />
                <p>HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <RiTailwindCssFill size={50} className='text-cyan-600 hover:text-cyan-800' />
                <p>Tailwind CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <DiJavascript size={50} className='text-yellow-500 hover:text-yellow-700' />
                <p>Javascript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaBootstrap size={50} className='text-purple-600 hover:text-purple-800' />
                <p>Bootstrap</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <DiMysql size={50} className='text-cyan-700 hover:text-cyan-900' />
                <p>MySQL</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaGit size={50} className='text-orange-600 hover:text-orange-800' />
                <p>Git</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaPython size={50} className='text-blue-600 hover:text-blue-800' />
                <p>Python</p>
            </div>
            <div className="flex flex-col justify-center items-center">    
                <TbBrandCpp size={50} className='text-blue-700 hover:text-blue-900' />
                <p>C++</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaNode size={50} className='text-green-600 hover:text-green-800' />
                <p>Node.js</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
