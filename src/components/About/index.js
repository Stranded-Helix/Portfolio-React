import React, { useEffect, useState } from 'react';
import photo from '../../assets/Portfolio.jpg';
import './style.css'
import {Row , Col, Card, CardImg} from 'react-bootstrap';
import resume from "../../assets/G.Fite Resume - 2021.pdf"


export default function About() {

  const spanner = {span: 4, offset:4}

    return (
        <Row>
          <Col xs={spanner} s={spanner} m={spanner} l={spanner} xl={spanner}>
            <Card className="blue-gradient">
              <Card.Img src={photo}/>
              <Card.Body className="color-neutral">
              <Card.Title className="color-neutral card-title-location">Garrett Fite</Card.Title>
                <p>My name is Garrett. I started to program about 3 years ago by reading, watching videos and trial and
                  error. I'm currently studying full stack development through SMU's Boot Camp. Though I have
                  made small programs for family and friends in the past, I am looking to progess into a career in
                  software development. In my free time, I enjoy spending time with my German Shepherd, Ava, playing all
                  kinds of video games, and flying planes.</p>
              </Card.Body>
              <div className="card-link blue-gradient">
                <a className="card-link" href={resume} download>Resume</a>
              </div>
            </Card>
          </Col>
        </Row>
            )
        }