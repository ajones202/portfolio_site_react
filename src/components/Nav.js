import React from 'react';
import ReactDOM from 'react-dom';
import brands from '@fortawesome/fontawesome-free-brands';





function Nav(props) {
return(
    <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
              </a>
              <span className="navbar-burger burger" data-target="navbarMenuHeroA">
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
              <a href="https://github.com/ajones202" className="navbar-item">
                   <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>Github</span>
                </a>
                <a href="https://www.linkedin.com/in/alexandria-jones/" className="navbar-item">
                   <span className="icon">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  <span>Linkedin</span>
                </a>
              </div>
             </div>
          </div>
        </nav>
      </div>
  )

}
export default Nav;
