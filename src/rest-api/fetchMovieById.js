import { KEY, BASE_URL } from "./fetchFavoriteMovies";



export default async function fetchMovieById(id) {
    try {
        const resp = await fetch(`${BASE_URL}/3/movie/${id}?api_key=${KEY}&language=en`);
        if (!resp.ok) {
            throw new Error();
        }
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }

};