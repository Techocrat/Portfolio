import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faInstagram,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
    <div className='big'>
    <div className='text-zone'>
    <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          </div>
          <div className='project'>
            <div className='p1'>
         <h2>
            partnersInCrime
          </h2>
          <br/>
          <h3>A web platform specially designed for IIIT-K students which aims at facilitating smooth interaction between the college-mates regarding all the collaborative projects and hackathons held on various platforms.</h3>
          <br/>
          <div className='wrapper'>
          
          <a href="https://github.com/shashank1503-cipher/partners-in-crime" >
          <FontAwesomeIcon icon={faGithub} className="flat-button" /></a>
          <a href="https://partners-in-crime.vercel.app/" >
          <FontAwesomeIcon icon={faLink} className="flat-button" /></a></div>
          </div>
          <div className='p2'>
         <h2>
           UPSIDA
          </h2>
          <br/>
          <h3>A frontend based web platform designed for UTTAR PRADESH government's state industrialization project.</h3>
          <br/>
          <div className='wrapper'>
          
          <a href="https://github.com/bhavyag54/UPSIDA" >
          <FontAwesomeIcon icon={faGithub} className="flat-button" /></a>
          <a href="https://bhavyag54.github.io/UPSIDA/" >
          <FontAwesomeIcon icon={faLink} className="flat-button" /></a></div>
          </div>
          <div className='p3'>
         <h2>
            The recipe Village
          </h2>
          <br/>
          <h3>A web platform designed during IIIT-K 's Intra-college Hackathon called HackoonaMatata. Using this platform, one can search about the recipe of dishes available across the globe.</h3>
          <br/>
          <div className='wrapper'>
          
          <a href="https://github.com/Techocrat/boot" >
          <FontAwesomeIcon icon={faGithub} className="flat-button" /></a>
          <a href="https://techocrat.github.io/boot/" >
          <FontAwesomeIcon icon={faLink} className="flat-button" /></a></div>
          </div>

      </div>
        </div>

      

<Loader type="pacman" />
</>
  )
}

export default Portfolio