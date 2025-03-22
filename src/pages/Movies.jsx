import { useState , useEffect } from "react";
import { useSearchParams , useLocation} from "react-router-dom";
import fetchMoviesByName from "rest-api/fetchMoviesByName";
import SearchForm from "components/SearchForm/SearchForm";
import MoviesList from "components/MoviesList/MoviesList";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const quary = searchParams.get("quary") ?? "";

    useEffect(() => { 
   
        if (quary === "") {
            return
        };

        setStatus("pending")
        fetchMoviesByName(quary)
            .then(data => {
            setStatus("success")
            setMovies(data.results);
        })
        .catch(() => setStatus("error"))

    }, [quary]);
 
    const onGetMovieName = (e) => {
        e.preventDefault();
        const value = e.target[0].value.trim();

        if (value === "") {
            return setSearchParams({});
        };
        
        if (value !== "") {
            setSearchParams({ quary: value });
        };
            
        setStatus("pending")
        fetchMoviesByName(quary)
            .then(data => {
            setStatus("success")
            setMovies(data.results);
        })
        .catch(() => setStatus("error"))
        .finally(() => e.target[0].value = "");
    }
    
    return (<div>
        <SearchForm findMovies={onGetMovieName} />
        {status === "pending" && <p>Loading...</p>}
        {status === "error" && <p>Something went wrong. Please try again.</p>}
        {status === "success" && movies.length > 0 && <MoviesList movies={movies} location={location} />}
        {status === "success" && movies.length === 0 && <p>No movies found.</p>}
    </div>);
};



