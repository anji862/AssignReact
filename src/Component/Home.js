import React, { useState } from 'react';
import Cards from './Card';
import {useEffect} from "react";
import './Card.css'




const Movie=()=>{
    const [movie,setMovie]=useState([])
    const fetchData = () => {
        return fetch("https://api.tvmaze.com/search/shows?q=all")
              .then((response) => response.json())
            .then((data) => setMovie(data))
    }
    
    useEffect(() =>
    {
        fetchData();
        }, []);
              
                
    return (
        <div className="frame">
        <section className="whole">
        <h1 >Recommended Movies</h1>
        <div className="card-main">
            {
                movie.map((item)=>{
                    const {show}=item;
                    return <Cards show={show}/>
                })
            }
        </div>
        </section>
        </div>
    )
}

export default Movie;