import React from "react";
import { Row } from 'react-bootstrap';

function Projects(props){
    return(
        <div>
            <Row>
                    <div className="col-4"> {props.title} </div>
                    <div className="col-8 text-center"> {props.text} <i class="bi bi-arrow-right text-primary"></i> </div>
            </Row>
                    <hr className= "text-light"/>
        </div>
    );
}
export default Projects;