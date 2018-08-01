import React, { Component } from 'react';


class Technologies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.projectsToggle = this.projectsToggle.bind(this);
  }

  projectsToggle() {
  let show = !this.state.show;
  this.setState({show})

}

  render(){
    return(
      <div>
        <span className="icon"
              onClick={this.projectsToggle}>
          <i className= "fas fa-toolbox"></i></span>
         {this.state.show &&
         <h1>{this.props.technologies_used}</h1>}
      </div>

    )
  }

}

export default Technologies;
