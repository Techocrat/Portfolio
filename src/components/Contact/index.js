import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faInstagram, faJava, faJsSquare, faLinkedin, faLinkedinIn, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faC, faDatabase, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className='one'>
            I am interested in internship opportunities, feel free to reach out to me for any such roles. However, if you have other message for me,
            don't hesitate to contact me using below mail button either.
          </p>
          <br/>
          <div className='wrapper'><a href="mailto:akarshpandey9599@gmail.com" >
          <FontAwesomeIcon icon={faPaperPlane} className="flat-button" /></a>
          <a href="https://www.linkedin.com/in/akarsh-pandey-238b471b0/" >
          <FontAwesomeIcon icon={faLinkedin} className="flat-button" /></a>
          <a href="https://github.com/Techocrat" >
          <FontAwesomeIcon icon={faGithub} className="flat-button" /></a>
          <a href="https://www.instagram.com/iamakarsh___/" >
          <FontAwesomeIcon icon={faInstagram} className="flat-button" /></a></div>
          
         
          
        </div>
        
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faDatabase} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faC} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGithub} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>
        
      <Loader type="pacman" />
    </>
  )
}

export default Contact
