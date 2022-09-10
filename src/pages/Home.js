import React from 'react';
import Jumbo from '../components/Sections/Jumbo';
import Brief from '../components/Sections/Brief';
import BookButton from '../components/Buttons/BookButton';
import Feature from '../components/Sections/Feature';
import ActionButton from '../components/Buttons/ActionButton';
import MoreButton from '../components/Buttons/MoreButton';
import Box from '../components/Items/Box';
import Quote from '../components/Sections/Quote';
import ilightct from "../App.json";
import Title from '../components/Sections/Title';
import ModalButton from '../components/Buttons/ModalButton';
import Commenter from '../components/Sections/Commenter';
import FigureItem from '../components/Items/FigureItem';


class Home extends React.Component {
  render() {
        return (
            <>
            <Jumbo title="Light Up Your Space" body="Interior design and services for you home and office space." image={ilightct.jumbos[2]} button={<MoreButton path="/about" />} />
                    {
            ilightct.services.slice(0,4).map(function(service,index){
            return (<Brief align={(index % 2) ? "text-left":"text-right"} full={false} dark={false} data={service} set={(index % 2) ? "first":"last"} button={<ActionButton path="/" name="Learn more"/>} image={service.image}/>)
            })
            }
              <Brief align="text-left" border="custom-border radial-repeating" full={false} dark={true} data={ilightct.contents[0]} set="first" button={<ActionButton path="/about" name="Learn more"/>} image={ilightct.contents[0].image}/>
  
            <Feature
                align="text-center"
                body="We provide the following 3D rendering services" 
                bg="bg-dark"
                variant="light"
                items={
                    ilightct.rendering.slice(0,4).map(function(item,index){
                            return (<Box bg="bg-dark" border="custom-border" variant="light" image={item.image} key={index} title={item.title} body={item.body ? item.body.substring(0,50)+"...":null} button={<ModalButton title="see more" content={item} noimage={true} />} />)
                    })
                } />
            <Brief align="text-left" full={true} dark={false} data={ilightct.contents[2]} set="last" button={<BookButton/>} image={ilightct.contents[2].image}/>
            <Feature
                align="text-center"
                body="Some of our Works" 
                bg="bg-light"
                variant="dark"
                button={<MoreButton path="/workshops" />}
                items={
                    ilightct.works.map(function(item,index){
                            return (
                                <FigureItem key={index} image={item.image} />
                            )
                    })
                } />
           
            <Quote body="'If a figure doesn't look back at you, you forget it'" by="Nathan Oliveira" />
            <Brief align="text-right" border="custom-border linear-repeating" full={false} dark={true} data={ilightct.contents[1]} set="last" image={ilightct.contents[1].image}/>
            <Title name="Don’t just take our word for it"/>
            <Commenter items={ilightct.clients} />
             <Title bg="bg-dark" variant="light" name="So, What are you waiting for?" button={<BookButton/>} />
            </>
        );
    }

}

export default Home;
