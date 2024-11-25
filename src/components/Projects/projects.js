import Edumoon from '../../images/Edumoon.png'
import Rentease from '../../images/Rentease.png'
import Bsearch from '../../images/Bsearch.png'
import Portfolio from '../../images/Port.png'
import Movie from '../../images/Movie.png'

const projectsData = [
  {
    title: 'Movie Search Web Application',
    description: 'A web application which consists of popular movies, detailed information, user authentication, favorites management, and theme toggling.',
    skills: ['ReactJs', 'NodeJs', 'ExpressJs', 'MongoDb', 'Tmdb API', 'Tailwind CSS'],
    image: Movie,
    link: 'https://movie-search-web-application-frontend.onrender.com/',
  },
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
  
];

export default projectsData;
