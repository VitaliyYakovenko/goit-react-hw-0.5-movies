import { useEffect, useState , useRef} from "react";
import {Link, NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import fetchMovieById from "rest-api/fetchMovieById";
import MovieInfro from "components/MovieInfro/MovieInfro";


export default function MoviesById() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const locationRef = useRef(location?.state?.from ?? "/");

    useEffect(() => {
        fetchMovieById(movieId).then(setMovie);

     }, [movieId]); 
  

    return (<div>
        <Link to={locationRef.current}>Go back</Link>
        <MovieInfro movie={movie} />
        <NavLink to={"cast"}>
            <button>cast</button>
        </NavLink>
        <NavLink to={"reviews"}>
            <button>reviews</button>
        </NavLink>
        <div>
            <Outlet />
        </div>
    </div>);
};