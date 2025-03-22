import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import fetchAllMovies from "rest-api/fetchFavoriteMovies";
import MoviesList from "components/MoviesList/MoviesList";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("");
    const location = useLocation();
    


    useEffect(() => {
        setStatus("pending");


        fetchAllMovies().then(resp => {
            setMovies(resp.results)
            setStatus("success")
        }).catch(() => setStatus("error"))
     }, []);

    return (<div>
        {status === "pending" && <p>Loading...</p>}
        {status === "error" && <p>Something went wrong. Please try again.</p>}
        {status === "success" && movies.length > 0 && <MoviesList location={location} movies={movies} />}
        {status === "success" && movies.length === 0 && <p>No movies found.</p>}
    </div>);
};