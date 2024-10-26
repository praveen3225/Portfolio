import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card style={{ width: '18rem' }} className="shadow-lg">
      <Card.Img className="image" variant="top" src={props.src} /> {/* 100 x 180 */}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <div className="mt-auto d-flex justify-content-center">
          <a href={props.link}><Button variant="primary"><i className="bi bi-github"></i> - {props.title}</Button></a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;