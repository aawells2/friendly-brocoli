import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Contact(){
    return(
        <div>
        <Container className="text-light">
            <h1 className="text-center pt-4 text-light">Get in Touch</h1>

            <Form className="mt-5">
                <Row className="mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    </div>
                </Row>

                <div class="form-group" className="mb-3">
                    <label for="Textarea">Your Message</label>
                    <textarea class="form-control" id="Textarea" rows="3" placeholder="Enter your message"></textarea>
                </div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
        </div>
        );
}

export default Contact;