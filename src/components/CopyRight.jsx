import React from 'react'
import {useTheme} from '../../themeContext'

function CopyRight() {

    const {isDarkMode} = useTheme();

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <p className='text-center'>&copy;{(new Date().getFullYear())} | Coded with &#9829; by Naga Kanaka Lakshmi</p>
    </div>
  )
}

export default CopyRight
