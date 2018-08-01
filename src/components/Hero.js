import React,{ Component } from 'react';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
        word: ""
    }

    this.nameToggle = this.nameToggle.bind(this)
  }

  nameToggle(word) {
    const words = ['Creative', 'Thoughtful', 'Strategic', 'Front-End', 'Analytical', 'Design-Oriented'];
    let randomItem = words[Math.floor(Math.random()*words.length)];

    this.setState({word: randomItem})
  }

render() {

return (
    <section >
     <div className="intro-box ">
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
        <h1 className="is-size-3-desktop is-size-6-mobile inner-txt"> As a web developer, my passion is cultivating meaningful user relationships. I have a solid background in ecommerce operations and have worked to develop a number of ecommerce user experiences. I continuously strive to translate my skills and knowledge into crafting captivating, seamless and intuitive interfaces in order to effectively hone into the customer story.
        </h1>
        </div>
        </div>
        </section>
)

}

}

export default Hero;
