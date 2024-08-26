import React from 'react'
import {useTheme} from '../../themeContext'
import { SiCodechef , SiLeetcode , SiHackerrank , SiGeeksforgeeks } from "react-icons/si";

function Coding() {

  const {isDarkMode} = useTheme();

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-center items-center">
        <div className={`rounded-full w-44 h-10 md:h-12 flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
            <p className="text-center">Coding Profiles</p>
        </div>
      </div>
      <p className='text-center mt-4 text-lg'>Links to my coding profiles</p>
      <div className="flex items-center justify-center">
          <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-3xl">
            <div className="flex flex-col justify-center items-center">
                <a href='https://www.codechef.com/users/naga_lakshmi08' target='_blank'>
                  <SiCodechef size={50} className='text-amber-800 hover:text-amber-950 cursor-pointer' />
                </a>
                <p>Code Chef</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <a href='https://leetcode.com/u/naga_lakshmi08/' target='_blank'>
                  <SiLeetcode size={50} className='cursor-pointer text-yellow-400 hover:text-yellow-600' />
                </a>
                <p>Leetcode</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <a href='https://www.hackerrank.com/profile/naga_lakshmi08' target='_blank'>
                  <SiHackerrank size={50} className={`cursor-pointer ${isDarkMode ? 'text-green-600 hover:text-green-700' : 'text-gray-900 hover:text-black'}`} />
                </a>
                <p>Hackerrank</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <a href='https://www.geeksforgeeks.org/user/lakshmireddydwarampudi436/' target='_blank'>
                  <SiGeeksforgeeks size={50} className='cursor-pointer text-green-700 hover:text-green-900' />
                </a>
                <p>Geeks for Geeks</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Coding
