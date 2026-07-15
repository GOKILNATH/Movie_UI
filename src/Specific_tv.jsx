import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Specific_tv(){

    const { id } = useParams();
    const [show,setShow] = useState([]);
    const api = "08e4c6acd659c7d1540df289e379bccd";

    const shows = async() =>{
        try{
            const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api}&language=en-US`)
            const json = await res.json();
            console.log(json);
            setShow(json);
        }
        catch(err){
            console.error(err);
        }
    }

        useEffect(()=>{
            shows();
        }, [id])

        const imgs = (posterpath) => {
            return `https://image.tmdb.org/t/p/original${posterpath}`
        }

    return(
        <>
        <div className="specificContainer">
            <img src={imgs(show.poster_path)} alt={show.original_name} />
            <h1>{show.name}</h1>
            <h2>Release Date : {show.first_air_date}</h2>
            <h3>Overview :</h3>
            <p>{show.overview}</p>
        </div>
      
        </>
    )
}

export default Specific_tv