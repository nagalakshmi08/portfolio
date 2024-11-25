import React from 'react';
import { useTheme } from '../../themeContext.jsx';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoSunny, IoMoon } from "react-icons/io5";

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 right-0 left-0 z-10 p-4 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-2xl font-bold">&lt;N /&gt;</span>
                </div>
                <div className="hidden md:flex md:items-center space-x-4">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <div className='flex pl-5 gap-4'> {/* Increased ml-4 and gap-4 */}
                        <button onClick={toggleTheme}>{isDarkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}</button>
                        <a href='https://drive.google.com/file/d/1yOw9yTrhesP8QSq49IpXU6AGRzTHlii4/view?usp=sharing' target='_blank'>
                            <button className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>My Resume</button>
                        </a>
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col gap-3 p-2">
                    <hr />
                    <a href="#about" className="block px-2 py-1">About</a>
                    <a href="#projects" className="block px-2 py-1">Projects</a>
                    <a href="#contact" className="block px-2 py-1">Contact</a>
                    <hr />
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <p>Switch Theme</p>
                            <button onClick={toggleTheme}>{isDarkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}</button>
                        </div>
                        <a className={`text-center px-4 py-2 rounded-md ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}  href='https://drive.google.com/file/d/1SoDgaCv5BXu6ztfm6xnzCrUZe1AZiGDo/view?usp=sharing' target='_blank'>
                            <button>My Resume</button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
