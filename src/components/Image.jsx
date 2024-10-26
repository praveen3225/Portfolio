import React, { useEffect, useState } from "react";
import 'bootstrap';
import 'react-bootstrap';
import { Col, Container, Row } from "react-bootstrap";

function Image() {
   
    return (
        <Container style={{marginBottom:"50px"}}>
            <Row>
                <Col md="12" lg="7" xl="7" style={{ marginTop: "40px" }}>
                    <img src="./profile.jpg" style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt="Profile" />
                </Col>
                <Col className="description-column">
                    <h2 style={{color:"white"}}>A software developer specializing in creating efficient, scalable solutions. Explore my work and skills here, and see how I approach solving complex technical challenges</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Image;
