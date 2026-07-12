import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Movies_Comp(){
    const[movie, setMovie] = useState([]);

    const movies = async() =>{
        try{
            const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=08e4c6acd659c7d1540df289e379bccd")
            const json = await res.json();
            console.log(json);
            setMovie(Array.isArray(json?.results) ? json.results : [])
        }
        catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        movies()
    },[])

    const imgs = (posterpath) =>{
        return `https://image.tmdb.org/t/p/original${posterpath}`
    }

    return(
        <>
        <div className="movie-container">
        <span>Top Movies  </span>
            <div className="main-container">
                <ul className="movie-list">
                    {movie.map((m)=>(
                        <li key={m.id} className="movie-card" >
                            <Link to={`/specific/${m.id}`}>
                            <img src={imgs(m.poster_path)} alt={m.original_title} />
                            <br />
                            <strong >{m.original_title}</strong>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Movies_Comp