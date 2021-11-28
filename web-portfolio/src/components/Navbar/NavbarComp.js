import React from 'react';
import {Container, Nav,Navbar,} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function NavbarComp(){
    
        return (
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="mx-auto">
                 <Nav.Link as={Link} to="/">Work</Nav.Link> 
                 <Nav.Link  as={Link} to="/about">About</Nav.Link> 
                 <Nav.Link as={Link} to="/contact">Contact</Nav.Link> 
              </Nav>
            </Container>
          </Navbar>
        );
            
      

}

export default NavbarComp;