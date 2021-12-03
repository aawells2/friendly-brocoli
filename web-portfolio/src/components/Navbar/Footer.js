import React from "react";
import { Container, Nav } from 'react-bootstrap';
function Footer(){


    return(
        <Container className="fixed-bottom">
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="https://www.linkedin.com/in/ariana-wells-08a57a206/"><i class="bi bi-linkedin text-primary"></i></Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="link-1"><i class="bi bi-twitter text-primary"></i></Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="link-2"><i class="bi bi-facebook"></i></Nav.Link>
                </Nav.Item>
            </Nav>
      </Container>
    );
}

export default Footer;