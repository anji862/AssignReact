import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import "./screen2.css"

const Details=(props)=>{

    
    const show=props.location.state
    console.log(show)
    return (
      <div className="container">
        <div className="details">
           <div className="main">   
          <img src={show.image.original} alt="1" style={{ width: 300}} />
          <Link className="bttnn" to={{pathname: "/form", state: show.name }}
            > Book Now</Link>
            </div>  
              <div className="info">
                <h1>{show.name}</h1>
                <h2 >Rating:{show.rating.average}/10</h2>
                <h2 >Type :{show.type}</h2>
               <div> {ReactHtmlParser(show.summary)} </div>
            </div>
                
      </div>
      </div>
            
    )
}

export default Details