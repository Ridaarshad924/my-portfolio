import React from 'react'
import Style from './Skill.module.css'

const Skills = () => {
    return (
        <>
            <div style={{ width: "100%" }}>
                <h1 style={{ textAlign: "center", padding: "2rem" }}>Skills</h1>
                <div className={Style.container}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                        <h4>Html</h4>
                        <span>100%</span>
                    </div>
                    <div className={Style.skill}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                        <h4>CSS</h4>
                        <span>100%</span>
                    </div>
                    <div className={Style.skill}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                        <h4>Javascript</h4>
                        <span>90%</span>
                    </div>
                    <div className={Style.skillJava}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                        <h4>React JS</h4>
                        <span>100%</span>
                    </div>
                    <div className={Style.skill}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                        <h4>Expree JS</h4>
                        <span>95%</span>
                    </div>
                    <div className={Style.skillexpress}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                        <h4>MongoDB</h4>
                        <span>100%</span>
                    </div>
                    <div className={Style.skill}></div>
                </div>
            </div>
        </>
    )
}

export default Skills
