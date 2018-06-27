import React from 'react';
import ProjectList from './ProjectList';



function Projectcard(props) {
console.log()

return (
    <section>
          <div className="tile is-parent">
          <div className="tile is-child box is-3">

              <figure className="image is-1by1 ">
              <a href={ProjectList.url}><img className="prod" src={ProjectList[0].image_url}/></a>
              </figure>
          </div>


          </div>


    </section>

  )
}
export default Projectcard;
