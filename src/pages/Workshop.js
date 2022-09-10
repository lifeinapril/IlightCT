import React from 'react';
import Showcase from '../components/Sections/Showcase';
import Title from '../components/Sections/Title';
import ilightct from "../App.json";
import FigureItem from '../components/Items/FigureItem';

class Workshop extends React.Component {
  
  render() {
        return (
          <> 

        <br/>

        <br/>
        <br/>
          <Title name="Portfolio" body="some of our works from our well served clients" bg="bg-dark" variant="light" align="center" />
          <Showcase bg="bg-dark" items={
            ilightct.works.map(function(item,index){
              return (
                <FigureItem key={index} image={item.image} />
              )
             })
          } />
          </>
        );
    }

}

export default Workshop;
