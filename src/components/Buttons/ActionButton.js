import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class ActionButton extends React.Component{
  constructor(props) {
    super();
    this.state = {
        }
  }

  render(){

return (
            <>
            <Button as={Link} to={this.props.path || this.props.path.to} state={this.props.path.state ? this.props.path.state:null} variant="orange" size='lg'>{this.props.name}</Button>
            </>

);

  }

};

export default ActionButton;
