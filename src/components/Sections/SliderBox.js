import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../css/Slider.css";
import MoreButton from '../Buttons/MoreButton';

const Slider = function(props) {
 

return (
	<Carousel>
        {props.items ?
        props.items.map(function(item,i){
            return(
                <Carousel.Item key={i}>
                    <img
                    className="d-block w-100"
                    src={item.image}
                    />
                    <Carousel.Caption>
                        <p>{item.title}</p>
                        <h1>{item.body}</h1>
                        <br></br>
                        {item.path ? <MoreButton path={item.path}/>:null}
                    </Carousel.Caption>
                </Carousel.Item>
            )
        }):null}
    </Carousel>

    
);

};



export default Slider;
