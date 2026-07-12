import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Specific(){

    const { id } = useParams();
    const [movie,setMovie] = useState([]);
    const api = "08e4c6acd659c7d1540df289e379bccd";

    const movies = async() =>{
        try{
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`)
            const json = await res.json();
            console.log(json);
            setMovie(json);
        }
        catch(err){
            console.error(err);
        }
    }

        useEffect(()=>{
            movies();
        })

        const imgs = (posterpath) => {
            return `https://image.tmdb.org/t/p/original${posterpath}`
        }

    return(
        <>
        <div className="specificContainer">
            <img src={imgs(movie.poster_path)} alt={movie.original_title} />
            <h1>{movie.original_title}</h1>
            <h2>Release Date : {movie.release_date}</h2>
            <h3>Overview :</h3>
            <p>{movie.overview}</p>
        </div>
      
        </>
    )
}

export default Specific