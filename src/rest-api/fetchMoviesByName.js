import { BASE_URL, KEY } from "./fetchFavoriteMovies";



export default async function fetchMoviesByName(query) {
    try { 
        const resp = await fetch(`${BASE_URL}/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
        if (!resp.ok) {
            throw new Error();
        }
        const data = await resp.json();
        return data;
    } catch(error) {
        console.log(error);
    }    
};