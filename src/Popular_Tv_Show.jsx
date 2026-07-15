import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';

function Popular_Tv_Show() {

    const [tvShow, setTvShow] = useState([]);

    const tvShows = async() =>{
        try{
            const res = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=08e4c6acd659c7d1540df289e379bccd&sort_by=popularity.desc&first_air_date.gte=2026-01-01");
            const json = await res.json();
            console.log(json);
            setTvShow(Array.isArray(json?.results) ? json.results : [])
        }
        catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        tvShows()
    },[])

    const imgs = (posterpath) =>{
        return `https://image.tmdb.org/t/p/original${posterpath}`
    }

    return (
        <>
        
        <div className="movie-container">
            <br/>
        <br />
        <br />
        <span>Populr TV Shows  </span>
        <br/>
        <br/>
            <div className="main-container">
                <ul className="movie-list">
                    {tvShow.map((t)=>(
                        <li key={t.id} className="movie-card" >
                            <Link to={`/specific_tv/${t.id}`}>
                            <img src={imgs(t.poster_path)} alt={t.name} />
                            <br />
                            <strong >{t.name}</strong>
                            </Link>
                    
                        </li>
                    ))}
                </ul>
                <br/>
                <br />
                <br />
            </div>
        </div>
        </>
    )
}

export default Popular_Tv_Show