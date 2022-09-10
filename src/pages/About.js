import React from 'react';
import Brief from '../components/Sections/Brief';
import BookButton from '../components/Buttons/BookButton';
import Feature from '../components/Sections/Feature';
import ilightct from "../App.json";
import Title from '../components/Sections/Title';
import Commenter from "../components/Sections/Commenter";


class About extends React.Component {
  render() {
        return (
            <>
            <br/>
            <br/>
          <Title name="About us" bg="bg-tint" variant="light" image={ilightct.jumbos[1]} />
          <Brief align="text-left" full={false} dark={true} data={ilightct.about[2]} set="last" image={ilightct.about[3].image}/>
            <Feature
                align="text-center"
                title={ilightct.about[3].title} 
                body={ilightct.about[3].body} 
                bg="bg-grey"
                variant="dark"/>
            <Brief align="text-left" border="custom-border full" full={false} dark={false} data={ilightct.about[3]} set="last" image={ilightct.about[2].image}/>
            <Commenter items={ilightct.clients} />
          
            <Title bg="bg-light" variant="dark" name="So, What are you waiting for?" button={<BookButton/>} />
            </>
        );
    }

}




export default About;
