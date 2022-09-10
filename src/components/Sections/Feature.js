


import React from 'react';
import {
Container,
Row,Col
} from 'react-bootstrap';
import "../../css/Feature.css";
import "../../css/Custom.scss";
import { CSSTransition } from 'react-transition-group' // ES6

import "../../css/Animation.css";



const Feature = (props) => {
return (
    <div className={props.bg}>
    <Container fluid>
            <div className='text-center' style={{maxWidth:700,margin:"auto"}}>
                <br/><br/>
                <h1 className={props.variant}>{props.title}</h1>
                <h3 className={props.variant}>{props.body}</h3>
            </div>

            <Row className="justify-content-md-center">
                    {props.items ? 
                    props.items.map(function(item,index){
                        return(
                              <CSSTransition key={index} in={true}
                                classNames="fade"
                                timeout={500}>
                                <Col key={index} xs={12} md={3}>
                                    {item}
                                </Col>
                                </CSSTransition>
                        )
                    }):null}
            </Row>


            <br/>

            <div className='text-center'>
                {
                props.button ? props.button:null
                }
            </div>

        <br/>
        </Container>
    </div>
);
};

export default Feature;
