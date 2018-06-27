import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skillsbar from './components/Skillsbar';
import Projectsbar from './components/Projectsbar';


class App extends Component {
   constructor(props) {
    super(props)



  }


  render() {

    return (
      <section className="hero is-medium">
      <Nav />
      <Hero />
      <Projectsbar  />
      <Skillsbar />
      <Footer />
      </section>

    );
  }
}

export default App;
