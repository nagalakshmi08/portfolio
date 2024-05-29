import { useTheme } from '../themeContext'
import Navbar from './components/Navbar'
import Hero from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact'
import CopyRight from './components/CopyRight'
import Coding from './components/Coding.jsx'
import BackToTopArrow from './components/BackToTopArrow.jsx'

function App() {

  const {isDarkMode} = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar />
      <BackToTopArrow />
      <Hero />
      <Skills />
      <Coding />
      <Experience />
      <Projects />
      <Contact />
      <CopyRight /> 
    </div>
  )
}

export default App
