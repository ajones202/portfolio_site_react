import React,{ Component } from 'react';
import Projectsbar from './Projectsbar';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
        word: ""
    }

    this.nameToggle = this.nameToggle.bind(this)
  }


  nameToggle(word) {
    const words = ['Creative', 'Thoughtful', 'Strategic', 'Front-End', 'Analytical'];
    let randomItem = words[Math.floor(Math.random()*words.length)];

    this.setState({word: randomItem})
  }

render() {

return (
    <section>
     <div className="intro-box">
        <div className="hero-body">
          <div className="txt">
            <h1 onMouseEnter={this.nameToggle} className="name">
            ALEX JONES
            </h1>
            <h2  className="nametitle">
            {this.state.word} Web Developer
            </h2>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container has-text-centered">
        <p className="is-size-4 inner-txt"> As a web developer, my passion is cultivating meaningful user relationships. Possessing a solid background in the e-commerce sphere, I’ve translated my skills and knowledge into crafting captivating, seamless and intuitive front-end experiences.
        </p>
        </div>
        </div>
        </section>
)

}

}

export default Hero;
