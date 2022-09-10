import React from 'react';
import HeadBar from './components/Bars/HeadBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Workshop from './pages/Workshop';
import Service from './pages/Service';
import Foot from './components/Bars/Foot';
import WebFont from 'webfontloader';
import json from "./Config";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif','/Quicksand']
  }
});


class App extends React.Component {
  constructor(props) {
    super();
  this.state = json;

  }
  render() {
    return (
  <Router>
      <HeadBar dark={false} icon={this.state.icon} headerLinks={
        [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Portfolio', path: '/workshops' },
        { title: 'services', path: '/services',drop:this.state.services}
        ]
      } 
      contacts={this.state.contacts}/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/workshops' element={<Workshop/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/service' component={Service} element={<Service/>} />
      </Routes>
      <Foot 
        bg="bg-darker light"
        name={this.state.name}
        icon={this.state.icon}
        address={this.state.address}
        footLinks={
                    [
                    { title: 'Home', path: '/' },
                    { title: 'About', path: '/about' },
                    { title: 'Portfolio', path: '/workshops' }
                    ]
                  } 
        services={this.state.services}
        contacts={this.state.contacts}
        />
  </Router>
);
    }
}

export default App;
