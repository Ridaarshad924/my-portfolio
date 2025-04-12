import React from 'react'
import Heading from '../Reuseable/Heading'
import './style.css'
import Buttoncomp from '../Reuseable/Buttoncomp'
import Skills from '../Reuseable/Skills'
import Education from '../Reuseable/Education'

const About = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/RIDA REACT JS.pdf";
    link.download = "Rida_CV.pdf";
    document.body.appendChild = (link);
    link.click();
    document.body.removeChild = (link);
  }
  return (
    <>
      <Heading heading="About Me" />
      {/* <p className="content">Passionate and detail-oriented Frontend Developer with over a year of hands-on experience building dynamic and responsive web applications using React.js. Adept at utilizing modern frontend technologies like JavaScript, HTML5, CSS3, and Context API to create seamless, user-friendly interfaces. Skilled in implementing React hooks, state management, and component-based architecture to ensure scalable and maintainable code. Strong focus on optimizing performance and enhancing user experience through efficient coding practices and cross-browser compatibility. Enthusiastic about continuously learning new tools and techniques to stay ahead in the fast-evolving tech landscape.</p> */}
      <p className="content">Junior MERN Stack Developer with hands-on experience in building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js. Proficient in developing full-stack applications, creating RESTful APIs, and integrating authentication systems. Familiar with front-end technologies like HTML5, CSS3, JavaScript (ES6+), and Bootstrap. Enthusiastic about problem-solving and eager to contribute to a collaborative team environment.</p>
      <Buttoncomp buttonValue="Download Resume" onClick={handleClick} />
      <div className="aboutsection">
        <Skills/>
        <Education/>
      </div>
    </>
  )
}

export default About
