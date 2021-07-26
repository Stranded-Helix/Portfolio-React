import React, { useEffect, useState } from 'react';
import './style.css'
import { Card, Row, Col } from 'react-bootstrap';


export default function ProjectRight({ project }) {

    return (
        <Row className="margin-10 flex-stretch">
            <Col className="full-height no-padding">
                <Card className="blue-gradient full-height">
                    <Card.Body className="color-neutral card-content full-height">
                        <h5>{project.title}</h5>
                        <p>{project.description}</p>
                    </Card.Body>
                    <Card.Body className="space-around blue-gradient full-height" >
                        <a className="card-link" href={project.deployedLink}>Deployed App</a>
                        <a className="card-link" href={project.githubLink}>Github</a>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="no-padding">
                <Card>
                    <Card.Img src={project.image} />

                </Card>
            </Col>
        </Row>
    )
}