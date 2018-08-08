import React, { Component } from 'react';
import ProjectList from './ProjectList';
import Technologies from './Technologies';
import $ from 'jquery';

class Projectsbar extends Component  {
constructor(props) {
    super(props)
    this.state = {
      moreInfo: false
    }

  }

render() {
  const allProjects = ProjectList.map((projects,i) => {

      return (
          <div key={i} className="tile is-child box is-3">
              <figure className="card-container ">
                  <div className="card">
                     <div className="side"><img src={projects.image_url} alt="project"/></div>
                        <div className="side back has-text-centered desc_text">
                        <h1 className="nametitle">{projects.title}</h1>
                        <a href={projects.url}><h1>{projects.description}</h1></a>
                    </div>
                  </div>
              </figure>
              <Technologies technologies_used={projects.technologies_used} />
          </div>
      )
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
