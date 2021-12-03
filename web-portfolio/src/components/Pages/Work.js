import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Projects from "../UI/Projects";

function Work(){
    return (
        <div className= "bg-dark">
        <Container className= "py-5 text-light ">
           
                <Row>
                    <div className="col-sm-12 col-md-6 col-lg-8">
                        <Col>
                            <h3 className="text-light display-3">Hi, I'm Ariana, a front-end developer and Illustrator enthusiast.</h3>
                            <p>I create out of this world web and mobile applications, and create digital artwork. Below are some of my recent projects. <i class="bi bi-arrow-down text-primary"></i> </p>
                        </Col>
                    </div>
                    <Col  className=" .d-sm-none .d-md-block"></Col>
                </Row>
            
            <Row className= "mt-5">
                <h3 className= "text-primary">Projects</h3>
            </Row>
            <hr className= "text-light"/>
            <Projects title="Dreamscape Mobile" text="Avatar driven immersive learning"/>
            <Projects title="Women in Computer Science" text="Website redesign using React.js"/>
            <Projects title="Desert Lotus Spa" text="Website branding and redesign"/>
    
            

        </Container>
        </div>
    );
}

export default Work;