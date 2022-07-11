import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Link } from 'react-router-dom'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import python from './images/python.png'
import cpp from './images/cpp.png'
import java from './images/java.png'
import react from './images/react.png'
import django from './images/django.png'
import next from './images/next.png'
import mongo from './images/mongo.png'
import sql from './images/sql.png'
import git from './images/git.png'
import github from './images/github.png'
import heroku from './images/heroku.png'
import firebasee from './images/firebase.png'
const Skill = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    const nameArray = ['S', 'K', 'I', 'L', 'L', 'S','.']
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
                 <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
              
              </h1>
              <h2>These are the various web technologies, I am familiar with. </h2>
              
            </div>
            <div className="tech">
            
                <p className='A'>Languages</p>
                <br/>
                <div className='language'>
                <img src={cpp}></img> 
                  <img src={java}></img>  
                  <img src={html}></img>
                  <img src={css}></img>
                  <img src={js}></img>
                  <img src={python}></img>
                   </div>
                   <br/>
                <p className='B'>Frameworks</p>
                <br/>
                <div className='frameworks'>
                <img src={react}></img> 
                  <img src={django}></img>  
                  <img src={next}></img>
                  </div>
                  <br/>
                <p className='C'>Database</p>
                <br/>
                <img src={mongo}></img> 
                  <img src={sql}></img>  
                  <img src={firebasee}></img>
                  <br/>
                <p className='D'>Tools</p>
                <br/>
                <img src={git}></img> 
                  <img src={github}></img> 
                  <img src={heroku}></img> 
                
                  <br/> 
                  <br/>


            </div>

            
          </div>
          
          
          <Loader type="pacman" />
        </>
      )
}


export default Skill