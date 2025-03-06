import React from "react";
import "react-bootstrap";
import "bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function Projects()
{
    return (
        <>
        <div id="projects">
            <div className="projects-bg">
                <h1 className="projects-heading">Projects</h1>
                <p className="projects-description">Here are some of the projects that i have built. Feel free to explore more about these projects and other projects in my github repositories </p> 
                <div className="d-flex justify-content-center" style={{marginTop:"40px"}}>
                     <a href="https://github.com/praveen3225?tab=repositories"><Button variant="primary"><i className="bi bi-github"></i> - Repositories</Button></a>
                </div>
            <Container>
                <Row>
                    <Col className="d-flex pt-5 justify-content-center">
                        <ProjectCard title="Job Portal"    content="A demo company's job site application featuring a landing page, job area, advanced job-info screen, and form section. This application allows users to apply for various jobs, access additional information regarding the jobs, and also store basic user information, who applies for the job."
                        link="https://github.com/praveen3225/job_portal" src="./job_portal.png"></ProjectCard>
                    </Col>
                    <Col className="d-flex pt-5 justify-content-center">
                        <ProjectCard title="Nexy Shopping App" content="This repository features my personal portfolio website, showcasing my skills, projects, and artistic pursuits. Built with React and styled using Bootstrap, it offers a modern, responsive design with engaging interactive elements." link="https://github.com/praveen3225/Nexzy" src="./shopping.png">
                        </ProjectCard>
                    </Col>
                    <Col className="d-flex pt-5 justify-content-center">
                        <ProjectCard title="Postera - Social Media App" content="Postera is a social media platform fostering collaboration and creative expression among artists, similar to Instagram, allowing them to showcase their work and engage in business opportunities." link="https://github.com/praveen3225/Postera" src="./postera.png">
                        </ProjectCard>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
        </>
    );
}

export default Projects;