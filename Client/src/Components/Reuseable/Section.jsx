import React from 'react'
import Style from './Section.module.css'
import Profile from '../../assets/Images/Profile.jpg'
import { Button } from 'react-bootstrap'

const Section = () => {
    return (
        <>
            <div className={Style.section}>
                <div className={Style.content}>
                    <h1>Hi I am Rida</h1>
                    <h4>I am React Js And Mern Stack Developer</h4>
                    <p>Developed responsive user interfaces using React.js, HTML, CSS, and JavaScript,
                        ensuring a seamless user experience. Optimized front-end performance by building
                        reusable components and testing application functionality across platforms.
                        Debugged React components and upheld high-quality code standards to meet project
                        goals efficiently.</p>
                    <div className={Style.herobuttons}>
                        <Button onClick={() => window.location.href = '/project'} >View Projects</Button>
                        <Button onClick={() => window.location.href = '/contact'} >Contact Me</Button>
                    </div>
                </div>
                <div className={Style.image}>
                    <img src={Profile} alt="" />
                </div>
            </div>
        </>
    )
}

export default Section
