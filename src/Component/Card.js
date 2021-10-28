import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Cards=({show})=>{
    console.log({show})
    return( <>
                <div className="cardinner">
                <img src={show.image.original} alt="1" />
                <span>
                <h2>{show.name}</h2>
                 </span>
                <h4 className="rating" style={{marginRight:5}}>Rating-{show.rating.average}/10</h4>
                <Link className="bttnn" to={{ pathname: "/screen2",state: show  }}> Details</Link>
                 </div>   
            </>
    )
}

export default Cards;

