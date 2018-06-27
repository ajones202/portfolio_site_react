import React, { Component } from 'react';
import ProjectList from './ProjectList';
import App from '../App'
;
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

class Projectsbar extends Component  {
constructor(props) {
    super(props)
    this.state = {
      moreInfo: 'false'
    }

    this.projectsToggle = this.projectsToggle.bind(this)


  }

projectsToggle() {

if (this.state.moreInfo === false ) {
   this.setState({ moreInfo: true})
    console.log(this.state.moreInfo)
}

else {
  this.setState({ moreInfo: false})
  console.log(this.state.moreInfo)
}
}



render() {
  const allProjects = ProjectList.map((projects,i) => {

    if (this.state.moreInfo === false ) {

      return (
          <div key={i} className="tile is-child box is-3">
              <figure className="image is-1by1">
              <a href={projects.url}><img alt="" src={projects.image_url}/></a>
              </figure>
              <span className="icon"
              onClick={this.projectsToggle}>

          <i className= "fas fa-toolbox"></i></span>

          </div>

      )
    } else {
        return (
         <div key={i} className="tile is-child box is-3">
         <figure className="card-container ">
         <div className="card">
    <div className="side"><img src={projects.image_url}/> alt=""></div>
    <div className="side back has-text-centered desc_text">
    <h1 className="nametitle">{projects.title}</h1>
    <h1>{projects.description}</h1>
    </div>
  </div>
</figure>
<span className="icon"
onClick={this.projectsToggle}>

<i className= "fas fa-toolbox"></i></span>

          <h1>{projects.technologies_used}</h1>

          </div>
          )
}
    })


  return (
        <section>
         <div className="section">
          <h1 className="nametitle">Recent Work</h1>
          </div>
          <div className="tile box is-ancestor">
          {allProjects}
        </div>

        </section>
      )
    }
}
export default Projectsbar;
