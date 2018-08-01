import React from 'react';

function Contact() {

return(
   <section>
      <div className="section">
          <h1 className="nametitle">Contact</h1></div>
        <div className="container">
          <form action="https://formspree.io/aj5@gwu.edu" method="POST">
              <div className="field">
                  <label className="label ">Email</label>
              </div>
              <div className="field">
                  <div className="control has-icons-left has-icons-right">
                      <input className="input is-medium" type="email" placeholder="Email Address" />
                      <span className="icon is-medium is-left">
                          <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-medium is-right">
                          <i className="fas fa-check"></i>
                      </span>
                  </div>
              </div>
              <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                      <textarea className="textarea" placeholder="Message"></textarea>
                  </div>
              </div>
              <div className="control">
                  <button className="button is-link is-notification is-pulled-right">Submit</button>
              </div>
          </form>
      </div>
  </section>
  )

}
export default Contact;
