import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/about.scss"
import Home from "../components/sharedComponents/Home"
import profile from "../images/unnamed-removebg-preview.png"

const About = () => {
  return (
    <>
    <Home heading={"About Me"} profile={profile}/>
    <div className='about'>
      <p>I'm Full Stack Web Developer The crossover between design and programming has always been of interest to me, I've been lucky enough to work alongside some talented teams on a number of high profile websites. I have a wide range of skills that include back-end development using open source technologies (NodeJs, Python), design (working closely with designers), front-end development (React, ReactJs, HTML5, CSS3, Javascript, Responsive, UX),database(MongoDB,Mysql)</p>
      <FontAwesomeIcon icon="fa-brands fa-facebook" />
    </div>
    </>
    )
}

export default About