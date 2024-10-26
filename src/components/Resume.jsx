import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ResumeDetails from "./ResumeDetails";
import { Container, Row, Col } from "react-bootstrap";


function Resume()
{
    return (
        <>
            <Header modify="Home" link="/"></Header>
            <Container style={{marginTop:"100px", backgroundColor:"transparent !important",height:"700px"}}>
                <Row>
                    <Col lg="6">
                        <h1 className="resume-heading">My Resume</h1>
                    </Col>
                    <Col lg="6">
                        <ResumeDetails></ResumeDetails>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Resume;