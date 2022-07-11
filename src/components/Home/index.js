import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import akarsh from './Akarsh.png'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'K', 'A', 'R', 'S', 'H',' ',' ','P','A','N','D','E','Y','.']
   useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <br/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          
          </h1>
          <h2>I am a 3rd year CSE Undergraduate student at Indian Institute of Information Technology, Kottayam, Kerala. I like to solve problems through coding. </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        
        <div className="img">
          <img src={akarsh}></img>

        </div>
      </div>
      
      <Loader type="pacman" />
    </>
  )
}

export default Home