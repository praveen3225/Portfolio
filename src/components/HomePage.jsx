import React from "react";
import Header from "./Header";
import Image from "./Image";
import Skill from "./Skill";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Footer from "./Footer";
import Resume from "./Resume";

function HomePage()
{
    return (
        <div>
            <Header></Header>
            <Image></Image>
            <Skill></Skill>
            <AboutMe></AboutMe>
            <Projects id="projects"></Projects>
            <Hobbies></Hobbies>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;