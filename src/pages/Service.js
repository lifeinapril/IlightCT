import React from 'react';
import BookButton from '../components/Buttons/BookButton';
import Feature from '../components/Sections/Feature';
import MoreButton from '../components/Buttons/MoreButton';
import Box from '../components/Items/Box';
import {  Row,Col, Container } from 'react-bootstrap';
import Title from '../components/Sections/Title';
import { useLocation } from "react-router-dom";
import ilightct from "../App.json";

function Service(){
    const location = useLocation();
    console.log(location);
    const service = location.state;
    console.log("service:");
    console.log(service);
        return (
            <>
  <br/>
  <br/>
          <Title name={service.title} bg="bg-tint" variant="light" image={service.image} />
            {service ? 
            <Container>
              <Row>


                <Col lg={9} md={9} sm={12}>
                  <Container>
                  <Box bg="bg-light" variant="dark" image={service.image} title={service.title} body={service.body} sub={  
                    <Feature
                align="text-center"
                bg="bg-light"
                variant="dark"
                items={
                  service.sub ?
                      service.sub.filter((item, idx) => idx < 3).map(function(item,index){
                        return (
                        <Box bg="bg-light" key={index} variant="dark" title={item.title} body={item.body}/>
                          )
                        }):null
                }
                />
                  }/>
                  </Container>
                </Col>



                <Col lg={3} md={3} sm={12}>
                  <br/>
                  <h4 className='text-teal'>Others services</h4>
                  {ilightct.services.sort( () => Math.random() - 0.5).filter((item, idx) => idx < 3).map(function(s,i){
                  return <Box bg="bg-light" variant="dark" body={s.body ? s.body.substr(0, 80):null} title={s.title} button={<MoreButton path={{to:"/service",state:s}} name="see more"/>}/>
                  })}
                </Col>


              </Row>
             </Container>:null
            }
            <br/>
            <br/>
              <Title bg="bg-light" variant="dark" name="So, What are you waiting for?" button={<BookButton/>} />
            </>
        );
}




export default Service;
