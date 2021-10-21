import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Cards=({show})=>{
    console.log({show})
    return( <>
                <div className="cardinner">
                <img src={show.image.original} alt="1" />
                <header>
                <h2>{show.name}</h2>
                <h2 className="price" style={{marginRight:5}}>rating:{show.rating.average}</h2>
                </header>
                <h5>{show.type}</h5>
                <button className="btn" ><Link to={{
    pathname: "/screen2",
    state: show 
  }}
> Details</Link></button>
                 </div>   
            </>
    )
}

export default Cards;

