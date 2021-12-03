import React from "react";
import './pages.css';
import { Container, Row } from "react-bootstrap";

function About(){
    return (
          <Container className="text-light">
            <h1 className="text-center mb-3">Who I am</h1>
            <Row>
              <p>I am a recent college graduate from Arizona State University. During college, I worked on developing AR apps using Unity. 
              In addition, I began to specialize in web development and design.
              </p>
            </Row>
            <Row>
              
            </Row>
          </Container>
    );
}

export default About;