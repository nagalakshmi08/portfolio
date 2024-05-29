import Edumoon from '../../images/Edumoon.png'
import Rentease from '../../images/Rentease.png'
import Bsearch from '../../images/Bsearch.png'
import Portfolio from '../../images/Port.png'

const projectsData = [
  {
    title: 'RentEase',
    description: 'RentEase revolutionizes the rental experience by simplifying property searches through an OTP-secured platform.As a front-end developer, I crafted a user-friendly, mobile-responsive design using HTML, CSS, JavaScript, and the Bootstrap framework',
    skills: ['HTML', 'CSS', 'Javacript', 'Django', 'SQLite', 'Bootstrap'],
    image: Rentease,
    link: ' https://rentease.onrender.com',
  },
  {
    title: 'BSearch',
    description: 'BSearch is a books searching platform built using open library api. All the important details of the searched book like author name, published date,etc are displayed.',
    skills: ['React.js', 'Open Library API'],
    image: Bsearch,
    link: 'https://github.com/nagalakshmi08/bsearch',
  },
  {
    title: 'EM Clubs',
    description: 'This is the clubs page of EduMoon official website which was built during my internship.',
    skills: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    image: Edumoon,
    link : 'https://horusknox.github.io/EMWebsite/indexteam3.html',
  },
  {
    title: 'My Portfolio',
    description: 'A personal portfolio to showcase the professional side of me.',
    skills: ['React.js', 'Tailwind CSS'],
    image: Portfolio,
    link: 'https://github.com/nagalakshmi08/portfolio',
  },
  // Add more project objects here
];

export default projectsData;
