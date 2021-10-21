import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom'; 

const Details=(props)=>{
    // const location = useLocation()
    // const { show } = location.state
    
    const show=props.location.state
    console.log(show)
    return (
        <div className="details">
                <h1 style={{textAlign:"center"}}>{show.name}</h1>
                <img src={show.image.original} alt="1"  style={{width:500,margin:"auto" }}/>
                <header>
                <h2 style={{textAlign:"center"}}>Rating:{show.rating.average}</h2>
                </header>
                <h2 style={{textAlign:"center"}}>Show Type :{show.type}</h2>
                <div> { ReactHtmlParser (show.summary) } </div>
                <button className="btn" style={{float:"left"}}><Link
  to={{
    pathname: "/form",
    state: show.name // your data array of objects
  }}
> Book ticket</Link></button>
        </div> 
            
    )
}

export default Details