import React from 'react';
import Brief from '../components/Sections/Brief';
import ActionButton from '../components/Buttons/ActionButton';
import ilightct from "../App.json";
class Services extends React.Component {
  render() {
  
    return (
          <>
            <Brief align="text-left" full={false} dark={false} data={ilightct.contents[0]} set="first" button={<ActionButton name="See more"/>} image={ilightct.contents[0].image}/>
         </>
);
    }
}

export default Services;
