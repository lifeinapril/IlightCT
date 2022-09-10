


import React from 'react';
import {
Container
} from 'react-bootstrap';

import "../../css/Jumbo.css";

const Jumbo = (props) => {
return (
<Container fluid className='box text-center' style={{backgroundImage: `url(${props.image}`}}>
<br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
        <h1 style={{fontSize:70}}>{props.title}</h1>
        <p>
        {props.body}
        </p>
        <p>
          <br/>
                {
                props.button ? props.button:null
                }
        </p>
</Container>

);

};

export default Jumbo;
