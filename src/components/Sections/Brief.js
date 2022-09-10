import React from 'react';
import {
Container,
Row,
Col
} from 'react-bootstrap';
import "../../css/Brief.css";
import "../../css/Custom.scss";
import List from '../Items/List';
import { ComponentTransition, AnimationTypes } from "react-component-transition";
import { MDBRipple } from 'mdb-react-ui-kit';

class Brief extends React.Component {
    render(){
        const bg={
            backgroundImage:`url(${this.props.image}`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }
return (
   
<Container className={this.props.dark ? 'bg-dark brief':'bg-light brief'} fluid style={this.props.full ? bg:null}>
    <Container>
        <Row className={this.props.align}>
            <Col  xs={12} sm={12} md={{span:6,order: this.props.set }} className={this.props.dark ? 'bg-dark  padding':'bg-light  padding'}>
                <br/><br/>
                {
                    this.props.data.title ?
                    <h1 className='text-teal'>{this.props.data.title}</h1>:null
                }
                <br/>
                <p className={this.props.dark ? 'light':'dark'}>
                {this.props.data.body}
                </p>
                {
                this.props.list ? <List items={this.props.list}/>:null
                }
                <br/>
                <p>
                {
                this.props.button ? this.props.button:null
                }
                </p>
            </Col>
            <Col  xs={12} md={6} className={this.props.border ? `${this.props.border}`:null}  style={this.props.full ? null:bg}>
            </Col>
        </Row>  
    </Container>
</Container>
);
            }

};

export default Brief;
