import React from "react";
import BubbleContainer from "./BubbleContainer";

function Skill()
{
    return <div className="skill-bg">
        <h1 className="skill-heading" style={{marginTop:"20px"}}>Skills</h1>
        <p className="skill-description">The Skills section of my portfolio showcases a diverse set of technical abilities and tools I have mastered, ranging from front-end and back-end development to database management and version control. This section reflects my commitment to continuous learning and hands-on experience in delivering robust and scalable solutions</p>
        <BubbleContainer></BubbleContainer>
    </div>
}

export default Skill;